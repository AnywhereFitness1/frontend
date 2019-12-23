import axios from "axios";

export const axiosWithAuth = () => {
  //   const token = localStorage.getItem("token");
  const token = "my token demo";

  return axios.create({
    baseURL: "http://jsonplaceholder.typicode.com",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;
