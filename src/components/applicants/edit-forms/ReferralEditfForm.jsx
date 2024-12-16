import React, { createElement } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Divider, Paper, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import CustomButton from "@/components/Shared-components/CustomButton";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import CustomCountryCodeInput from "@/components/Shared-components/CustomCountryCodeInput";
import { referralFormSchema } from "@/utils/schemas/ReferralFormSchema";
import CaptionText from "@/components/Shared-components/CaptionText";

const renderLabel = (label, required = false) => (
  <Typography variant="body1" component="span">
    {label}
    {required && (
      <Typography component="span" color="error">
        {" "}
        *
      </Typography>
    )}
  </Typography>
);

export default function ReferralEditForm({ setIsReferralModalOpen }) {
  const methods = useForm({
    resolver: yupResolver(referralFormSchema),
    mode: "onChange",
    defaultValues: {
      referredByWhom: "",
      referralPhoneNumber: {
        countryCode: "+971",
        number: "",
      },
      referralAddress: "",
    },
  });

  const { trigger, control } = methods;

  const handleSave = async () => {
    const isValid = await trigger();
    if (!isValid) {
      console.log("Validation Errors:", methods.formState.errors);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    setIsReferralModalOpen(false);
  };

  const countryCodes = [
    { code: "+971", country: "UAE" },
    { code: "+1", country: "USA" },
    { code: "+91", country: "India" },
    { code: "+44", country: "UK" },
  ];

  const fields = [
    {
      label: "Referred By Whom (UAE)",
      name: "referredByWhom",
      required: true,
      placeholder: "e.g John",
      component: CustomTextField,
    },
    {
      label: "Referral Phone Number (UAE)",
      name: "referralPhoneNumber",
      required: true,
      placeholder: "123 456 7890",
      component: CustomCountryCodeInput,
      countryCodes,
    },
    {
      label: "Referral Address (UAE)",
      name: "referralAddress",
      required: true,
      placeholder: "Street, 06 Jamal Resident, UAE",
      component: CustomTextField,
    },
  ];

  return (
    <Paper sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
      <Typography variant="h6" mb="3em">
        REFERRAL
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
                  component,
                  countryCodes,
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
                      defaultValue={
                        component === CustomCountryCodeInput
                          ? { countryCode: "+971", number: "" }
                          : ""
                      }
                      render={({ field, fieldState: { error } }) =>
                        createElement(component, {
                          value: field.value,
                          onChange: field.onChange,
                          placeholder,
                          countryCodes,
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
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <CustomButton
              variant="outlined"
              bgColor="danger"
              onClick={() => setIsReferralModalOpen(false)}
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
  );
}

