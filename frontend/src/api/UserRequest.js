import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

const config = {
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`,
    },
};

export const getUser = (userId) => API.get(`/user/${userId}`,config);
// export const updateUser = (id, formData) =>  API.put(`/user/${id}`, formData);
// export const getAllUser = ()=> API.get('/user')
