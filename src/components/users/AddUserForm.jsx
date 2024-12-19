import React from "react";
import { useForm, FormProvider, } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box, Divider, Paper, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import DoneIcon from "@mui/icons-material/Done";
import CustomButton from "@/components/shared-components/CustomButton";
import CustomTextField from "@/components/shared-components/CustomTextField";
import CustomDatePicker from "@/components/shared-components/CustomDatePicker";
import { ChallansSchema } from "@/utils/schemas/ChallanFormSchema";
import CustomSelect from "../shared-components/CustomSelect";
import CustomFileUploadField from "../shared-components/CustomFIleUploadField";
import { useRouter } from "next/navigation";
import { AddUserInfoFields } from "./AddUserInfoFields";
import { addUserInfoSchema } from "@/utils/schemas/user-schema";

export default function AddUserForm({ handleCloseModal }) {
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(addUserInfoSchema),
    mode: "onChange",
    defaultValues: {
      bikeNumberPlate: "",
      bikeOwner: "",
      challanNo: "",
      challanAmount: "",
      challanAttachments: null,
      dateOfTrafficChallan: "",
      time: "",
      city: "",
      location: "",
      reason: "",
    },
  });

  const { trigger, control } = methods;

  const handleSave = async () => {
    const isValid = await trigger();
    if (!isValid) {
      console.log("Validation Errors:", methods.formState.errors);
    }
    handleCloseModal();
    router.push("/users/active-users")
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    handleCloseModal();
  };

  const fields = [
    {
      label: "Bike Number Plate",
      name: "bikeNumberPlate",
      required: true,
      component: CustomTextField,
      placeholder: "45463",
    },
    {
      label: "Bike Owner",
      name: "bikeOwner",
      required: true,
      component: CustomTextField,
      placeholder: "ABDS",
      additionalUI: () => (
        <CustomButton
          variant="contained"
          onClick={() => console.log("View Details clicked")}
        >
          View Details
        </CustomButton>
      ),
    },
    {
      label: "Challan No.",
      name: "challanNo",
      required: true,
      component: CustomTextField,
      placeholder: "e.g 3243432",
    },
    {
      label: "Challan Amount",
      name: "challanAmount",
      required: true,
      component: CustomTextField,
      placeholder: "e.g 1500",
    },
    {
      label: "Challan Attachments",
      name: "challanAttachments",
      required: true,
      component: CustomFileUploadField,
      accept: "application/pdf",
    },
    {
      label: "Date Of Traffic Challan",
      name: "dateOfTrafficChallan",
      required: true,
      component: CustomDatePicker,
      placeholder:"DD/MM/YYYY"
    },
    {
      label: "Time",
      name: "time",
      required: true,
      component: CustomTextField,
      placeholder: "e.g 12:00 PM",
    },
    {
      label: "City",
      name: "city",
      required: true,
      component: CustomSelect,
      placeholder: "e.g Sharjah",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
    },
    {
      label: "Location",
      name: "location",
      required: true,
      component: CustomTextField,
      placeholder: "e.g salahuddin rd deira, sharjha",
    },
    {
      label: "Reason",
      name: "reason",
      required: true,
      component: CustomTextField,
      placeholder: "e.g",
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
        <Typography variant="h6">Add User</Typography>
        <Divider sx={{my:"1em"}} />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <AddUserInfoFields control={control}/>
            </Box>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <CustomButton
                variant="outlined"
                bgColor="danger"
                onClick={handleCloseModal}
                startIcon={<CancelIcon />}
              >
                Cancel
              </CustomButton>
              <CustomButton
                type="submit"
                variant="contained"
                onClick={handleSave}
                endIcon={<DoneIcon />}
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
