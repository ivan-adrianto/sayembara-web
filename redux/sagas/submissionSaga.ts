import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  loginFailure,
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
import Cookie from "js-cookie";
import {
  GetSubmissionRequestAction,
  GET_SUBMISSION_REQUEST,
} from "../actionTypes/submissionTypes";
import { getSubmission } from "../services/submission";
import {
  getSubmissionFailure,
  getSubmissionSuccess,
} from "../actionCreators/submissionActionCreators";

/* ---- Get Submission ---- */
function* getSubmissionSaga(action: GetSubmissionRequestAction) {
  try {
    const { data } = yield call(getSubmission, action.payload);
    yield put(getSubmissionSuccess(data.data));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(getSubmissionFailure(error.response?.data.message));
    } else {
      yield put(
        getSubmissionFailure("Something Wrong Happened. Try Again Later")
      );
    }
  }
}

export function* getSubmissionRequestSaga() {
  yield takeLatest(GET_SUBMISSION_REQUEST, getSubmissionSaga);
}

export function* submissionSaga() {
  yield all([call(getSubmissionRequestSaga)]);
}
