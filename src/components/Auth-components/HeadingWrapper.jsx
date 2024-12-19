import React from "react";
import AppLogo from "../shared-components/AppLogo";
import HeadingText3 from "../shared-components/HeadingText3";
import DescriptiveText from "../shared-components/DescriptiveText";

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
