import React, { createElement } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box, Divider, Paper, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import CustomButton from "@/components/Shared-components/CustomButton";
import CustomSelect from "@/components/Shared-components/CustomSelect";
import CustomTextField from "@/components/Shared-components/CustomTextField";
import { PassportDetailsSchema } from "@/utils/schemas/PassportDetailsEditSchema";
import CustomFileUploadField from "@/components/Shared-components/CustomFIleUploadField";
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

export default function PassportDetailsEditForm({ setIsPassportModalOpen }) {
  const methods = useForm({
    resolver: yupResolver(PassportDetailsSchema),
    mode: "onChange",
    defaultValues: {
      passportNumber: "",
      passportIssueDate: null,
      passportExpiryDate: null,
      passportCopy: null,
      hasValidWorkVisa: "",
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
    setIsPassportModalOpen(false);
  };

  const fields = [
    {
      label: "Passport No.",
      name: "passportNumber",
      required: true,
      placeholder: "Enter your passport number",
      component: CustomTextField,
    },
    {
      label: "Passport Issue Date",
      name: "passportIssueDate",
      required: true,
      component: CustomDateField,
      props: { borderRadius: 1 }
    },
    {
      label: "Passport Expiry Date",
      name: "passportExpiryDate",
      required: true,
      component: CustomDateField,
      props: { borderRadius: 1 }
    },
    {
      label: "Passport Copy",
      name: "passportCopy",
      required: true,
      component: CustomFileUploadField,
      accept: "application/pdf",
    },
    {
      label: "Do You Have Valid Work Visa?",
      name: "hasValidWorkVisa",
      required: true,
      component: CustomSelect,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
        <Typography variant="h6" mb="3em">
          PASSPORT DETAILS
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
                    component,
                    accept,
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
                            accept,
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
                onClick={() => setIsPassportModalOpen(false)}
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

