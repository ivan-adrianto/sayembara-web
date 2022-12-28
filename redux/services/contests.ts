import { GetContestsPayload } from "../actionTypes/contestActionTypes";
import api from "./api";
import { API } from "./urls";

// Login
export async function getContests(payload: GetContestsPayload) {
  const res = await api.get(API.GET_CONTESTS);
  return res;
}