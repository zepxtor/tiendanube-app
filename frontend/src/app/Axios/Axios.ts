import axiosApi from "axios";

const axios = axiosApi.create();

axios.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      config.headers["Content-Type"] = "application/json";
      config.headers["Referrer-Policy"] = "no-referrer";
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Access-Control-Allow-Headers"] = "*";
      config.headers["X-XSS-Protection"] = "1; mode=block";
      config.headers["X-Content-Type-Options"] = "no-sniff";
      config.headers["X-Download-Options"] = "noopen";
      config.headers["Strict-Transport-Security"] =
        "max-age=31536000; includeSubDomains;";
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axios;
