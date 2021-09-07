import { combineReducers } from "redux";
import eventReducer from "../events/reducer";
import sandboxReducer from "../sandbox/reducer";

const rootReducer = combineReducers({
  sandbox: sandboxReducer,
  event: eventReducer,
});

export default rootReducer;
