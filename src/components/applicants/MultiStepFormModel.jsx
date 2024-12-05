import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, Button, Paper } from '@mui/material'
import { GeneralInfo } from './form-steps/GeneralInfo'
import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';
import { ContactResidence } from './form-steps/ContactResidence'
import { DrivingLicense } from './form-steps/DrivingLicense'
import { PassportDetails } from './form-steps/PassportDetails';
import { Referral } from './form-steps/Referral';
import { formSchema } from '@/utils/schemas/applicants-schema';
import CustomTabs from '../Shared-components/CustomTabs';
import { CustomTabPanel } from '../Shared-components/CustomTabPanel';
import CustomButton  from '@/components/Shared-components/CustomButton';

const tabs = ["General Info", "Contact & Residence", "Driving License", "Passport Details", "Referral"];

const stepFields = {
  0: ['campaignName', 'residency', 'fullName', 'gender', 'employeeStatus', 'workingCountry', 'workingCity', 'learnedFrom'],
  1: ['email', 'phoneNumber', 'whatsappNumber', 'currentCountry', 'nationality'],
  2: ['isLicenseHolder', 'licenseNumber', 'licenseIssueDate', 'licenseExpiryDate'],
  3: ['passportNumber', 'passportIssueDate', 'passportExpiryDate', 'passportCopy', 'visaApplied'],
  4: ['referralName', 'referralPhone', 'referralAddress'],
};

export default function MultiStepFormModel({handleCloseModal}
) {
  const [activeTab, setActiveTab] = useState(0)
  const methods = useForm({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  })

  const { trigger } = methods;

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const handleNext = async () => {
    const isValid = await trigger(stepFields[activeTab]);
    if (isValid) {
      setActiveTab((prev) => Math.min(4, prev + 1));
    }
  };

  const onSubmit = (data) => {
    console.log(data)
    // Handle form submission
    handleCloseModal();
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper sx={{ maxWidth: 800, margin: 'auto', p: 3 }}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CustomTabs tabs={tabs} activeTab={activeTab} handleTabChange={handleTabChange} />

            <CustomTabPanel value={activeTab} index={0}>
              <GeneralInfo control={methods.control} />
            </CustomTabPanel>

            <CustomTabPanel value={activeTab} index={1}>
              <ContactResidence control={methods.control} />
            </CustomTabPanel>

            <CustomTabPanel value={activeTab} index={2}>
              <DrivingLicense control={methods.control} />
            </CustomTabPanel>

            <CustomTabPanel value={activeTab} index={3}>
              <PassportDetails control={methods.control} />
            </CustomTabPanel>

            <CustomTabPanel value={activeTab} index={4}>
              <Referral control={methods.control} />
            </CustomTabPanel>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <CustomButton
              variant="outlined" 
              bgColor="danger" 
              onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))} 
              startIcon={<CancelIcon/>}
              disabled={activeTab === 0}
              >
              Cancel
              </CustomButton>
              {activeTab === 4 ? (
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              ) : (
                <CustomButton 
              type="submit" variant="contained"
              onClick={handleNext} 
              endIcon={<DoneIcon sx={{width:"15px"}}/>}
              >
              Next
              </CustomButton>
              )}
            </Box>
          </form>
        </FormProvider>
      </Paper>
    </LocalizationProvider>
  )
}
