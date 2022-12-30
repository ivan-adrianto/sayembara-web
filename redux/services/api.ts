import Axios from "axios";
import Cookies from "js-cookie";

const api = Axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async function (err) {
    try {
      if (!err.response.data?.message) {
        err.response.data = {
          message: "Something went wrong. Try again later",
        };
      }
      return Promise.reject(err);
    } catch (error) {
      return Promise.reject(err);
      null;
    }
  }
);

export const addBearerToken = (token: string) => {
  api.defaults.headers.common = {
    Authorization: token,
  };
};
export const removeBearerToken = () => {
  delete api.defaults.headers.Authorization;
};

export default api;
