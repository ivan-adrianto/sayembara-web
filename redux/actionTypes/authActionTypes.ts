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

export type AuthActions =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailureAction;
