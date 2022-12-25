import {
  AuthActions,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionTypes/authActionTypes";

export const initialAuthState = {
  loadingLogin: false,
  successLogin: false,
  errLogin: null,
  users: null,
  isLoggedIn: false,
};

export const authReducer = (state = initialAuthState, action: AuthActions) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loadingLogin: true,
        successLogin: false,
        errLogin: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loadingLogin: false,
        successLogin: true,
        errLogin: null,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loadingLogin: false,
        successLogin: false,
        errLogin: action.error,
      };

    default:
      return state;
  }
};
