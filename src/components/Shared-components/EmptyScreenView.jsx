import { Box } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";

const EmptyScreenView = ({
  image,
  altText,
  title,
  description,
  buttonText,
  onButtonClick,
  showButton = true, // Default to true, button will show by default
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
        mt: 5,
      }}
    >
      <div className="w-fit">
        <img src={image} alt={altText} />
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h3 className="text-[rgba(16,71,116,1)] text-xl font-semibold">
          {title}
        </h3>
        <p className="text-[#4B465C] text-center">{description}</p>
        {/* Conditionally render the button */}
        {showButton && (
          <CustomButton onClick={onButtonClick} sx={{ px: 4 }}>
            <img src="/resuable/plus.svg" alt="plus" />
            {buttonText}
          </CustomButton>
        )}
      </div>
    </Box>
  );
};

export default EmptyScreenView;
