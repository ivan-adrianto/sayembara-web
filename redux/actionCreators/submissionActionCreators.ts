import { Submission } from "../actionTypes/contestActionTypes";
import { GetSubmissionFailureAction, GetSubmissionRequestAction, GetSubmissionSuccessAction, GET_SUBMISSION_FAILURE, GET_SUBMISSION_REQUEST, GET_SUBMISSION_SUCCESS } from "../actionTypes/submissionTypes";

export const getSubmissionRequest = (payload: number): GetSubmissionRequestAction => {
  return {
    type: GET_SUBMISSION_REQUEST,
    payload,
  };
};

export const getSubmissionSuccess = (data: Submission): GetSubmissionSuccessAction => {
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
