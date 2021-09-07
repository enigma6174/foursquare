import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { decrement, increment, reset } from "../../redux/sandbox/actions";

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sandbox.data);

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
    </div>
  );
}
