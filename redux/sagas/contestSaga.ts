import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  GetContestsRequestAction,
  GET_CONTESTS_REQUEST,
} from "../actionTypes/contestActionTypes";
import { isAxiosError } from "axios";
import Router from "next/router";
import { getContests } from "../services/contests";
import { getContestsFailure, getContestsSuccess } from "../actionCreators/contesActionCreators";

/* ---- Get Contests ---- */
function* getContestsSaga(action: GetContestsRequestAction) {
  try {
    const { data } = yield call(getContests, action.payload);
    yield put(getContestsSuccess(data.data));
    Router.push("/");
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(getContestsFailure(error.response?.data.message));
    } else {
      yield put(getContestsFailure(error));
    }
  }
}

export function* getContestsRequestSaga() {
  yield takeLatest(GET_CONTESTS_REQUEST, getContestsSaga);
}
export function* contestSaga() {
  yield all([call(getContestsRequestSaga)]);
}
