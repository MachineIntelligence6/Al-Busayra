import React, { createElement, useEffect, useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box, Divider, Paper, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import CustomButton from "@/components/shared-components/CustomButton";
import { GeneralInfoSchema } from "@/utils/schemas/generalInformation";
import CustomTextField from "@/components/shared-components/CustomTextField";
import CustomSelect from "@/components/shared-components/CustomSelect";
import CaptionText from "@/components/shared-components/CaptionText";
import { custom } from "@/app/theme";

const renderLabel = (label, required = false) => (
  <Typography variant="body1" component="span" sx={{fontSize: "16px", color: custom.primaryText, fontWeight: 500, lineHeight: "18px"}}>
    {label}
    {required && (
      <Typography component="span" color="error">
        {" "}
        *
      </Typography>
    )}
  </Typography>
);

export default function GeneralEditForm({ setIsGeneralInfoModalOpen }) {
  const [isUaeResident, setIsUaeResident] = useState(false);
  const methods = useForm({
    resolver: yupResolver(GeneralInfoSchema),
    mode: "onChange",
    defaultValues: {
      campaignName: "",
      residency: "",
      fullName: "",
      gender: "",
      employeeStatus: "",
      workingCity: "",
      learnedFrom: "",
      companyprovideNOC: "",
    },
  });

  const { trigger, watch, control } = methods;

  // Watch the residency field
  const watchedResidency = watch("residency");

  // Update the residency state whenever it changes
  useEffect(() => {
    if (watchedResidency === "resident") {
      setIsUaeResident(true);
    } else {
      setIsUaeResident(false);
    }
  }, [watchedResidency]);

  const stepFields = {
    0: [
      "campaignName",
      "residency",
      "fullName",
      "gender",
      "employeeStatus",
      "workingCity",
      "learnedFrom",
      "companyprovideNOC",
    ],
  };

  const handleSave = async () => {
    console.log("Validating fields:", stepFields[0]); // Debugging
    const isValid = await trigger(stepFields[0]);
    if (!isValid) {
      console.log("Validation Errors:", methods.formState.errors); // Log errors for debugging
      // handleCloseModal();
    }

  };

  const onSubmit = (data) => {
    console.log(data);
    handleCloseModal();
  };

  const fields = [
    {
      label: `Full Name ${isUaeResident ? "as per emirates iD" : ""}`,
      name: "fullName",
      required: true,
      placeholder: "Enter your full name as per Emirates ID",
      component: CustomTextField,
    },
    {
      label: "Gender",
      name: "gender",
      required: true,
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
    },
    {
      label: "Campaign Name",
      name: "campaignName",
      required: true,
      options: [
        { value: "campaign1", label: "Campaign 1" },
        { value: "campaign2", label: "Campaign 2" },
      ],
    },
    {
      label: "UAE Residency/Iqama",
      name: "residency",
      required: true,
      options: [
        { value: "resident", label: "UAE Resident" },
        { value: "non-resident", label: "Non UAE Resident" },
      ],
    },
    {
      label: "Employment Status",
      name: "employeeStatus",
      required: true,
      options: [
        { value: "fullTime", label: "Full Time" },
        { value: "partTime", label: "Part Time" },
        { value: "contractor", label: "Contractor" },
      ],
    },
    {
      label: "Preferred Working City",
      name: "workingCity",
      required: true,
      options: [
        { value: "dubai", label: "Dubai" },
        { value: "other", label: "Other" },
      ],
    },
    {
      label: "How Did You Learn About This Form",
      name: "learnedFrom",
      required: true,
      options: [
        { value: "social", label: "Social Media" },
        { value: "friend", label: "Friend" },
        { value: "other", label: "Other" },
      ],
    },
    {
      label: "Will your company provide NOC",
      name: "companyprovideNOC",
      required: isUaeResident ? true : false,
      options: [
        { value: "social", label: "Social Media" },
        { value: "friend", label: "Friend" },
        { value: "other", label: "Other" },
      ],
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
        <Typography variant="h6" mb="3em">
          GENERAL INFORMATION
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {fields.map(
                (
                  {
                    label,
                    name,
                    required,
                    placeholder,
                    options,
                    component = CustomSelect,
                  },
                  index
                ) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <Box
                      sx={{
                        flex: "0 0 40%",
                        textAlign: "left",
                        paddingRight: "1rem",
                      }}
                    >
                      <CaptionText text={label} required />

                    </Box>
                    <Box sx={{ flex: "1", width: "80%" }}>
                      <Controller
                        name={name}
                        control={control}
                        defaultValue=""
                        render={({ field, fieldState: { error } }) =>
                          createElement(component, {
                            value: field.value,
                            onChange: field.onChange,
                            placeholder,
                            options,
                            error,
                          })
                        }
                      />
                    </Box>
                  </Box>
                )
              )}
            </Box>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <CustomButton
                variant="outlined"
                bgColor="danger"
                onClick={() => setIsGeneralInfoModalOpen(false)}
                startIcon={<CancelIcon />}
              >
                Cancel
              </CustomButton>
              <CustomButton
                type="submit"
                variant="contained"
                onClick={handleSave}
                endIcon={<DoneIcon sx={{ width: "15px" }} />}
              >
                Save
              </CustomButton>
            </Box>
          </form>
        </FormProvider>
      </Paper>
    </LocalizationProvider>
  );
}
