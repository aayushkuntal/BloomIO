import axios from "axios";

const API = axios.create({baseURL: 'https://bloomio-api.onrender.com'});

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessages = (data) => API.post("/message", data);