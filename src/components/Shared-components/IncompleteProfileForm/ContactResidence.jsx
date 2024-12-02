import React from "react";
import Shared from "./Shared"; // Import the reusable form component
import Input from "@/app/Components/Input/Input";
import Dropdown from "@/app/Components/Input/Dropdown";

const ContactResidence = () => {
  const fields = [
    {
      label: "Email Address ",
      name: "email",
      component: Input,
    },

    {
      label: "Contact no. (UAE) ",
      name: "contactNo",
      component: Input,
    },
    {
      label: "Emergency Contact Relation (UAE) ",
      name: "eContactRelation",
      component: Input,
    },
    {
      label: "Emergency Contact no. (UAE) ",
      name: "eContactNo",
      component: Input,
    },
    {
      label: "Country",
      name: "country",
      component: Dropdown,
      options: ["Pakistan", "India", "Bangladesh"],
    },
    {
      label: "City",
      name: "city",
      component: Dropdown,
      options: ["Dubai", "Abu Dhabi", "Sharjah"],
    },
  ];

  console.log("Fields Array:", fields);

  const handleSubmit = (formData) => {
    console.log("Form Submitted with Data:", formData);
  };

  const handleCancel = () => {
    console.log("Form Cancelled");
  };

  return (
    <Shared
      fields={fields}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      initialValues={{}}
      showImageUpload={false}
    />
  );
};

export default ContactResidence;
