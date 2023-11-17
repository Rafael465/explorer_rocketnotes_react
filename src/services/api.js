import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-cnb7.onrender.com"
});