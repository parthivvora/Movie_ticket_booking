import axios from "axios";
import { BASE_URI, apiKeys } from "./apiKeys";

const userToken = localStorage.getItem("userToken");
const httpRequest = axios.create({
  baseURL: BASE_URI,
  headers: {
    Authorization: userToken ? `Bearer ${userToken}` : "",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const userRegister = (data) => httpRequest.post(apiKeys.register, data);
export const userLogin = (data) => httpRequest.post(apiKeys.login, data);

// Contact
export const addContactUs = (data) =>
  httpRequest.post(apiKeys.addContactUs, data);

// Contact
export const addSubscribe = (data) =>
  httpRequest.post(apiKeys.addSubscribe, data);

// Blogs
export const getAllBlogs = () => httpRequest.get(apiKeys.getAllBlogs);
