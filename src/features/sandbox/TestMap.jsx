import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function TestMap({ location }) {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBwRq8mS3Buq1WylOncaE_nAwMR6JIADhc" }}
        center={location.center}
        zoom={location.zoom}
      >
        <AnyReactComponent
          // lat={coordinates["lat"]}
          // lng={coordinates["lng"]}
          text="Default"
        />
      </GoogleMapReact>
    </div>
  );
}
