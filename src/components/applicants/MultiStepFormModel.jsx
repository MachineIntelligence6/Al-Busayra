
import React, { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Box, Button, Paper } from '@mui/material'
import { GeneralInfo } from './form-steps/GeneralInfo'
import CancelIcon from '@mui/icons-material/Cancel'
import DoneIcon from '@mui/icons-material/Done'
import { ContactResidence } from './form-steps/ContactResidence'
import { EmiratesID } from './form-steps/EmiratesID'
import { DrivingLicense } from './form-steps/DrivingLicense'
import { PassportDetails } from './form-steps/PassportDetails'
import { Referral } from './form-steps/Referral'
import { formSchema } from '@/utils/schemas/applicants-schema'
import CustomTabs from '../Shared-components/CustomTabs'
import { CustomTabPanel } from '../Shared-components/CustomTabPanel'
import CustomButton from '@/components/Shared-components/CustomButton'
import { useRouter } from 'next/navigation'

export default function MultiStepFormModel({ handleCloseModal }) {
  const [activeTab, setActiveTab] = useState(0)
  const [isUaeResident, setIsUaeResident] = useState(false)
  const route = useRouter()
  const methods = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      campaignName: "",
      residency: "",
      fullName: "",
      gender: "",
      employeeStatus: "",
      workingCountry: "",
      workingCity: "",
      interestedplatform: "",
      learnedFrom: "",
      companyprovideNOC: "",
      profileImage: "",
    },
  })

  const { trigger, watch } = methods

  const watchedResidency = watch('residency')

  useEffect(() => {
    setIsUaeResident(watchedResidency === "resident")
  }, [watchedResidency])

  const tabs = [
    'General Info',
    'Contact & Residence',
    ...(isUaeResident ? ['Emirates ID'] : []),
    'Driving License',
    'Passport Details',
    'Referral'
  ]

  const stepFields = {
    0: [
      'campaignName',
      'residency',
      'fullName',
      'gender',
      'employeeStatus',
      'workingCountry',
      'workingCity',
      'interestedplatform',
      'learnedFrom',
      'companyprovideNOC',
    ],
    1: ['email', 'phoneNumber', 'whatsappNumber', 'currentCountry', 'nationality'],
    ...(isUaeResident
      ? { 2: ['nationality', 'emiratesIDNumber', 'emiratesIDIssueDate', 'emiratesIDExpiryDate', 'emiratesIDFront', 'emiratesIDBack', 'residencyIqama'] }
      : {}),
    [isUaeResident ? 3 : 2]: ['isLicenseHolder', 'licenseNumber', 'licenseIssueDate', 'licenseExpiryDate'],
    [isUaeResident ? 4 : 3]: ['passportNumber', 'passportIssueDate', 'passportExpiryDate', 'passportCopy', 'visaApplied'],
    [isUaeResident ? 5 : 4]: ['referralName', 'referralPhone', 'referralAddress'],
  }

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const handleNext = async () => {
    console.log("Validating fields:", stepFields[activeTab])

    const isValid = await trigger(stepFields[activeTab])
    if (!isValid) {
      console.log("Validation Errors:", methods.formState.errors)
    }

    if (isValid) {
      setActiveTab((prev) => Math.min(tabs.length - 1, prev + 1))
    }
  }

  const onSubmit = (data) => {
    console.log(data)
    handleCloseModal()
    route.push("/admin/applicants/final-review")
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper sx={{ maxWidth: 800, margin: 'auto', p: 3 }}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <CustomTabs tabs={tabs} activeTab={activeTab} handleTabChange={handleTabChange} isUaeResident={isUaeResident} />

            <CustomTabPanel value={activeTab} index={0}>
              <GeneralInfo control={methods.control} isUaeResident={isUaeResident} />
            </CustomTabPanel>

            <CustomTabPanel value={activeTab} index={1}>
              <ContactResidence control={methods.control} isUaeResident={isUaeResident} error={methods?.formState?.errors} />
            </CustomTabPanel>

            {isUaeResident && (
              <CustomTabPanel value={activeTab} index={2}>
                <EmiratesID control={methods.control} isUaeResident={isUaeResident} />
              </CustomTabPanel>
            )}

            <CustomTabPanel value={activeTab} index={isUaeResident ? 3 : 2}>
              <DrivingLicense control={methods.control} isUaeResident={isUaeResident} />
            </CustomTabPanel>

            <CustomTabPanel value={activeTab} index={isUaeResident ? 4 : 3}>
              <PassportDetails control={methods.control} isUaeResident={isUaeResident} />
            </CustomTabPanel>

            <CustomTabPanel value={activeTab} index={isUaeResident ? 5 : 4}>
              <Referral control={methods.control} isUaeResident={isUaeResident} />
            </CustomTabPanel>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <CustomButton
                variant="outlined"
                bgColor="danger"
                onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
                startIcon={<CancelIcon />}
                disabled={activeTab === 0}
              >
                Cancel
              </CustomButton>
              {activeTab === tabs.length - 1 ? (
                <Button type="submit" variant="contained">
                  Save
                </Button>
              ) : (
                <CustomButton
                  type="button"
                  variant="contained"
                  onClick={handleNext}
                  endIcon={<DoneIcon sx={{ width: "15px" }} />}
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

