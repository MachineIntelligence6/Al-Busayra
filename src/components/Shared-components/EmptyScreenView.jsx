import { Box, Typography } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";
import { Plus } from "lucide-react";

const EmptyScreenView = ({
  image,
  altText,
  title,
  description,
  buttonText,
  onButtonClick,
  descriptionTag,
  showButton = true, // Default to true, button will show by default

}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
        mt: 5,
      }}
    >
      <Box component="figure" className="w-fit">
        <img src={image} alt={altText} />
      </Box>
      <Box component="div" sx={{ display: 'flex', flexDirection: "column", gap: 1, alignItems: 'center' }}>
        {title && <Typography variant="h6" sx={{ fontWeight: 600, color: "#104774" }}>
          {title}
        </Typography>}
        {description && <Typography variant="subtitle1" sx={{ color: "#4B465C" }} >{description}</Typography>}
        {descriptionTag && descriptionTag}
        {/* Conditionally render the button */}
        {showButton && (
          <CustomButton onClick={onButtonClick} sx={{ px: 4 }} startIcon={<Plus />}>
            {buttonText}
          </CustomButton>
        )}
      </Box>
    </Box>
  );
};

export default EmptyScreenView;
