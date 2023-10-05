import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

// Function to retrieve the token from localStorage safely
const getTokenFromLocalStorage = () => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  return profile ? profile.token : null;
};

const config = {
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  },
};

export const getUser = (userId) => API.get(`/user/${userId}`);
// export const updateUser = (id, formData) =>  API.put(`/user/${id}`, formData);
export const getAllUser = () => API.get('/user');
