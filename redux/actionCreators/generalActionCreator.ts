import {
  SetToastMessage,
  SetToastStatus,
  SET_TOAST_MESSAGE,
  SET_TOAST_STATUS,
} from "../actionTypes/generalTypes";

export const setToastMessage = (payload: string): SetToastMessage => {
  return {
    type: SET_TOAST_MESSAGE,
    payload,
  };
};

export const setToastStatus = (payload: string): SetToastStatus => {
  return {
    type: SET_TOAST_STATUS,
    payload,
  };
};
