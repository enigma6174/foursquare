import { combineReducers } from "redux";
import asyncReducer from "../async/reducer";
import authReducer from "../auth/reducer";
import eventReducer from "../events/reducer";
import modalReducer from "../modal/reducer";
import sandboxReducer from "../sandbox/reducer";

const rootReducer = combineReducers({
  sandbox: sandboxReducer,
  event: eventReducer,
  modal: modalReducer,
  auth: authReducer,
  async: asyncReducer,
});

export default rootReducer;
