import { Activity } from "../../../types/activity";
import data from "./json/activities.json";

export const fetchActivities = (): Activity[] => {
  return data as Activity[];
};
