import axios from "axios";

export const FetchApi = () => {
  const fetchApi = axios.create({
    baseURL: "http://localhost:5218/api/",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });
  {
    return fetchApi;
  }
};
