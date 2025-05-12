import axios from "axios";





const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
});

api.interceptors.request.use((config) => {
  if (
    config.url &&
    !config.url.includes("signin") &&
    !config.url.includes("signup")
  ) {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;



