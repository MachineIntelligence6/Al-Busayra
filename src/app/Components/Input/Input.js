import CustomTextField from "@/components/Shared-components/CustomTextField";
import { Box } from "@mui/material";
import React from "react";

function Input({
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  labelText,
  fieldName,
  layout = "col",
  customClass = "",
}) {
  return (
    <Box
      sx={{
        display: 'flex', justifyContent: 'space-between'
      }}
    >
      {labelText && (
        <Box component="label" htmlFor={name} sx={{ flex: 1 }}>
          {labelText}
          <span className="text-red-500">*</span>
        </Box>
      )}
      <CustomTextField
        onChange={onChange}
        className="w-full h-[38px] border-[1px] border-[#2F2B3D40] rounded-[6px] !outline-none px-3"
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onBlur={onBlur}
      />
    </Box>
  );
}

export default Input;
