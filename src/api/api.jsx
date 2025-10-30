import axios from "axios";
import { ACCESS } from "./cnstants";

const api = axios.create({
    // baseURL: "http://127.0.0.1:8000"
    // baseURL: "http://127.0.0.1:8000"
    baseURL: "https://api.bininstructions.com"
});


api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(ACCESS);

    if (accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    
    return config;
}, (error) => {
    Promise.reject(error);
});


export default api;