import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getProfileFailure,
  getProfileRequest,
  getProfileSuccess,
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
  updateProfileFailure,
  updateProfileSuccess,
} from "../actionCreators/authActionCreators";
import {
  GET_PROFILE_REQUEST,
  LoginRequestAction,
  LOGIN_REQUEST,
  RegisterRequestAction,
  REGISTER_REQUEST,
  UpdateProfileRequestAction,
  UPDATE_PROFILE_REQUEST,
} from "../actionTypes/authActionTypes";
import { addBearerToken } from "../services/api";
import { getProfile, login, register, updateProfile } from "../services/auth";
import { isAxiosError } from "axios";
import Router from "next/router";
import Cookie from "js-cookie";
import { setToastMessage, setToastStatus } from "../actionCreators/generalActionCreator";

/* ---- Login ---- */
function* loginSaga(action: LoginRequestAction) {
  try {
    const { data } = yield call(login, action.payload);
    yield call(addBearerToken, data.data.token);
    Cookie.set("token", data.data.token);
    yield put(getProfileRequest());
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
    Cookie.set("token", data.data.token);
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

/* ---- Get Profile ---- */
function* getProfileSaga() {
  try {
    const { data } = yield call(getProfile);
    yield call(getProfile);
    yield put(getProfileSuccess(data.data));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(getProfileFailure(error.response?.data.message));
    } else {
      yield put(getProfileFailure("Something went wrong. Try again later."));
    }
  }
}

export function* getProfileRequestSaga() {
  yield takeLatest(GET_PROFILE_REQUEST, getProfileSaga);
}

/* ---- Get Profile ---- */
function* updateProfileSaga(action: UpdateProfileRequestAction) {
  try {
    const { data } = yield call(updateProfile, action.payload);
    yield put(updateProfileSuccess(data.data));
    yield put(setToastStatus("success"))
    yield put(setToastMessage("Profile Updated"))
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(updateProfileFailure(error.response?.data.message));
    } else {
      yield put(updateProfileFailure("Something went wrong. Try again later."));
    }
  }
}

export function* updateProfileRequestSaga() {
  yield takeLatest(UPDATE_PROFILE_REQUEST, updateProfileSaga);
}

export function* authSaga() {
  yield all([
    call(loginRequestSaga),
    call(registerRequestSaga),
    call(getProfileRequestSaga),
    call(updateProfileRequestSaga),
  ]);
}
