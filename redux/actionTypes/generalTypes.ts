// Toast
export const SET_TOAST_MESSAGE = "SET_TOAST_MESSAGE";
export interface SetToastMessage {
  type: typeof SET_TOAST_MESSAGE;
  payload: string;
}

export const SET_TOAST_STATUS = "SET_TOAST_STATUS";
export interface SetToastStatus {
  type: typeof SET_TOAST_STATUS;
  payload: string;
}
export type GeneralActions = SetToastMessage | SetToastStatus;
