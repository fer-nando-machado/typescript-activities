import { Activity, ActivityDetail } from "../../../types/activity";
import { API_URL } from "../config";

export const findActivities = async (filter: Partial<Activity> = {}) => {
  const queryParams = new URLSearchParams();
  if (filter.title) {
    queryParams.append("title", filter.title);
  }

  const endpoint = `${API_URL}/activities?${queryParams.toString()}`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return json as ActivityDetail[];
};
