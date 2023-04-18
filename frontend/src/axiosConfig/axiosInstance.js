import axios from "axios";
const axiosInestance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

/*header*/

/*
//function
function App() {
  Axios().then(res => {
    console.log(res.data.message);
  });

*/

export default axiosInestance;
