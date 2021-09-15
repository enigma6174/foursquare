/* global google */
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Header, Segment } from "semantic-ui-react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { createEvent, updateEvent } from "../../../redux/events/actions.js";
import MyTextInput from "../../../app/common/form/MyTextInput.jsx";
import MyTextArea from "../../../app/common/form/MyTextArea.jsx";
import MySelectInput from "../../../app/common/form/MySelectInput.jsx";
import { categoryData } from "../../../app/api/categoryOptions.js";
import MyDatePicker from "../../../app/common/form/MyDatePicker.jsx";
import MyPlaceInput from "../../../app/common/form/MyPlaceInput.jsx";

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: {
      location: "",
      coordinates: null,
    },
    venue: {
      location: "",
      coordinates: null,
    },
    date: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Event Title cannot be empty"),
    category: Yup.string().required("Event Category cannot be empty"),
    city: Yup.object().shape({
      location: Yup.string().required("City Cannot Be Blank"),
    }),
    venue: Yup.object().shape({
      location: Yup.string().required("Venue Cannot Be Blank"),
    }),
    date: Yup.string().required(),
  });

  function handleFormSubmit(values) {
    console.log(values);
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: Math.ceil(Math.random() * 100).toString(),
            attendees: [],
            hostedBy: "John",
            hostPhotoURL: "/assets/user.png",
          })
        );
    history.push("/events");
  }

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ isSubmitting, dirty, isValid, values }) => (
          <Form className="ui form">
            <Header sub color="teal" content="Event Details" />
            <MyTextInput name="title" type="text" placeholder="Title" />
            <MySelectInput
              name="category"
              placeholder="Category"
              options={categoryData}
            />
            <MyTextArea
              name="description"
              type="text"
              placeholder="Description"
              rows={3}
            />
            <Header sub color="teal" content="Event Location Details" />
            <MyPlaceInput name="city" type="text" placeholder="City" />
            <MyPlaceInput
              disabled={!values.city.coordinates}
              name="venue"
              type="text"
              placeholder="Venue"
              options={{
                location: new google.maps.LatLng(values.city.coordinates),
                radius: 1000,
                types: ["establishment"],
              }}
            />

            <MyDatePicker
              name="date"
              placeholderText="Date"
              timeFormat="HHmm"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyy HHmm"
            />
            {/* <MyTextInput name="date" type="date" placeholder="Date" /> */}
            <Button
              loading={isSubmitting}
              type="submit"
              floated="right"
              disabled={!isValid || !dirty || isSubmitting}
              positive
              content={selectedEvent ? "Update" : "Submit"}
            />
            <Button
              disabled={isSubmitting}
              as={Link}
              to="/events"
              type="submit"
              floated="right"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}
