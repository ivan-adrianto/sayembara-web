import { LoginPayload } from "../actionTypes/authActionTypes";
import api from "./api";
import { API } from "./urls";

// Login
export async function login(data: LoginPayload) {
  const res = await api.post(API.LOGIN, data);
  return res;
}
