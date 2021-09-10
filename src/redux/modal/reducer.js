import { CLOSE_MODAL, OPEN_MODAL } from "./constant";

const initialState = null;

export default function modalReducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
    case OPEN_MODAL:
      const { modalType, modalProps } = payload;
      return { modalType, modalProps };
    case CLOSE_MODAL:
      return null;
  }
}
