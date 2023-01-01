import {
  GET_SUBMISSION_FAILURE,
  GET_SUBMISSION_REQUEST,
  GET_SUBMISSION_SUCCESS,
  SubmissionActions,
  SUBMIT_SUBMISSION_FAILURE,
  SUBMIT_SUBMISSION_REQUEST,
  SUBMIT_SUBMISSION_SUCCESS,
} from "../actionTypes/submissionTypes";

export const initialSubmissionState = {
  loadingGetSubmission: false,
  dataGetSubmission: false,
  errGetSubmission: null,
  loadingSubmitSubmission: false,
  dataSubmitSubmission: false,
  errSubmitSubmission: null,
};

export const submissionReducer = (
  state = initialSubmissionState,
  action: SubmissionActions
) => {
  switch (action.type) {
    // Get Submission
    case GET_SUBMISSION_REQUEST:
      return {
        ...state,
        loadingGetSubmission: true,
        dataGetSubmission: false,
        errGetSubmission: null,
      };
    case GET_SUBMISSION_SUCCESS:
      return {
        ...state,
        loadingGetSubmission: false,
        dataGetSubmission: action.data,
        errGetSubmission: null,
      };
    case GET_SUBMISSION_FAILURE:
      return {
        ...state,
        loadingGetSubmission: false,
        dataGetSubmission: false,
        errGetSubmission: action.error,
      };

    // Get Submission
    case SUBMIT_SUBMISSION_REQUEST:
      return {
        ...state,
        loadingSubmitSubmission: true,
        dataSubmitSubmission: false,
        errSubmitSubmission: null,
      };
    case SUBMIT_SUBMISSION_SUCCESS:
      return {
        ...state,
        loadingSubmitSubmission: false,
        dataSubmitSubmission: action.data,
        errSubmitSubmission: null,
      };
    case SUBMIT_SUBMISSION_FAILURE:
      return {
        ...state,
        loadingSubmitSubmission: false,
        dataSubmitSubmission: false,
        errSubmitSubmission: action.error,
      };

    default:
      return state;
  }
};
