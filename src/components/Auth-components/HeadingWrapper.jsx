import React from "react";
import { Typography } from "@mui/material";
import AppLogo from "../Shared-components/AppLogo";
import HeadingText3 from "../Shared-components/HeadingText3";
import DescriptiveText from "../Shared-components/DescriptiveText";
import { custom } from "@/app/theme";

const HeadingWrapper = (props) => {
  const { heading, subHeading } = props;

  return (
    <>
      <AppLogo />
      <div className="my-5">
        <HeadingText3>{heading}</HeadingText3>
        <DescriptiveText text={subHeading} />
      </div>
    </>
  );
};

export default HeadingWrapper;
