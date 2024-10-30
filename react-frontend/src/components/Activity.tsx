import React, { useEffect, useState } from "react";
import { ActivityDetail } from "../../../types/activity";
import { findActivities } from "../services/activity";
import "./Activity.scss";

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<ActivityDetail[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    findActivities().then(setActivities);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    findActivities({ title }).then(setActivities);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="activity-title">
          <strong>Title:</strong>
        </label>
        <input
          type="text"
          id="activity-title"
          name="title"
          placeholder="Berlin Tour Museum Pass Ticket ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Search!</button>
      </form>

      <div className="activities__container">
        {activities.length === 0 ? (
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
