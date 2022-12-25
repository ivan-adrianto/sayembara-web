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
  error: Error | string;
}

export type AuthActions =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;
