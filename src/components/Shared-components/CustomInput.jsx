"use client";
import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import InputLabelTop from "./InputLabel";
import { Eye, EyeOff } from "lucide-react";

function CustomInput({ onChange, placeholder, labelText, type = "text" }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col py-2">
      <InputLabelTop text={labelText} required />
      <TextField
        size="small"
        type={type === "password" && !showPassword ? "password" : "text"}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={
          type === "password"
            ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </IconButton>
                </InputAdornment>
              ),
            }
            : null
        }
      />
    </div>
  );
}

export default CustomInput;
