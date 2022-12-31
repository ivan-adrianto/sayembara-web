import {
  GET_SUBMISSION_FAILURE,
  GET_SUBMISSION_REQUEST,
  GET_SUBMISSION_SUCCESS,
  SubmissionActions,
} from "../actionTypes/submissionTypes";

export const initialSubmissionState = {
  loadingGetSubmission: false,
  dataGetSubmission: false,
  errGetSubmission: null,
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

    default:
      return state;
  }
};
