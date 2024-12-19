import React, { createElement, useEffect, useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box, Divider, Paper, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import CustomButton from "@/components/Shared-components/CustomButton";
import CustomSelect from "@/components/Shared-components/CustomSelect";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";
import { DrivingLicenseEditSchema } from "@/utils/schemas/DrivingLicenseEditFormSchema";
import CustomDateField from "@/components/Shared-components/CustomDateField";
import CaptionText from "@/components/Shared-components/CaptionText";
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

export default function DrivingLicenseEditForm({ setIsDrivingLicenseModalOpen }) {
  const [isUaeResident, setIsUaeResident] = useState(false);
  const methods = useForm({
    resolver: yupResolver(DrivingLicenseEditSchema),
    mode: "onChange",
    defaultValues: {
      isUaeLicenseHolder: "",
      drivingLicenseIssueDate: null,
      drivingLicenseExpiryDate: null,
      drivingLicenseFront: null,
      drivingLicenseBack: null,
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
      "isUaeLicenseHolder",
      "drivingLicenseIssueDate",
      "drivingLicenseExpiryDate",
      "drivingLicenseFront",
      "drivingLicenseBack",
    ],
  };

  const handleSave = async () => {
    console.log("Validating fields:", stepFields[0]); // Debugging

    const isValid = await trigger(stepFields[0]);
    if (!isValid) {
      console.log("Validation Errors:", methods.formState.errors); // Log errors for debugging
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    // handleCloseModal();
  };

  const fields = [
    {
      label: "UAE Driving License Holder",
      name: "isUaeLicenseHolder",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },
    {
      label: "Driving License Issue Date",
      name: "drivingLicenseIssueDate",
      required: watch("isUaeLicenseHolder") === "yes",
      component: CustomDateField,
      props: { borderRadius: 1.5 }
    },
    {
      label: "Driving License Expiry Date",
      name: "drivingLicenseExpiryDate",
      required: watch("isUaeLicenseHolder") === "yes",
      component: CustomDateField,
      props: { borderRadius: 1 }
    },
    {
      label: "Driving License (Front)",
      name: "drivingLicenseFront",
      required: watch("isUaeLicenseHolder") === "yes",
      component: CustomFileUploadField,
    },
    {
      label: "Driving License (Back)",
      name: "drivingLicenseBack",
      required: watch("isUaeLicenseHolder") === "yes",
      component: CustomFileUploadField,
    },
  ];


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
        <Typography variant="h6" mb="3em">
          DRIVING LICENSE
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
                    props = {}
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
                            ...props
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
                onClick={() => setIsDrivingLicenseModalOpen(false)}
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
