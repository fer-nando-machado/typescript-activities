import { API_URL } from "../config/api";

export const fetchMessage = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.message;
};
