import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  registerFailure,
  registerSuccess,
} from "../actionCreators/authActionCreators";
import {
  LoginRequestAction,
  LOGIN_REQUEST,
  RegisterRequestAction,
  REGISTER_REQUEST,
} from "../actionTypes/authActionTypes";
import { addBearerToken } from "../services/api";
import { getProfile, login, register } from "../services/auth";
import { isAxiosError } from "axios";
import Router from "next/router";
import Cookie from 'js-cookie'

/* ---- Login ---- */
function* loginSaga(action: LoginRequestAction) {
  try {
    const { data } = yield call(login, action.payload);
    yield call(addBearerToken, data.data.token);
    Cookie.set('token', data.data.token)
    yield call(getProfile);
    yield put(loginSuccess(data.data));
    Router.push("/");
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(loginFailure(error.response?.data.message));
    } else {
      yield put(loginFailure(error));
    }
  }
}

export function* loginRequestSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

/* ---- Register ---- */
function* registerSaga(action: RegisterRequestAction) {
  try {
    const { data } = yield call(register, action.payload);

    yield call(addBearerToken, data.data.token);
    yield call(getProfile);
    yield put(registerSuccess(data.data));
    Router.push("/");
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(registerFailure(error.response?.data.message));
    } else {
      yield put(registerFailure(error));
    }
  }
}

export function* registerRequestSaga() {
  yield takeLatest(REGISTER_REQUEST, registerSaga);
}
export function* authSaga() {
  yield all([call(loginRequestSaga), call(registerRequestSaga)]);
}
