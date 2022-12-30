import { GetContestsPayload } from "../actionTypes/contestActionTypes";
import api from "./api";
import { API } from "./urls";

// Get Contests
export async function getContests(payload: GetContestsPayload) {
  const res = await api.get(API.GET_CONTESTS, { params: payload });
  return res;
}

// Get Contests Categories
export async function getCategories() {
  const res = await api.get(API.GET_CATEGORIES);
  return res;
}

// Get Contests
export async function getContestDetail(id: string) {
  const res = await api.get(`${API.GET_CONTEST_DETAIL}/${id}`);
  return res;
}
