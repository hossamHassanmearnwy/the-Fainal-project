import axios from "axios";
const axiosInestance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    "accept" : "application/json",
  },
});



export default axiosInestance;
