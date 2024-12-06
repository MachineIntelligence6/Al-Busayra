import * as yup from 'yup'

const phoneRegExp = /^(\+?\d{1,4})?\s?-?\s?(\d{3})\s?-?\s?(\d{3})\s?-?\s?(\d{4})$/;

export const formSchema = yup.object({
  // General Info
  profileImage: yup
  .mixed()
  .required("Image is required")
  .test("fileType", "Only image files are allowed", (value) => {
    return value && ["image/jpeg", "image/png"].includes(value.type);
  })
  .test("fileSize", "Image must be less than 2MB", (value) => {
    return value && value.size <= 2 * 1024 * 1024;
  }),
  campaignName: yup.string().required('Campaign name is required'),
  residency: yup.string().required('Residency status is required'),
  fullName: yup.string().required('Full name is required'),
  gender: yup.string().required('Gender is required'),
  employeeStatus: yup.string().required('Employee status is required'),
  workingCountry: yup.string().required('Working country is required'),
  workingCity: yup.string().required('Working city is required'),
  learnedFrom: yup.string().required('This field is required'),

  // Contact & Residence
  email: yup.string().email('Invalid email').required('Email is required'),
  // phoneNumber: yup.object().shape({
  //   countryCode: yup.string()
  //     .matches(/^\+\d{1,3}$/, 'Country code must be in the format +XX or +XXX')
  //     .required('Country code is required'),
  //   number: yup.string()
  //     .matches(/^\d{3} \d{3} \d{4}$/, 'Number must be in the format XXX XXX XXXX')
  //     .required('Phone number is required'),
  // }),
  // whatsappNumber: yup.object().shape({
  //   countryCode: yup.string()
  //     .matches(/^\+\d{1,3}$/, 'Country code must be in the format +XX or +XXX')
  //     .required('Country code is required'),
  //   number: yup.string()
  //     .matches(/^\d{6,15}$/, 'Number must contain 6 to 15 digits without spaces')
  //     .required('WhatsApp number is required'),
  // }),
  // phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
  // whatsappNumber: yup.string().matches(phoneRegExp, 'WhatsApp number is not valid'),
  currentCountryResidence: yup.string().required('Current country residen is required'),
  nationality: yup.string(),

  // Driving License
  isLicenseHolder: yup.string().required('Please specify if you have a driving license'),
  // licenseNumber: yup.string().when('isLicenseHolder', {
  //   is: 'yes',
  //   then: yup.string().required('License number is required'),
  // }),
  // licenseIssueDate: yup.date().when('isLicenseHolder', {
  //   is: 'yes',
  //   then: yup.date().required('Issue date is required'),
  // }),
  // licenseExpiryDate: yup.date().when('isLicenseHolder', {
  //   is: 'yes',
  //   then: yup.date().required('Expiry date is required'),
  // }),

  // Passport Details
  passportNumber: yup.string().required('Passport number is required'),
  passportIssueDate: yup.date().required('Passport issue date is required'),
  passportExpiryDate: yup.date().required('Passport expiry date is required'),
  passportCopy: yup.mixed().required('Passport copy is required'),
  visaApplied: yup.boolean(),

  // Referral
  referralName: yup.string().required('Referral name is required'),
  // referralPhone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Referral phone is required'),
  referralAddress: yup.string().required('Referral address is required'),
})

