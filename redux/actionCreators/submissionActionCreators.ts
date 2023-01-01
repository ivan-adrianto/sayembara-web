import { Submission } from "../actionTypes/contestActionTypes";
import {
  GetSubmissionFailureAction,
  GetSubmissionRequestAction,
  GetSubmissionSuccessAction,
  GET_SUBMISSION_FAILURE,
  GET_SUBMISSION_REQUEST,
  GET_SUBMISSION_SUCCESS,
  SubmissionSubmitted,
  SubmitSubmissionFailureAction,
  SubmitSubmissionRequestAction,
  SubmitSubmissionSuccessAction,
  SUBMIT_SUBMISSION_FAILURE,
  SUBMIT_SUBMISSION_REQUEST,
  SUBMIT_SUBMISSION_SUCCESS,
} from "../actionTypes/submissionTypes";

// Get Submission
export const getSubmissionRequest = (
  payload: number
): GetSubmissionRequestAction => {
  return {
    type: GET_SUBMISSION_REQUEST,
    payload,
  };
};

export const getSubmissionSuccess = (
  data: Submission
): GetSubmissionSuccessAction => {
  return {
    type: GET_SUBMISSION_SUCCESS,
    data,
  };
};

export const getSubmissionFailure = (
  error: string
): GetSubmissionFailureAction => {
  return {
    type: GET_SUBMISSION_FAILURE,
    error,
  };
};

// Submit Submission
export const submitSubmissionRequest = (
  payload: SubmissionSubmitted
): SubmitSubmissionRequestAction => {
    console.log('payload', payload)
  return {
    type: SUBMIT_SUBMISSION_REQUEST,
    payload,
  };
};

export const submitSubmissionSuccess = (
  data: SubmissionSubmitted
): SubmitSubmissionSuccessAction => {
  return {
    type: SUBMIT_SUBMISSION_SUCCESS,
    data,
  };
};

export const submitSubmissionFailure = (
  error: string
): SubmitSubmissionFailureAction => {
  return {
    type: SUBMIT_SUBMISSION_FAILURE,
    error,
  };
};
