import { DECREMENT, INCREMENT, RESET } from "./constants";

export function increment(amount) {
  return {
    type: INCREMENT,
    payload: amount,
  };
}

export function decrement(amount) {
  return {
    type: DECREMENT,
    payload: amount,
  };
}

export function reset(amount = 0) {
  return {
    type: RESET,
    payload: amount,
  };
}
