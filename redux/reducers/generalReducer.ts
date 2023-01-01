import { GeneralActions, SET_TOAST_MESSAGE, SET_TOAST_STATUS } from "../actionTypes/generalTypes";

export const initialGeneralState = {
  toastMessage: "",
  toastStatus: "success"
};

export const generalReducer = (
  state = initialGeneralState,
  action: GeneralActions
) => {
  switch (action.type) {
    // Toast
    case SET_TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: action.payload
      };
    case SET_TOAST_STATUS:
      return {
        ...state,
        toastStatus: action.payload
      };
    default:
      return state;
  }
};
