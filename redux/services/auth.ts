import { LoginPayload, RegisterPayload } from "../actionTypes/authActionTypes";
import api from "./api";
import { API } from "./urls";

// Login
export async function login(data: LoginPayload) {
  const res = await api.post(API.LOGIN, data);
  return res;
}

// Register
export async function register(data: RegisterPayload) {
  const res = await api.post(API.REGISTER, data);
  return res;
}

// Profile
export async function getProfile() {
  const res = await api.get(API.GET_PROFILE);
  return res;
}