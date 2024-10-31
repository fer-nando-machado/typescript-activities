import React, { useEffect, useState } from "react";
import { Activity, ActivityDetail } from "../../../../types/activity";
import { fetchActivities } from "../../services/activity";
import ActivityCard from "./ActivityCard";
import ActivityFilter from "./ActivityFilter";
import "./Activity.scss";

export interface FilterActivities {
  (filter?: Partial<Activity>): void;
}

const ActivityContainer: React.FC = () => {
  const [activities, setActivities] = useState<ActivityDetail[]>();
  const [error, setError] = useState("");

  const filterActivities: FilterActivities = (filter = {}) => {
    fetchActivities(filter).then(setActivities).catch(setError);
  };

  useEffect(() => {
    filterActivities();
  }, []);

  return (
    <>
      <ActivityFilter callback={filterActivities} />
      <div className="activity__container">
        {error ? (
          <>
            We had a problem while looking for activities. <br />
            Please try again later.
          </>
        ) : !activities ? (
          <>Looking for activities...</>
        ) : activities.length === 0 ? (
          <>
            No activities found. <br />
            Please refine your search and try again.
          </>
        ) : (
          activities.map((a) => <ActivityCard key={a.id} activity={a} />)
        )}
      </div>
    </>
  );
};

export default ActivityContainer;
