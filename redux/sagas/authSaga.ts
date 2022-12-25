import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../actionCreators/authActionCreators";
import {
  LoginRequestAction,
  LOGIN_REQUEST,
} from "../actionTypes/authActionTypes";
import { addBearerToken, removeBearerToken } from "../services/api";
import { login } from "../services/auth";
import { AxiosError } from "axios";
import Router from "next/router";

/* ---- Register ---- */
function* loginSaga(action: LoginRequestAction) {
  try {
    const { data } = yield call(login, action.payload);
    yield call(addBearerToken, data);
    yield put(loginSuccess(data));
    Router.push("/");
  } catch (error) {
    const err = error as AxiosError;
    yield put(loginFailure(err.response?.data?.message));
  }
}

export function* loginRequestSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

export function* authSaga() {
  yield all([call(loginRequestSaga)]);
}
