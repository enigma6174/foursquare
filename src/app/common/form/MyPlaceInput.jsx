import React from "react";
import { useField } from "formik";
import { FormField, Label, List, Segment } from "semantic-ui-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function MyPlaceInput({ label, options, ...props }) {
  const [field, meta, helpers] = useField(props);

  function handleSelect(location) {
    geocodeByAddress(location)
      .then((results) => getLatLng(results[0]))
      .then((coordinates) => helpers.setValue({ location, coordinates }))
      .catch((error) => helpers.setError(error));
  }

  function handleBlur(e) {
    field.onBlur(e);
    if (!field.value.coordinates) {
      helpers.setValue({ location: "", coordinates: null });
    }
  }

  return (
    <PlacesAutocomplete
      value={field.value["location"]}
      onChange={(value) => helpers.setValue({ location: value })}
      onSelect={(value) => handleSelect(value)}
      searchOptions={options}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <FormField error={meta.touched && !!meta.error}>
          <input
            {...getInputProps({
              name: field.name,
              onBlur: (e) => handleBlur(e),
              ...props,
            })}
          />
          {meta.touched && meta.error ? (
            <Label pointing content={meta.error["location"]} />
          ) : null}
          {suggestions?.length > 0 && (
            <Segment
              loading={loading}
              style={{
                marginTop: 0,
                position: "absolute",
                zIndex: 1000,
                width: "100%",
              }}
            >
              <List selection>
                {suggestions.map((suggestion) => (
                  <List.Item
                    key={suggestion.placeId}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <List.Header>
                      {suggestion.formattedSuggestion.mainText}
                    </List.Header>
                    <List.Description>
                      {suggestion.formattedSuggestion.secondaryText}
                    </List.Description>
                  </List.Item>
                ))}
              </List>
            </Segment>
          )}
        </FormField>
      )}
    </PlacesAutocomplete>
  );
}
