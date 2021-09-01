import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard() {
  const [events, setEvent] = useState(sampleData);

  // function handleCreateEvent(newEvent) {
  //   setEvent([...events, newEvent]);
  // }

  // function handleUpdateEvent(updatedEvent) {
  //   setEvent(
  //     events.map((event) =>
  //       event.id === updatedEvent.id ? updatedEvent : event
  //     )
  //   );
  //   selectEvent(null);
  // }

  function handleDeleteEvent(eventId) {
    setEvent(events.filter((event) => event.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
}
