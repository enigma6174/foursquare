import { DECREMENT, INCREMENT, RESET } from "./constants";

const initialState = {
  data: 42,
};

export default function sandboxReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    default:
      return state;
    case INCREMENT:
      return {
        ...state,
        data: state.data + payload,
      };
    case DECREMENT:
      return {
        ...state,
        data: state.data - payload,
      };
    case RESET:
      return {
        ...state,
        data: 0,
      };
  }
}
