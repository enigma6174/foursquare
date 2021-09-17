import { toast } from "react-toastify";
import { delay } from "../../app/common/utils/util";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../async/actions";
import { DECREMENT, INCREMENT, RESET } from "./constants";

export function increment(amount) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(1000);
      dispatch({ type: INCREMENT, payload: amount });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
}

export function decrement(amount) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(1000);
      dispatch({ type: DECREMENT, payload: amount });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
      toast.error(error);
    }
  };
}

export function reset(amount = 0) {
  return {
    type: RESET,
    payload: amount,
  };
}
