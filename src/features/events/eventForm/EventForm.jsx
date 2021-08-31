import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm({ setFormOpen }) {
  return (
    <Segment clearing>
      <Header content="Create New Event" />
      <Form>
        <Form.Field>
          <input type="text" placeholder="Event Title" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Event Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Event Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Event Location" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Event Venue" />
        </Form.Field>
        <Form.Field>
          <input type="date" placeholder="Event Date" />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          onClick={() => setFormOpen(false)}
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
