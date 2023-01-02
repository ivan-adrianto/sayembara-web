import {
  AuthActions,
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SET_IS_LOGGEDIN,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "../actionTypes/authActionTypes";
import Cookie from "js-cookie";

export const initialAuthState = {
  loadingLogin: false,
  successLogin: false,
  errLogin: null,
  loadingRegister: false,
  successRegister: false,
  errRegister: null,
  loadingGetProfile: false,
  errGetProfile: null,
  user: {},
  loadingUpdateProfile: false,
  errUpdateProfile: null,
  isLoggedIn: Cookie.get("token") ? true : false,
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

    // Get Profile
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        loadingGetProfile: true,
        errGetProfile: null,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loadingGetProfile: false,
        user: action.data,
        errGetProfile: null,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        loadingGetProfile: false,
        user: {},
        errGetProfile: action.error,
      };

    // Get Profile
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loadingUpdateProfile: true,
        errUpdateProfile: null,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loadingUpdateProfile: false,
        user: action.data,
        errUpdateProfile: null,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loadingUpdateProfile: false,
        user: {},
        errUpdateProfile: action.error,
      };

    // Set isLoggedIn
    case SET_IS_LOGGEDIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    default:
      return state;
  }
};
