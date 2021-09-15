import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../redux/modal/action";
import { decrement, increment, reset } from "../../redux/sandbox/actions";
import TestMap from "./TestMap";
import TestPlaceInput from "./TestPlaceInput";

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sandbox.data);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const [location, setLocation] = useState(defaultProps);

  function updateLocation(coordinates) {
    setLocation({
      ...location,
      center: { lat: coordinates["lat"], lng: coordinates["lng"] },
    });
  }

  return (
    <div>
      <h1>TESTING</h1>
      <h1>DATA IS {data}</h1>
      <Button
        onClick={() => dispatch(increment(3))}
        color="green"
        content="Increment"
      />
      <Button
        onClick={() => dispatch(decrement(1))}
        color="red"
        content="Decrement"
      />
      <Button
        onClick={() => dispatch(reset())}
        color="twitter"
        content="Reset"
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
        color="grey"
        content="Open Modal"
      />
      <div style={{ marginTop: 15 }}>
        <TestPlaceInput setCoordinates={updateLocation} />
        <TestMap location={location} />
      </div>
    </div>
  );
}
