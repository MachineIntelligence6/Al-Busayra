"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  MenuItem,
  Box,
  Typography,
  InputAdornment,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { LockOutlined, Add, Clear } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import CustomDateField from "@/components/Shared-components/CustomDateField";
import CustomSelect from "@/components/Shared-components/CustomSelect";
import CustomButton from "@/components/Shared-components/CustomButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import DoneIcon from "@mui/icons-material/Done";

const schema = yup.object().shape({
  assetType: yup.string().required("Asset Type is required"),
  bikePlateNo: yup.string().required("Bike Plate No. is required"),
  bikeCity: yup.string().required("Bike City is required"),
  bikeOwnership: yup.string().required("Bike Ownership is required"),
  dateOfClearance: yup.date().required("Date of Clearance is required"),
  timeOfClearance: yup.date().required("Time of Clearance is required"),
  condition: yup.string().required("Condition is required"),
  amount: yup.string(),
  remarks: yup.string().required("Remarks are required"),
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  Width: "100%",
  backgroundColor: "#fff",
  borderRadius: "25px",
}));

const FieldHeading = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  fontWeight: 500,
  marginBottom: theme.spacing(1),
  "& .required": {
    color: theme.palette.error.main,
    marginLeft: "2px",
  },
}));

export default function AssetClearanceForm() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      assetType: "",
      bikePlateNo: "",
      bikeCity: "Sharjah",
      bikeOwnership: "ABDS",
      dateOfClearance: new Date(),
      timeOfClearance: new Date(),
      condition: "",
      amount: "",
      remarks: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  const handleFileUpload = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledPaper elevation={0}>
        <Typography variant="h6" gutterBottom>
          Asset Clearance form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 3 }}>
            <FieldHeading>
              Asset Type<span className="required">*</span>
            </FieldHeading>
            <Controller
              name="assetType"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  {...field}
                  fullWidth
                  error={!!errors.assetType}
                  sx={{ bgcolor: "background.paper" }}
                >
                  <MenuItem value="Bike">Bike</MenuItem>
                </CustomSelect>
              )}
            />
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              mb: 3,
            }}
          >
            <Box>
              <FieldHeading>
                Bike Plate No.<span className="required">*</span>
              </FieldHeading>
              <Controller
                name="bikePlateNo"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    fullWidth
                    error={!!errors.bikePlateNo}
                    helperText={errors.bikePlateNo?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockOutlined sx={{ color: "action.disabled" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Box>

            <Box>
              <FieldHeading>
                Bike City<span className="required">*</span>
              </FieldHeading>
              <Controller
                name="bikeCity"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    fullWidth
                    disabled
                    error={!!errors.bikeCity}
                    helperText={errors.bikeCity?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockOutlined sx={{ color: "action.disabled" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              mb: 3,
            }}
          >
            <Box sx={{ mb: 3 }}>
              <FieldHeading>
                Bike Ownership<span className="required">*</span>
              </FieldHeading>
              <Controller
                name="bikeOwnership"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    fullWidth
                    disabled
                    error={!!errors.bikeOwnership}
                    helperText={errors.bikeOwnership?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockOutlined sx={{ color: "action.disabled" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Box>
            <Box>
              <FieldHeading>
                Date Of Bike Clearance<span className="required">*</span>
              </FieldHeading>
              <Controller
                name="dateOfClearance"
                control={control}
                render={({ field }) => (
                  <CustomDateField
                    {...field}
                    renderInput={(params) => (
                      <CustomTextField
                        {...params}
                        fullWidth
                        error={!!errors.dateOfClearance}
                        helperText={errors.dateOfClearance?.message}
                      />
                    )}
                  />
                )}
              />
            </Box>

            <Box>
              <FieldHeading>
                Time Of Bike Clearance<span className="required">*</span>
              </FieldHeading>
              <Controller
                name="timeOfClearance"
                control={control}
                render={({ field }) => (
                  <TimePicker
                    {...field}
                    renderInput={(params) => (
                      <CustomTextField
                        {...params}
                        fullWidth
                        error={!!errors.timeOfClearance}
                        helperText={errors.timeOfClearance?.message}
                      />
                    )}
                  />
                )}
              />
            </Box>


            <Box sx={{ mb: 3 }}>
            <FieldHeading>Condition</FieldHeading>
            <Controller
              name="condition"
              control={control}
              render={({ field }) => (
                <CustomSelect {...field} fullWidth error={!!errors.condition}>
                  <MenuItem value="OK">OK</MenuItem>
                  <MenuItem value="Not OK">Not OK</MenuItem>
                </CustomSelect>
              )}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <FieldHeading>Amount Need To Be Deducted/Penalty</FieldHeading>
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  fullWidth
                  error={!!errors.amount}
                  helperText={errors.amount?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">AED</InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <FieldHeading>
              Remarks<span className="required">*</span>
            </FieldHeading>
            <Controller
              name="remarks"
              control={control}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  fullWidth
                  multiline
                  rows={4}
                  error={!!errors.remarks}
                  helperText={errors.remarks?.message}
                  placeholder="Any"
                />
              )}
            />
          </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <FieldHeading>Upload Bike Images</FieldHeading>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {uploadedFiles.map((file, index) => (
                <Paper
                  key={index}
                  sx={{
                    width: 100,
                    height: 100,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={file}
                    alt={`Upload ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              ))}
              <label>
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  multiple
                  onChange={handleFileUpload}
                />
                <Paper
                  sx={{
                    width: 100,
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    border: "2px dashed",
                    borderColor: "divider",
                  }}
                >
                  <Add />
                </Paper>
              </label>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <CustomButton
              variant="contained"
              startIcon={<ArrowBackOutlinedIcon />}
              sx={{
                bgcolor: "#737682",
                padding: "8px 19px",
                borderRadius: "8px",
              }}
            >
              Back
            </CustomButton>
            <CustomButton
              type="submit"
              variant="contained"
              // onClick={handleNext}
              endIcon={<DoneIcon sx={{ width: "15px" }} />}
              sx={{
                padding: "8px 19px",
                borderRadius: "8px",
              }}
            >
              Clear
            </CustomButton>
          </Box>
        </form>
      </StyledPaper>
    </LocalizationProvider>
  );
}
