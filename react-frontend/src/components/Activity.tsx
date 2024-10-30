import React, { useEffect, useState } from "react";
import { ActivityDetail } from "../../../types/activity";
import { fetchActivities } from "../services/activity";
import "./Activity.scss";

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<ActivityDetail[]>([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchActivities().then(setActivities).catch(setError);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchActivities({ title }).then(setActivities);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Berlin Tour Museum Pass Ticket ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Search!</button>
      </form>

      <div className="activities__container">
        {error ? (
          <>
            Error while fetching activities. Please try again later.
            <small>{error.toString()}</small>
          </>
        ) : activities.length === 0 ? (
          <>No activities found. Please refine your search and try again.</>
        ) : (
          activities.map((activity) => (
            <div key={activity.id} className="activities__activity">
              <strong>{activity.title}</strong>
              <data value={activity.price}>
                {activity.currency}
                {activity.price}
              </data>
              Rating: {activity.rating}
              {activity.specialOffer && "Has Special Offer!"}
              {activity.supplier && (
                <address>
                  {activity.supplier.name} /{activity.supplier.city},{" "}
                  {activity.supplier.country}, {activity.supplier.zip}
                </address>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Activities;
