"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import EmptyScreenView from "@/components/Shared-components/EmptyScreenView";

const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("applicants/shortlisted-applicants");
  };

  return (
    <Box component="div" display="flex" justifyContent="center" flexDirection="column" alignItems="center" height="80vh">
      <EmptyScreenView
        image="./applicantIcons/ApplicantsLogo.svg"
        altText="campaign"
        title="No Applicant Added"
        description="Please click the button below to add a new Employee"
        buttonText="Add Applicant"
        onButtonClick={handleClick}
      />
    </Box>
  );
};

export default Page;
