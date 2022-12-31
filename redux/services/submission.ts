import { GetContestsPayload } from "../actionTypes/contestActionTypes";
import api from "./api";
import { API } from "./urls";

// Get Contests
export async function getSubmission(id: number) {
  const res = await api.get(`${API.GET_SUBMISSION}/${id}`);
  return res;
}
