import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  Categories,
  GetCategoriesRequestAction,
  GetContestsRequestAction,
  GET_CATEGORIES_REQUEST,
  GET_CONTESTS_REQUEST,
} from "../actionTypes/contestActionTypes";
import { isAxiosError } from "axios";
import Router from "next/router";
import { getCategories, getContests } from "../services/contests";
import {
  getCategoriesFailure,
  getCategoriesSuccess,
  getContestsFailure,
  getContestsSuccess,
} from "../actionCreators/contesActionCreators";

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

/* ---- Get Categories ---- */
function* getCategoriesSaga() {
  try {
    const { data } = yield call(getCategories);
    const categories = data.data.map((item: Categories) => {
      return { value: item.id, label: item.name, id: item.id };
    });
    yield put(getCategoriesSuccess(categories));
    Router.push("/");
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
export function* contestSaga() {
  yield all([call(getContestsRequestSaga), call(getCategoriesRequestSaga)]);
}
