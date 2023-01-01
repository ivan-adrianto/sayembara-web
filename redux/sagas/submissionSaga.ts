import { all, call, put, takeLatest } from "redux-saga/effects";
import { isAxiosError } from "axios";
import {
  GetSubmissionRequestAction,
  GET_SUBMISSION_REQUEST,
  SubmitSubmissionRequestAction,
  SUBMIT_SUBMISSION_REQUEST,
} from "../actionTypes/submissionTypes";
import { getSubmission, submitSubmission } from "../services/submission";
import {
  getSubmissionFailure,
  getSubmissionSuccess,
  submitSubmissionFailure,
  submitSubmissionSuccess,
} from "../actionCreators/submissionActionCreators";
import Router from "next/router";

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

/* ---- Submit Submission ---- */
function* submitSubmissionSaga(action: SubmitSubmissionRequestAction) {
  try {
    const { data } = yield call(submitSubmission, action.payload);
    yield put(submitSubmissionSuccess(data.data));
    Router.back()
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(submitSubmissionFailure(error.response?.data.message));
    } else {
      yield put(
        submitSubmissionFailure("Something Wrong Happened. Try Again Later")
      );
    }
  }
}

export function* submitSubmissionRequestSaga() {
  yield takeLatest(SUBMIT_SUBMISSION_REQUEST, submitSubmissionSaga);
}

export function* submissionSaga() {
  yield all([
    call(getSubmissionRequestSaga),
    call(submitSubmissionRequestSaga),
  ]);
}
