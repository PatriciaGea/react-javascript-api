import axios from "axios";
// REVIEW: No shared error handling (retries, 4xx/5xx messaging); consider an axios response interceptor so hooks do not duplicate catch logic.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});

export default api;
