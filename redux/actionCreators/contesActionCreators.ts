import {
  GetContestsFailureAction,
  GetContestsRequestAction,
  GetContestsSuccessAction,
  GetContestsPayload,
  GET_CONTESTS_FAILURE,
  GET_CONTESTS_REQUEST,
  GET_CONTESTS_SUCCESS,
  Contest,
} from "../actionTypes/contestActionTypes";

export const getContestsRequest = (payload: GetContestsPayload): GetContestsRequestAction => {
  return {
    type: GET_CONTESTS_REQUEST,
    payload,
  };
};

export const getContestsSuccess = (data: Contest[]): GetContestsSuccessAction => {
  return {
    type: GET_CONTESTS_SUCCESS,
    data,
  };
};

export const getContestsFailure = (error: Error | string | unknown): GetContestsFailureAction => {
  return {
    type: GET_CONTESTS_FAILURE,
    error,
  };
};