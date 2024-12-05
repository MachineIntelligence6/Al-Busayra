import React from "react";
import {
  Box,
  IconButton,
  Button,
  FormHelperText,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Image from "next/image";
import CustomButton from "../Shared-components/CustomButton";

const ImageUpload = ({
  onFileChange,
  error,
  uploadedImage,
  buttonText = "Upload Picture",
}) => {
  const fileInputRef = React.useRef(null); // Create a reference to the file input

  const handleFileSelect = () => {
    fileInputRef.current.click(); // Programmatically click the file input
  };

  return (
    <Box mb={3} textAlign="center" display="flex" flexDirection="column" width="23%">
      <IconButton
        sx={{
          background: "#E9EAEC",
          border: "1px solid #C9C8CC",
          borderRadius: "10px",
          position: "relative",
          pointerEvents: "none", // Disable interaction with IconButton
          width: "130px",
          height:"130px",
          padding: "0px"
        }}
        aria-label="upload picture"
        variant="outlined"
      >
        {uploadedImage ? (
          <Image
            src={URL.createObjectURL(uploadedImage)}
            alt="Uploaded preview"
            width={100}
            height={100}
            style={{
                width:"100%",
                height:"100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ) : (
          <PhotoCamera fontSize="large" color="action" />
        )}
      </IconButton>
      <input
        ref={fileInputRef}
        hidden
        accept="image/*"
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          onFileChange(file); // Callback to pass the selected file to the parent
        }}
      />
      <CustomButton
        variant="contained"
        endIcon={<FileUploadIcon sx={{ width: "15px" }} />}
        sx={{ mt: 2 }}
        type="button"
        onClick={handleFileSelect} // Trigger file selection dialog
      >
        {buttonText}
      </CustomButton>
      {error && (
        <FormHelperText error>
          {error}
        </FormHelperText>
      )}
    </Box>
  );
};

export default ImageUpload;
