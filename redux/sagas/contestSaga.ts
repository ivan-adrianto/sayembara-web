import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  Categories,
  GetCategoriesRequestAction,
  GetContestDetailRequestAction,
  GetContestsRequestAction,
  GET_CATEGORIES_REQUEST,
  GET_CONTESTS_REQUEST,
  GET_CONTEST_DETAIL_REQUEST,
} from "../actionTypes/contestActionTypes";
import { isAxiosError } from "axios";
import Router from "next/router";
import {
  getCategories,
  getContestDetail,
  getContests,
} from "../services/contests";
import {
  getCategoriesFailure,
  getCategoriesSuccess,
  getContestDetailFailure,
  getContestDetailSuccess,
  getContestsFailure,
  getContestsSuccess,
} from "../actionCreators/contestActionCreators";

/* ---- Get Contests ---- */
function* getContestsSaga(action: GetContestsRequestAction) {
  try {
    const { data } = yield call(getContests, action.payload);
    yield put(getContestsSuccess(data.data));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(getContestsFailure(error.response?.data.message));
    } else {
      yield put(getContestsFailure("Something wrong. Try again later"));
    }
  }
}

export function* getContestsRequestSaga() {
  yield takeLatest(GET_CONTESTS_REQUEST, getContestsSaga);
}

/* ---- Get Categories ---- */
function* getCategoriesSaga() {
  try {
    const { data } = yield call(getCategories);
    const categories = data.data.map((item: Categories) => {
      return { value: item.id, label: item.name, id: item.id };
    });
    yield put(getCategoriesSuccess(categories));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(getCategoriesFailure(error.response?.data.message));
    } else {
      yield put(getCategoriesFailure(error));
    }
  }
}

export function* getCategoriesRequestSaga() {
  yield takeLatest(GET_CATEGORIES_REQUEST, getCategoriesSaga);
}

/* ---- Get Contest Detail ---- */
function* getContestDetailSaga(action: GetContestDetailRequestAction) {
  try {
    const { data } = yield call(getContestDetail, action.payload);
    yield put(getContestDetailSuccess(data.data));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(getContestDetailFailure(error.response?.data.message));
    } else {
      yield put(getContestDetailFailure("Something went wrong. Try again later"));
    }
  }
}

export function* getContestDetailRequestSaga() {
  yield takeLatest(GET_CONTEST_DETAIL_REQUEST, getContestDetailSaga);
}

/* ----  ---- */
export function* contestSaga() {
  yield all([
    call(getContestsRequestSaga),
    call(getCategoriesRequestSaga),
    call(getContestDetailRequestSaga),
  ]);
}
