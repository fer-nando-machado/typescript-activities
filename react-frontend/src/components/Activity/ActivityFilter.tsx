import React, { useState } from "react";
import { FilterActivities } from "./ActivityContainer";

const ActivityFilter = ({ callback }: { callback: FilterActivities }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback({ title });
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Activity Filter"
      className="activity__filter"
    >
      <input
        type="text"
        name="title"
        aria-label="Activity Title"
        placeholder="Berlin Tour Museum Pass Ticket ..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Search!</button>
    </form>
  );
};

export default ActivityFilter;
