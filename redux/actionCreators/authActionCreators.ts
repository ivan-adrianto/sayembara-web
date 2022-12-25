import {
  LoginFailureAction,
  LoginPayload,
  LoginRequestAction,
  LoginSuccessAction,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionTypes/authActionTypes";

export const loginRequest = (payload: LoginPayload): LoginRequestAction => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};

export const loginSuccess = (data: { token: string }): LoginSuccessAction => {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};

export const loginFailure = (error: Error | string): LoginFailureAction => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};
