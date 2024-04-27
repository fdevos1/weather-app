import axios from "axios";

export const weatherAPI = axios.create({
  baseURL: `http://api.weatherstack.com/`,
});

export const cepAPI = axios.create({
  baseURL: "viacep.com.br/ws/",
});
