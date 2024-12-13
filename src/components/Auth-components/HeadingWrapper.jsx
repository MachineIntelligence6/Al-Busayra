import React from "react";
import { Typography } from "@mui/material";
import AppLogo from "../Shared-components/AppLogo";
import HeadingText1 from "../Shared-components/HeadingText1";
import DescriptiveText from "../Shared-components/DescriptiveText";
import { custom } from "@/app/theme";

const HeadingWrapper = (props) => {
  const { heading, subHeading } = props;

  return (
    <>
      <AppLogo />
      <div className="my-5">
        <HeadingText1 text={heading} />
        <DescriptiveText text={subHeading} />
      </div>
    </>
  );
};

export default HeadingWrapper;
