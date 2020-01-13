import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  // const token = "my token demo";

  return axios.create({
    // baseURL: "http://jsonplaceholder.typicode.com",
    baseURL: "https://anywhere-fitness92.herokuapp.com/api/auth",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;
