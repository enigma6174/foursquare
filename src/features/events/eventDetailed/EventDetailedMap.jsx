import React from "react";
import { Icon, Segment } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

function Marker() {
  return <Icon name="marker" size="big" color="red" />;
}

export default function EventDetailedMap({ coordinates }) {
  const zoomLevel = 14;
  return (
    <Segment attached="bottom" style={{ padding: 0 }}>
      <div style={{ height: 300, width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDymsU2cdpm0qf5DqQOKdxfYKiS9hVxtJw" }}
          center={coordinates}
          zoom={zoomLevel}
        >
          <Marker lat={coordinates["lat"]} lng={coordinates["lng"]} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
}
