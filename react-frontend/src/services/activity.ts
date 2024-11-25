import { Activity, ActivityDetail } from "../../../types/activity";
import { API_URL, GET_JSON } from "../config";

export const fetchActivities = async (filter: Partial<Activity> = {}) => {
  const queryParams = new URLSearchParams();
  if (filter.title) {
    queryParams.append("title", filter.title);
  }

  const endpoint = `${API_URL}/activities?${queryParams.toString()}`;
  const response = await fetch(endpoint, GET_JSON);
  if (!response.ok) {
    throw new Error(await response.json());
  }
  const json = await response.json();
  return json as ActivityDetail[];
};
