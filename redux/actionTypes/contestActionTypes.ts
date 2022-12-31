// Login
export const GET_CONTESTS_REQUEST = "GET_CONTESTS_REQUEST";
export interface GetContestsPayload {
  title?: string;
  category_id?: string;
}
export interface GetContestsRequestAction {
  type: typeof GET_CONTESTS_REQUEST;
  payload: GetContestsPayload;
}
export const GET_CONTESTS_SUCCESS = "GET_CONTESTS_SUCCESS";
export interface Contest {
  created_at: string;
  description: string;
  due_date: string;
  id: number;
  join_status: string;
  posted_since: string;
  prize: number;
  prize_text: string;
  provider: { fullname: string };
  title: string;
  category: { id: number; name: string };
}
export interface GetContestsSuccessAction {
  type: typeof GET_CONTESTS_SUCCESS;
  data: Contest[];
}
export const GET_CONTESTS_FAILURE = "GET_CONTESTS_FAILURE";
export interface GetContestsFailureAction {
  type: typeof GET_CONTESTS_FAILURE;
  error: Error | string | unknown;
}

// Get Categories
export interface Categories {
  id: number;
  name: string;
}
export const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST";
export interface GetCategoriesRequestAction {
  type: typeof GET_CATEGORIES_REQUEST;
}
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export interface GetCategoriesSuccessAction {
  type: typeof GET_CATEGORIES_SUCCESS;
  data: Categories[];
}
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE";
export interface GetCategoriesFailureAction {
  type: typeof GET_CATEGORIES_FAILURE;
  error: Error | string | unknown;
}

// Get Contest Detail
export const GET_CONTEST_DETAIL_REQUEST = "GET_CONTEST_DETAIL_REQUEST";

export interface GetContestDetailRequestAction {
  type: typeof GET_CONTEST_DETAIL_REQUEST;
  payload: string;
}
export const GET_CONTEST_DETAIL_SUCCESS = "GET_CONTEST_DETAIL_SUCCESS";
export interface Image {
  id: number
  image: string
}
export interface Submission {
  thumbnail: string;
  description: string;
  title: string;
  id: number;
  images?: Image[];
  participant?: { fullname: string };
}
export interface Contest {
  created_at: string;
  description: string;
  due_date: string;
  id: number;
  join_status: string;
  posted_since: string;
  prize: number;
  prize_text: string;
  provider: { fullname: string };
  title: string;
  category: { id: number; name: string };
  submissions: Submission[];
  status?: string;
  announcement_date?: string;
}
export interface GetContestDetailSuccessAction {
  type: typeof GET_CONTEST_DETAIL_SUCCESS;
  data: Contest[];
}
export const GET_CONTEST_DETAIL_FAILURE = "GET_CONTEST_DETAIL_FAILURE";
export interface GetContestDetailFailureAction {
  type: typeof GET_CONTEST_DETAIL_FAILURE;
  error: string;
}

export type ContestActions =
  | GetContestsRequestAction
  | GetContestsSuccessAction
  | GetContestsFailureAction
  | GetCategoriesRequestAction
  | GetCategoriesSuccessAction
  | GetCategoriesFailureAction
  | GetContestDetailRequestAction
  | GetContestDetailSuccessAction
  | GetContestDetailFailureAction;
