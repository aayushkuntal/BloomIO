import axios from 'axios';

const API = axios.create({baseURL: 'https://bloomio-api.onrender.com'});

export const userChats = (userId) => API.get(`/chat/${userId}`);