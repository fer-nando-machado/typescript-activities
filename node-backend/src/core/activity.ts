import { Activity, ActivityWithSupplier } from "../../../types/activity";
import { fetchActivities } from "../data/activity";
import { fetchSuppliers } from "../data/supplier";

const filterByTitle = (activity: Activity, title?: string) => {
  return title
    ? activity.title.toLowerCase().includes(title.toLowerCase())
    : true;
};

export const getActivities = (
  filter: Partial<Activity> = {}
): ActivityWithSupplier[] => {
  const suppliers = fetchSuppliers();
  const activities = fetchActivities();

  return activities
    .filter((activity) => filterByTitle(activity, filter.title))
    .map((activity) => {
      const supplier = suppliers.find((s) => s.id === activity.supplierId);
      return { ...activity, supplier };
    });
};
