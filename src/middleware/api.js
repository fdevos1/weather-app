import axios from "axios";

export const weatherAPI = axios.create({
  baseURL: "http://api.weatherstack.com/",
});
