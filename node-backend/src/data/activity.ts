import { Activity } from "../../../types/activity";
import data from "./json/activity.json";

export const fetchActivities = (): Activity[] => {
  return data as Activity[];
};
