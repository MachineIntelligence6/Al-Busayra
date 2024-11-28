import React from "react";
import { Typography } from "@mui/material";
import AppLogo from "../Shared-components/AppLogo";

const HeadingWrapper = (props) => {
  const { heading, subHeading } = props;

  return (
    <>
      <AppLogo />
      <div className="my-5">
        <Typography
          variant="h5"
          fontWeight={600}
          className=" text-2xl leading-[38px] text-[#2F2B3D] mt-5"
        >
          {heading}
        </Typography>
        <Typography
          variant="body2"
          className="text-normal text-sm leading-[22px] text-[#2F2B3DB2]"
        >
          {subHeading}
        </Typography>
      </div>
    </>
  );
};

export default HeadingWrapper;
