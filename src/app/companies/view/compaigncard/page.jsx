"use client";

import React from "react";
import EventCard from "../../../../components/Shared-components/SharedCard"; // Import the reusable EventCard

const ExamplePage = () => {
  const handleDelete = () => {
    console.log("Event deleted");
  };

  const handleEdit = () => {
    console.log("Event edited");
  };

  const handleSwitchChange = (checked) => {
    console.log("Switch changed to:", checked);
  };

  return (
    <div>
      <EventCard
        eventName="Winter Fair"
        totalApplied={100}
        creationDate="12/08/2024"
        description="Join us for the Winter Fair Hiring campaign, where we're on the lookout for enthusiastic riders to join our team in the UAE! As the festive season approaches."
        startDate="10/07/2024 10:30 PM"
        endDate="10/06/2024 12:30 PM"
        link="https://www.yourplatform.co"
        active={true}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onSwitchChange={handleSwitchChange}
        bgColor={["#4F71EA","#1AA1D1"]}
      />
    </div>
  );
};

export default ExamplePage;


