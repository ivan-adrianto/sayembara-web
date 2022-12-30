import {
  GetContestsFailureAction,
  GetContestsRequestAction,
  GetContestsSuccessAction,
  GetContestsPayload,
  GET_CONTESTS_FAILURE,
  GET_CONTESTS_REQUEST,
  GET_CONTESTS_SUCCESS,
  Contest,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  Categories,
  GetCategoriesSuccessAction,
  GetCategoriesFailureAction,
  GetCategoriesRequestAction,
  GetContestDetailRequestAction,
  GetContestDetailSuccessAction,
  GetContestDetailFailureAction,
  GET_CONTEST_DETAIL_REQUEST,
  GET_CONTEST_DETAIL_SUCCESS,
  GET_CONTEST_DETAIL_FAILURE,
} from "../actionTypes/contestActionTypes";

export const getContestsRequest = (
  payload: GetContestsPayload
): GetContestsRequestAction => {
  return {
    type: GET_CONTESTS_REQUEST,
    payload,
  };
};

export const getContestsSuccess = (
  data: Contest[]
): GetContestsSuccessAction => {
  return {
    type: GET_CONTESTS_SUCCESS,
    data,
  };
};

export const getContestsFailure = (
  error: string
): GetContestsFailureAction => {
  return {
    type: GET_CONTESTS_FAILURE,
    error,
  };
};

// Get Categories
export const getCategoriesRequest = (): GetCategoriesRequestAction => {
  return {
    type: GET_CATEGORIES_REQUEST,
  };
};

export const getCategoriesSuccess = (
  data: Categories[]
): GetCategoriesSuccessAction => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    data,
  };
};

export const getCategoriesFailure = (
  error: Error | string | unknown
): GetCategoriesFailureAction => {
  return {
    type: GET_CATEGORIES_FAILURE,
    error,
  };
};

export const getContestDetailRequest = (
  payload: string
): GetContestDetailRequestAction => {
  return {
    type: GET_CONTEST_DETAIL_REQUEST,
    payload,
  };
};

export const getContestDetailSuccess = (
  data: Contest[]
): GetContestDetailSuccessAction => {
  return {
    type: GET_CONTEST_DETAIL_SUCCESS,
    data,
  };
};

export const getContestDetailFailure = (
  error: string
): GetContestDetailFailureAction => {
  return {
    type: GET_CONTEST_DETAIL_FAILURE,
    error,
  };
};