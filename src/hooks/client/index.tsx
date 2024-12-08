import axios from "axios";
import { handleLocalStorage } from "../../localStorage";

export const SERVER_ADDRESS = process.env.REACT_APP_SERVER_DEV;
export const CLIENT_ADDRESS = process.env.REACT_APP_CLIENT_ADDRESS;

export const client = axios.create({
  baseURL: SERVER_ADDRESS,
  withCredentials: true, // turn on cookie in all request
  headers: {
    post: {
      "Content-Type": "application/json; charset=utf8",
    },
    put: {
      "Content-Type": "application/json",
    },
    get: {
      Pragma: "no-cache",
      "Cache-Control": "no-cache, no-store",
    },
  },
});
// client.defaults.baseURL = process.env.REACT_APP_SERVER_DEV;
// client.defaults.headers.post["Content-Type"] = "application/json; charset=utf8";
// // client.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
// client.defaults.headers.put["Content-Type"] = "application/json";
// // client.defaults.headers.put["Access-Control-Allow-Origin"] = "*";
// client.defaults.headers.get["Pragma"] = "no-cache";
// client.defaults.headers.get["Cache-Control"] = "no-cache, no-store";
// client.defaults.withCredentials = true;

// handle before request
client.interceptors.request.use(
  (config) => {
    const token = handleLocalStorage.getAuthInfo()?.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
