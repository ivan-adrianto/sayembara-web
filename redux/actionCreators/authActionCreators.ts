import {
  GetProfileFailureAction,
  GetProfileRequestAction,
  GetProfileSuccessAction,
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
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
  UpdateProfileFailureAction,
  UpdateProfileRequestAction,
  UpdateProfileSuccessAction,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  User,
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

export const loginFailure = (
  error: Error | string | unknown
): LoginFailureAction => {
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

// Set Is Logged In
export const setIsLoggedIn = (payload: boolean): SetIsLoggedInAction => {
  return {
    type: SET_IS_LOGGEDIN,
    payload,
  };
};

// Get Profile
export const getProfileRequest = (): GetProfileRequestAction => {
  return {
    type: GET_PROFILE_REQUEST,
  };
};

export const getProfileSuccess = (data: User): GetProfileSuccessAction => {
  return {
    type: GET_PROFILE_SUCCESS,
    data,
  };
};

export const getProfileFailure = (error: string): GetProfileFailureAction => {
  return {
    type: GET_PROFILE_FAILURE,
    error,
  };
};

// Update Profile
export const updateProfileRequest = (
  payload: User
): UpdateProfileRequestAction => {
  return {
    type: UPDATE_PROFILE_REQUEST,
    payload,
  };
};

export const updateProfileSuccess = (
  data: User
): UpdateProfileSuccessAction => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    data,
  };
};

export const updateProfileFailure = (
  error: string
): UpdateProfileFailureAction => {
  return {
    type: UPDATE_PROFILE_FAILURE,
    error,
  };
};
