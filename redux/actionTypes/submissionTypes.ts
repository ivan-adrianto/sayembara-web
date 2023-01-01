import { Submission } from "./contestActionTypes";

// Get Submission
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

// submit submission
export const SUBMIT_SUBMISSION_REQUEST = "SUBMIT_SUBMISSION_REQUEST";
export interface SubmissionSubmitted {
  contest_id: number;
  images: string[];
  title: string;
  description: string;
}
export interface SubmitSubmissionRequestAction {
  type: typeof SUBMIT_SUBMISSION_REQUEST;
  payload: SubmissionSubmitted;
}
export const SUBMIT_SUBMISSION_SUCCESS = "SUBMIT_SUBMISSION_SUCCESS";
export interface SubmitSubmissionSuccessAction {
  type: typeof SUBMIT_SUBMISSION_SUCCESS;
  data: SubmissionSubmitted;
}
export const SUBMIT_SUBMISSION_FAILURE = "SUBMIT_SUBMISSION_FAILURE";
export interface SubmitSubmissionFailureAction {
  type: typeof SUBMIT_SUBMISSION_FAILURE;
  error: string;
}

export type SubmissionActions =
  | GetSubmissionRequestAction
  | GetSubmissionSuccessAction
  | GetSubmissionFailureAction
  | SubmitSubmissionRequestAction
  | SubmitSubmissionSuccessAction
  | SubmitSubmissionFailureAction;
