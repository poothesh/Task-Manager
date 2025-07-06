import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api", // your backend
  baseURL: "https://task-manager-cz1k.onrender.com/api",
  withCredentials: true, // this sends cookies
});

export default API;
