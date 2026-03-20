import axios from "axios";


const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

const api = axios.create({
  baseURL: apiBaseUrl,
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});


api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;

    if (err.response?.status === 401 && !original._retry) {
      original._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");

      
      if (!refreshToken) {
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(err);
      }

      try {
        
        const res = await axios.post(`${apiBaseUrl}/auth/refresh`, {
          token: refreshToken,
        });

        localStorage.setItem("accessToken", res.data.accessToken);

        original.headers.Authorization = `Bearer ${res.data.accessToken}`;

        return api(original);
      } catch {
        localStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(err);
  }
);

export default api;