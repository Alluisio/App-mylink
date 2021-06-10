//base_url = https://api-ssl.bitly.com/v4
//key = e3a2d1922d5bf85af1acec7de91a09dd8a005aa1
import axios from "axios";

export const key = "e3a2d1922d5bf85af1acec7de91a09dd8a005aa1";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  },
});

export default api;
