// Login
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export interface LoginPayload {
  email: string;
  password: string;
}
export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: LoginPayload;
}
export const LOGIN_SUCCESS = "lOGIN_SUCCESS";
export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  data: { token: string };
}
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: Error | string | unknown;
}

// Register
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export interface RegisterPayload {
  email: string | undefined;
  password: string | undefined;
  fullname: string | undefined;
  role: string;
}
export interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
  payload: RegisterPayload;
}
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  data: { token: string };
}
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  error: Error | string | unknown;
}

export const SET_IS_LOGGEDIN = "SET_IS_LOGGEDIN";
export interface SetIsLoggedInAction {
  type: typeof SET_IS_LOGGEDIN;
  payload: boolean;
}

// Get Profile
export const GET_PROFILE_REQUEST = "GET_PROFILE_REQUEST";
export interface GetProfileRequestAction {
  type: typeof GET_PROFILE_REQUEST;
}
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export interface User {
  id?: string;
  fullname: string;
  email: string;
  location: string;
  bank: string;
  account_number: number | null;
  avatar: string | null;
}
export interface GetProfileSuccessAction {
  type: typeof GET_PROFILE_SUCCESS;
  data: User;
}
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";
export interface GetProfileFailureAction {
  type: typeof GET_PROFILE_FAILURE;
  error: string;
}

// Update Profile
export const UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST";
export interface UpdateProfileRequestAction {
  type: typeof UPDATE_PROFILE_REQUEST;
  payload: User;
}
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export interface UpdateProfileSuccessAction {
  type: typeof UPDATE_PROFILE_SUCCESS;
  data: User;
}
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";
export interface UpdateProfileFailureAction {
  type: typeof UPDATE_PROFILE_FAILURE;
  error: string;
}

export type AuthActions =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailureAction
  | SetIsLoggedInAction
  | GetProfileRequestAction
  | GetProfileSuccessAction
  | GetProfileFailureAction
  | UpdateProfileRequestAction
  | UpdateProfileSuccessAction
  | UpdateProfileFailureAction;
