import {
  LoginFailureAction,
  LoginPayload,
  LoginRequestAction,
  LoginSuccessAction,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RegisterFailureAction,
  RegisterPayload,
  RegisterRequestAction,
  RegisterSuccessAction,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SetIsLoggedInAction,
  SET_IS_LOGGEDIN,
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

export const loginFailure = (error: Error | string | unknown): LoginFailureAction => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};

// Register
export const registerRequest = (
  payload: RegisterPayload
): RegisterRequestAction => {
  return {
    type: REGISTER_REQUEST,
    payload,
  };
};

export const registerSuccess = (data: {
  token: string;
}): RegisterSuccessAction => {
  return {
    type: REGISTER_SUCCESS,
    data,
  };
};

export const registerFailure = (
  error: Error | string | unknown
): RegisterFailureAction => {
  return {
    type: REGISTER_FAILURE,
    error,
  };
};

export const setIsLoggedIn = (payload: boolean): SetIsLoggedInAction => {
  return {
    type: SET_IS_LOGGEDIN,
    payload,
  };
};
