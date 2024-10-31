import React, { useEffect, useState } from "react";
import { ActivityDetail } from "../../../types/activity";
import { fetchActivities } from "../services/activity";
import "./Activity.scss";
import Supplier from "./Supplier";

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<ActivityDetail[]>();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const searchActivities = (filter = {}) => {
    fetchActivities(filter).then(setActivities).catch(setError);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchActivities({ title });
  };

  useEffect(() => {
    searchActivities();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="activities__form">
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
          activities.map((activity) => (
            <div key={activity.id} className="activities__activity">
              <strong>{activity.title}</strong>
              <data value={activity.price} aria-label="Price">
                {activity.currency}
                {activity.price}
                {activity.specialOffer && (
                  <em className="activities__activity__specialOffer">
                    Special Offer 🔖
                  </em>
                )}
              </data>
              <data value={activity.rating} aria-label="Rating">
                {"⭐".repeat(activity.rating)} <small>{activity.rating}</small>
              </data>
              {activity.supplier && <Supplier supplier={activity.supplier} />}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Activities;
