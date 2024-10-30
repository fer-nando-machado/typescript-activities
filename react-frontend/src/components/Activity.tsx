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
          <span>
            We had a problem while looking for activities. Please try again
            later. <pre>{error.toString()}</pre>
          </span>
        ) : activities.length === 0 ? (
          <span>
            No activities found. Please refine your search and try again.
          </span>
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
