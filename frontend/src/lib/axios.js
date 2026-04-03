import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fullstack-chat-app-2-ynz0.onrender.com/api",
  withCredentials: true,
});
