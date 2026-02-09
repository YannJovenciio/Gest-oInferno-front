import axios from "axios";

export const FetchApi = (url: string) => {
  const fetchApi = axios.create({
    baseURL: "http://localhost:5218/api/" + url,
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });
  {
    return fetchApi;
  }
};
