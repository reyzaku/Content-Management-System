import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

export const publicRequest = axios.create({
    withCredentials: true,
});

export const authRequest = axios.create({
	withCredentials: true,
    baseURL: BASE_URL,
});