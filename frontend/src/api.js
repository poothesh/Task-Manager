import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // your backend
  withCredentials: true, // this sends cookies
});

export default API;
