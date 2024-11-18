import { Activity, ActivityDetail } from "../../../types/activity";
import { fetchActivities } from "../data/activity";
import { fetchSuppliers } from "../data/supplier";

export const getActivities = (
  filter: Partial<Activity> = {}
): ActivityDetail[] => {
  const suppliers = fetchSuppliers();
  const activities = fetchActivities();

  return activities
    .filter((activity) => filterByTitle(activity, filter.title))
    .map((activity) => {
      const supplier = suppliers.find((s) => s.id === activity.supplierId);
      return { ...activity, supplier };
    });
};

const filterByTitle = (activity: Activity, query?: string) => {
  if (!query) {
    return true;
  }
  const keywords = query
    .trim()
    .toLowerCase()
    .replace(/[^a-z]+$/, "")
    .split(" ");

  const activityTitle = activity.title.toLowerCase();
  return keywords.every((keyword) => activityTitle.includes(keyword));
};
