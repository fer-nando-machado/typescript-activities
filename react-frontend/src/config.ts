const API_PORT = import.meta.env.API_PORT || 8080;
export const API_URL = `http://localhost:${API_PORT}`;

export const GET_JSON = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};
