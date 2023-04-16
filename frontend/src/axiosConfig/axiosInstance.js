import axios from "axios";
const axiosInestance = axios.create({
  baseURL: "http://localhost:3001",
});

/*header
{
    method: "GET",
    url: "http://localhost:3001/",
    headers: {
      "Content-Type": "application/json"
    }
  }

//function
function App() {
  Axios().then(res => {
    console.log(res.data.message);
  });

*/

export default axiosInestance;
