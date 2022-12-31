import { Submission } from "./contestActionTypes";

// Login
export const GET_SUBMISSION_REQUEST = "GET_SUBMISSION_REQUEST";
export interface GetSubmissionRequestAction {
  type: typeof GET_SUBMISSION_REQUEST;
  payload: number;
}
export const GET_SUBMISSION_SUCCESS = "GET_SUBMISSION_SUCCESS";
export interface GetSubmissionSuccessAction {
  type: typeof GET_SUBMISSION_SUCCESS;
  data: Submission;
}
export const GET_SUBMISSION_FAILURE = "GET_SUBMISSION_FAILURE";
export interface GetSubmissionFailureAction {
  type: typeof GET_SUBMISSION_FAILURE;
  error: string;
}

export type SubmissionActions =
  | GetSubmissionRequestAction
  | GetSubmissionSuccessAction
  | GetSubmissionFailureAction
