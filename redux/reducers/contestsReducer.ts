import {
  ContestActions,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CONTESTS_FAILURE,
  GET_CONTESTS_REQUEST,
  GET_CONTESTS_SUCCESS,
  GET_CONTEST_DETAIL_FAILURE,
  GET_CONTEST_DETAIL_REQUEST,
  GET_CONTEST_DETAIL_SUCCESS,
  GET_MY_CONTESTS_FAILURE,
  GET_MY_CONTESTS_REQUEST,
  GET_MY_CONTESTS_SUCCESS,
} from "../actionTypes/contestActionTypes";

export const initialContestState = {
  loadingGetContests: false,
  dataGetContests: [],
  errGetContests: null,
  loadingCategories: false,
  dataCategories: [],
  errCategories: null,
  loadingGetContestDetail: false,
  dataGetContestDetail: null,
  errGetContestDetail: null,
  loadingGetMyContests: false,
  dataGetMyContests: null,
  errGetMyContests: null,
};

export const contestReducer = (
  state = initialContestState,
  action: ContestActions
) => {
  switch (action.type) {
    // Get Contests
    case GET_CONTESTS_REQUEST:
      return {
        ...state,
        loadingGetContests: true,
        errGetContests: null,
      };
    case GET_CONTESTS_SUCCESS:
      return {
        ...state,
        loadingGetContests: false,
        dataGetContests: action.data,
        errGetContests: null,
      };
    case GET_CONTESTS_FAILURE:
      return {
        ...state,
        loadingGetContests: false,
        dataGetContests: false,
        errGetContests: action.error,
      };

    // Get Categories
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loadingCategories: true,
        errCategories: null,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loadingCategories: false,
        dataCategories: action.data,
        errCategories: null,
      };
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        loadingCategories: false,
        dataCategories: [],
        errCategories: action.error,
      };

    // Get Contest Detail
    case GET_CONTEST_DETAIL_REQUEST:
      return {
        ...state,
        loadingGetContestDetail: true,
        errGetContestDetail: null,
      };
    case GET_CONTEST_DETAIL_SUCCESS:
      return {
        ...state,
        loadingGetContestDetail: false,
        dataGetContestDetail: action.data,
        errGetContestDetail: null,
      };
    case GET_CONTEST_DETAIL_FAILURE:
      return {
        ...state,
        loadingGetContestDetail: false,
        dataGetContestDetail: false,
        errGetContestDetail: action.error,
      };

    // Get My Contests
    case GET_MY_CONTESTS_REQUEST:
      return {
        ...state,
        loadingGetMyContests: true,
        errGetMyContests: null,
      };
    case GET_MY_CONTESTS_SUCCESS:
      return {
        ...state,
        loadingGetMyContests: false,
        dataGetMyContests: action.data,
        errGetMyContests: null,
      };
    case GET_MY_CONTESTS_FAILURE:
      return {
        ...state,
        loadingGetMyContests: false,
        dataGetMyContests: false,
        errGetMyContests: action.error,
      };
    default:
      return state;
  }
};
