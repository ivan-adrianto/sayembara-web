import {
  ContestActions,
  GET_CONTESTS_FAILURE,
  GET_CONTESTS_REQUEST,
  GET_CONTESTS_SUCCESS,
} from "../actionTypes/contestActionTypes";

export const initialContestState = {
  loadingGetContests: false,
  dataGetContests: [],
  errGetContests: null,
};

export const contestReducer = (state = initialContestState, action: ContestActions) => {
  switch (action.type) {
    // Get Contests
    case GET_CONTESTS_REQUEST:
      return {
        ...state,
        loadingGetContests: true,
        dataGetContests: false,
        errGetContests: null,
      };
    case GET_CONTESTS_SUCCESS:
      return {
        ...state,
        loadingGetContests: false,
        dataGetContests: action.data,
        errGetContests: null,
        isLoggedIn: true,
      };
    case GET_CONTESTS_FAILURE:
      return {
        ...state,
        loadingGetContests: false,
        dataGetContests: false,
        errGetContests: action.error,
      };
    default:
      return state;
  }
};
