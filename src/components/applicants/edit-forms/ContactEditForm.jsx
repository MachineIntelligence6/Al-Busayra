import React, { createElement, useEffect, useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box, Divider, InputAdornment, Paper, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import CustomButton from "@/components/Shared-components/CustomButton";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import CustomSelect from "@/components/Shared-components/CustomSelect";
import CustomCountryCodeInput from "@/components/Shared-components/CustomCountryCodeInput";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { contactEditFormSchema } from "@/utils/schemas/contactEditFormSchema";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";
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

export default function ContactEditForm({ setIsContactModalOpen }) {
  const [isUaeResident, setIsUaeResident] = useState(false);
  const methods = useForm({
    resolver: yupResolver(contactEditFormSchema),
    mode: "onChange",
    defaultValues: {
      email: '',
      phoneNumber: {
        countryCode: '',
        number: '',
      },
      whatsappNumber: {
        countryCode: '',
        number: '',
      },
      nationality: '',
      residency: '',
      emiratesIDNumber: '',
      emiratesIDIssueDate: null,
      emiratesIDExpiryDate: null,
      emiratesIDFront: null,
      emiratesIDBack: null,
      residencyIqama: null,

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
      "email",
      "phoneNumber",
      "whatsappNumber",
      "nationality",
      "emiratesIDNumber",
      "emiratesIDIssueDate",
      "emiratesIDExpiryDate",
      "emiratesIDFront",
      "emiratesIDBack",
      "residencyIqama",
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
    handleCloseModal();
  };

  const countryCodes = [
    { code: "+1", country: "USA" },
    { code: "+91", country: "India" },
    { code: "+44", country: "UK" },
    // Add more country codes as needed
  ];

  const fields = [
    {
      label: "Email Address",
      name: "email",
      required: true,
      placeholder: "Enter your email address",
      component: CustomTextField,
      adornment: <MailOutlineIcon />,
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      required: true,
      placeholder: "123 456 7890",
      component: CustomTextField,
      adornment: <PhoneIcon />,
      component: CustomCountryCodeInput,
      countryCodes,
      icon: <PhoneIcon />, // Pass PhoneIcon here
    },
    {
      label: "WhatsApp Number",
      name: "whatsappNumber",
      required: false,
      placeholder: "1234567890",
      component: CustomCountryCodeInput,
      countryCodes,
      icon: <WhatsAppIcon />, // Pass WhatsAppIcon here
    },
    // Nationality will be removed when residency in uae select
    {
      label: "Nationality",
      name: "nationality",
      required: false,
      options: [
        { value: "pakistani", label: "Pakistani" },
        { value: "indian", label: "Indian" },
      ],
      placeholder: "UAE",
      component: CustomSelect,
    },
    {
      label: "Emirates ID No.",
      name: "emiratesIDNumber",
      required: true,
      placeholder: "784-2003-1389613-4",
      component: CustomTextField,
    },
    {
      label: "Emirates ID Issue Date",
      name: "emiratesIDIssueDate",
      required: true,
      placeholder: "10-09-2018",
      component: CustomTextField,
    },
    {
      label: "Emirates ID Expiry Date",
      name: "emiratesIDExpiryDate",
      required: true,
      placeholder: "10-09-2026",
      component: CustomTextField,
    },
    {
      label: "Emirates ID (Front)",
      name: "emiratesIDFront",
      required: true,
      placeholder: "PDF Scanned",
      component: CustomFileUploadField,
    },
    {
      label: "Emirates ID (Back)",
      name: "emiratesIDBack",
      required: true,
      placeholder: "PDF Scanned",
      component: CustomFileUploadField,
    },
    {
      label: "Upload Residency/Iqama",
      name: "residencyIqama",
      required: true,
      placeholder: "PDF Scanned",
      component: CustomFileUploadField,
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
        <Typography variant="h6" mb="3em">
          CONTACT & RESIDENT
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {fields.map(({ label, name, required, placeholder, component, countryCodes, icon, adornment, options }, index) => (
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
                <Box key={name} sx={{ flex: "1", width: "80%", mb: 2 }}>
                  <Controller
                    name={name}
                    control={control}
                    defaultValue={
                      component === CustomCountryCodeInput
                        ? { countryCode: countryCodes?.[0]?.code || "", number: "" }
                        : ""
                    }
                    render={({ field, fieldState: { error } }) =>
                      component === CustomCountryCodeInput
                        ? createElement(component, {
                          value: field.value,
                          onChange: field.onChange,
                          countryCodes,
                          error,
                          icon, // Pass icon for Phone and WhatsApp fields
                        })
                        : createElement(component, {
                          value: field.value,
                          onChange: field.onChange,
                          placeholder,
                          options,
                          error,
                          InputProps: adornment
                            ? {
                              startAdornment: (
                                <InputAdornment position="start">{adornment}</InputAdornment>
                              ),
                            }
                            : undefined,
                        })
                    }
                  />
                </Box>
              </Box>
            ))}

            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <CustomButton
                variant="outlined"
                bgColor="danger"
                onClick={() => setIsContactModalOpen(false)}
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
