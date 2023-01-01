import { GetContestsPayload } from "../actionTypes/contestActionTypes";
import { SubmissionSubmitted } from "../actionTypes/submissionTypes";
import api from "./api";
import { API } from "./urls";

// Get Submission
export async function getSubmission(id: number) {
  const res = await api.get(`${API.GET_SUBMISSION}/${id}`);
  return res;
}

// Submit Submission
export async function submitSubmission(payload: SubmissionSubmitted) {
  const res = await api.post(API.POST_SUBMISSION, payload);
  return res;
}
