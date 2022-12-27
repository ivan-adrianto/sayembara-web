import {
  AuthActions,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../actionTypes/authActionTypes";

export const initialAuthState = {
  loadingLogin: false,
  successLogin: false,
  errLogin: null,
  loadingRegister: false,
  successRegister: false,
  errRegister: null,
  users: null,
  isLoggedIn: false,
};

export const authReducer = (state = initialAuthState, action: AuthActions) => {
  switch (action.type) {
    // Login
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

    // Register
    case REGISTER_REQUEST:
      return {
        ...state,
        loadingRegister: true,
        successRegister: false,
        errRegister: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loadingRegister: false,
        successRegister: true,
        errRegister: null,
        isLoggedIn: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loadingRegister: false,
        successRegister: false,
        errRegister: action.error,
      };

    default:
      return state;
  }
};
