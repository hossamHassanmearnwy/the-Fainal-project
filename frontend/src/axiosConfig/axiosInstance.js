import axios from "axios";
const axiosInestance = axios.create({
  baseURL: "http://localhost:3000",
});
export default axiosInestance;
