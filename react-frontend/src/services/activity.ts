import { Activity, ActivityWithSupplier } from "../../../types/activity";
import { API_URL } from "../config";

export const findActivities = async (filter: Partial<Activity> = {}) => {
  const queryParams = new URLSearchParams();
  if (filter.title) {
    queryParams.append("title", filter.title);
  }
  console.log(filter);

  const endpoint = `${API_URL}/activities?${queryParams.toString()}`;
  console.log(endpoint);
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  console.log(json);

  return json as ActivityWithSupplier[];
};
