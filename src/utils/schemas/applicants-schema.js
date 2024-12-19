// import * as yup from 'yup'

// const phoneRegExp = /^(\+?\d{1,4})?\s?-?\s?(\d{3})\s?-?\s?(\d{3})\s?-?\s?(\d{4})$/;

// export const formSchema = yup.object({
//   // General Info===================================
//   profileImage: yup
//   .mixed()
//   .required("Image is required")
//   .test("fileType", "Only image files are allowed", (value) => {
//     return value && ["image/jpeg", "image/png"].includes(value.type);
//   })
//   .test("fileSize", "Image must be less than 2MB", (value) => {
//     return value && value.size <= 2 * 1024 * 1024;
//   }),
//   campaignName: yup.string().required('Campaign name is required'),
//   residency: yup.string().required('Residency status is required'),
//   fullName: yup.string().required('Full name is required'),
//   gender: yup.string().required('Gender is required'),
//   employeeStatus: yup.string().required('Employee status is required'),
//   workingCountry: yup.string().required('Working country is required'),
//   workingCity: yup.string().required('Working city is required'),
//   interestedplatform:  yup.string().required('This field is required'),
//   learnedFrom: yup.string().required('This field is required'),
//   companyprovideNOC: yup
//   .string()
//   .when("residency", {
//     is: "resident",
//     then: yup.string().required("NOC is required for UAE residents"),
//     otherwise: yup.string().nullable(),
//   }),


//   // Contact & Residence===========================================
//   email: yup.string().email('Invalid email').required('Email is required'),
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
//   // phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
//   // whatsappNumber: yup.string().matches(phoneRegExp, 'WhatsApp number is not valid'),
//   currentCountryResidence: yup.string().required('Current country residen is required'),
//   nationality: yup.string(),

//   // Driving License
//   isLicenseHolder: yup.string().required('Please specify if you have a driving license'),
//   // licenseNumber: yup.string().when('isLicenseHolder', {
//   //   is: 'yes',
//   //   then: yup.string().required('License number is required'),
//   // }),
//   // licenseIssueDate: yup.date().when('isLicenseHolder', {
//   //   is: 'yes',
//   //   then: yup.date().required('Issue date is required'),
//   // }),
//   // licenseExpiryDate: yup.date().when('isLicenseHolder', {
//   //   is: 'yes',
//   //   then: yup.date().required('Expiry date is required'),
//   // }),

//   // Passport Details
//   passportNumber: yup.string().required('Passport number is required'),
//   passportIssueDate: yup.date().required('Passport issue date is required'),
//   passportExpiryDate: yup.date().required('Passport expiry date is required'),
//   passportCopy: yup.mixed().required('Passport copy is required'),
//   visaApplied: yup.boolean(),

//   // Referral
//   referralName: yup.string().required('Referral name is required'),
//   // referralPhone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Referral phone is required'),
//   referralAddress: yup.string().required('Referral address is required'),
// })

// // Emirates Id schema
// yup.object().shape({
//   nationality: yup.string().required("Nationality is required"),
//   emiratesIDNumber: yup
//     .string()
//     .required("Emirates ID No. is required")
//     .matches(
//       /^[0-9]{3}-[0-9]{4}-[0-9]{7}-[0-9]$/,
//       "Emirates ID No. must be in the format 784-2003-1389613-4"
//     ),
//   emiratesIDIssueDate: yup
//     .date()
//     .required("Emirates ID Issue Date is required")
//     .typeError("Invalid date"),
//   emiratesIDExpiryDate: yup
//     .date()
//     .required("Emirates ID Expiry Date is required")
//     .typeError("Invalid date"),
//   emiratesIDFront: yup
//     .mixed()
//     .required("Emirates ID (Front) is required")
//     .test(
//       "fileType",
//       "Only PDF files are allowed",
//       (value) => !value || value.type === "application/pdf"
//     ),
//   emiratesIDBack: yup
//     .mixed()
//     .required("Emirates ID (Back) is required")
//     .test(
//       "fileType",
//       "Only PDF files are allowed",
//       (value) => !value || value.type === "application/pdf"
//     ),
//   residencyIqama: yup
//     .mixed()
//     .required("Residency/Iqama is required")
//     .test(
//       "fileType",
//       "Only PDF files are allowed",
//       (value) => !value || value.type === "application/pdf"
//     ),
// });



// import * as Yup from 'yup';

// export const formSchema = Yup.object().shape({
//   profileImage: Yup.mixed().required('Profile image is required'),
//   campaignName: Yup.string().required('Campaign Name is required'),
//   residency: Yup.string().oneOf(['resident', 'non-resident'], 'Please select a valid residency status').required('Residency status is required'),
//   fullName: Yup.string().required('Full Name is required'),
//   gender: Yup.string().oneOf(['male', 'female', 'other'], 'Please select a valid gender').required('Gender is required'),
//   employeeStatus: Yup.string().oneOf(['fullTime', 'partTime', 'contractor'], 'Please select a valid employment status').required('Employment Status is required'),
//   workingCountry: Yup.string().oneOf(['uae', 'other'], 'Please select a valid working country').required('Preferred Working Country is required'),
//   workingCity: Yup.string().oneOf(['dubai', 'other'], 'Please select a valid working city').required('Preferred Working City is required'),
//   interestedplatform: Yup.string().oneOf(['dubai', 'abuDhabi', 'sharjah'], 'Please select a valid platform').when('residency', {
//     is: 'resident',
//     then: Yup.string().required('Interested platform is required for UAE residents'),
//   }),
//   learnedFrom: Yup.string().oneOf(['social', 'friend', 'other'], 'Please select a valid option').required('Please specify how you learned about this form'),
//   companyprovideNOC: Yup.string().oneOf(['social', 'friend', 'other'], 'Please select a valid option').when('residency', {
//     is: 'resident',
//     then: Yup.string().required('This field is required for UAE residents'),
//   }),
  
//   // Contact & Residence fields
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   phoneNumber: Yup.string().required('Phone number is required'),
//   whatsappNumber: Yup.string().required('WhatsApp number is required'),
//   currentCountry: Yup.string().required('Current country is required'),
//   nationality: Yup.string().required('Nationality is required'),

//   // Emirates ID fields (conditional based on residency)
//   emiratesIDNumber: Yup.string().when('residency', {
//     is: 'resident',
//     then: Yup.string().required('Emirates ID number is required for UAE residents'),
//   }),
//   emiratesIDExpiry: Yup.date().when('residency', {
//     is: 'resident',
//     then: Yup.date().required('Emirates ID expiry date is required for UAE residents'),
//   }),

//   // Driving License fields
//   isLicenseHolder: Yup.boolean().required('Please specify if you hold a driving license'),
//   licenseNumber: Yup.string().when('isLicenseHolder', {
//     is: true,
//     then: Yup.string().required('License number is required for license holders'),
//   }),
//   licenseIssueDate: Yup.date().when('isLicenseHolder', {
//     is: true,
//     then: Yup.date().required('License issue date is required for license holders'),
//   }),
//   licenseExpiryDate: Yup.date().when('isLicenseHolder', {
//     is: true,
//     then: Yup.date().required('License expiry date is required for license holders'),
//   }),

//   // Passport Details fields
//   passportNumber: Yup.string().required('Passport number is required'),
//   passportIssueDate: Yup.date().required('Passport issue date is required'),
//   passportExpiryDate: Yup.date().required('Passport expiry date is required'),
//   passportCopy: Yup.mixed().required('Passport copy is required'),
//   visaApplied: Yup.boolean().required('Please specify if you have applied for a visa'),

//   // Referral fields
//   referralName: Yup.string().required('Referral name is required'),
//   referralPhone: Yup.string().required('Referral phone number is required'),
//   referralAddress: Yup.string().required('Referral address is required'),
// });



import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
  profileImage: Yup.mixed().required('Profile image is required'),
  campaignName: Yup.string().required('Campaign Name is required'),
  residency: Yup.string()
    .oneOf(['resident', 'non-resident'], 'Please select a valid residency status')
    .required('Residency status is required'),
  fullName: Yup.string().required('Full Name is required'),
  gender: Yup.string()
    .oneOf(['male', 'female', 'other'], 'Please select a valid gender')
    .required('Gender is required'),
  employeeStatus: Yup.string()
    .oneOf(['fullTime', 'partTime', 'contractor'], 'Please select a valid employment status')
    .required('Employment Status is required'),
  workingCountry: Yup.string()
    .oneOf(['uae', 'other'], 'Please select a valid working country')
    .required('Preferred Working Country is required'),
  workingCity: Yup.string()
    .oneOf(['dubai', 'other'], 'Please select a valid working city')
    .required('Preferred Working City is required'),
  interestedplatform: Yup.string()
    .oneOf(['dubai', 'abuDhabi', 'sharjah'], 'Please select a valid platform')
    .when('residency', (residency, schema) => 
      residency === 'resident' 
        ? schema.required('Interested platform is required for UAE residents')
        : schema
    ),
  learnedFrom: Yup.string()
    .oneOf(['social', 'friend', 'other'], 'Please select a valid option')
    .required('Please specify how you learned about this form'),
  companyprovideNOC: Yup.string()
    .oneOf(['social', 'friend', 'other'], 'Please select a valid option')
    .when('residency', (residency, schema) => 
      residency === 'resident' 
        ? schema.required('This field is required for UAE residents')
        : schema
    ),
  
  // Contact & Residence fields
   email: Yup.string().email('Invalid email address').required('Email is required'),
   phoneNumber: Yup.object().shape({
    countryCode: Yup.string()
      .matches(/^\+\d{1,3}$/, 'Country code must be in the format +XX or +XXX')
      .required('Country code is required'),
    number: Yup.string()
      .matches(/^\d{3} \d{3} \d{4}$/, 'Number must be in the format XXX XXX XXXX')
      .required('Phone number is required'),
  }),
  whatsappNumber: Yup.object().shape({
    countryCode: Yup.string()
      .matches(/^\+\d{1,3}$/, 'Country code must be in the format +XX or +XXX'),
    number: Yup.string()
    .matches(/^\d{3} \d{3} \d{4}$/, 'Number must be in the format XXX XXX XXXX'),
  }),
   currentCountry: Yup.string().when('residency', (residency, schema) =>
     residency === 'non-resident'
       ? schema.required('Current country is required for non-UAE residents')
       : schema
   ),
   nationality: Yup.string().when('residency', (residency, schema) =>
    residency === 'resident'
      ? schema.Required()
      : schema.notRequired('Nationality is required')
  ),

  // Emirates ID fields (conditional based on residency)
  emiratesIDNumber: Yup.string()
    .when('residency', (residency, schema) => 
      residency === 'resident'
        ? schema
            .required('Emirates ID number is required')
            .matches(
              /^\d{3}-\d{4}-\d{7}-\d{1}$/,
              'Emirates ID must be in format XXX-XXXX-XXXXXXX-X'
            )
        : schema
    ),
  emiratesIDIssueDate: Yup.date()
    .when('residency', (residency, schema) =>
      residency === 'resident'
        ? schema
            .required('Emirates ID issue date is required')
            .max(new Date(), 'Issue date cannot be in the future')
        : schema
    ),
  emiratesIDExpiryDate: Yup.date()
    .when('residency', (residency, schema) =>
      residency === 'resident'
        ? schema
            .required('Emirates ID expiry date is required')
            .min(new Date(), 'Expiry date must be in the future')
        : schema
    ),
  emiratesIDFront: Yup.mixed()
    .when('residency', (residency, schema) =>
      residency === 'resident'
        ? schema
            .required('Emirates ID front scan is required')
            .test('fileType', 'Only PDF files are allowed', (value) => {
              if (!value) return true; // Let required handle empty
              return value && value.type === 'application/pdf';
            })
            .test('fileSize', 'File must be less than 5MB', (value) => {
              if (!value) return true; // Let required handle empty
              return value && value.size <= 5000000;
            })
        : schema
    ),
  emiratesIDBack: Yup.mixed()
    .when('residency', (residency, schema) =>
      residency === 'resident'
        ? schema
            .required('Emirates ID back scan is required')
            .test('fileType', 'Only PDF files are allowed', (value) => {
              if (!value) return true;
              return value && value.type === 'application/pdf';
            })
            .test('fileSize', 'File must be less than 5MB', (value) => {
              if (!value) return true;
              return value && value.size <= 5000000;
            })
        : schema
    ),
  residencyIqama: Yup.mixed()
    .when('residency', (residency, schema) =>
      residency === 'resident'
        ? schema
            .required('Residency/Iqama scan is required')
            .test('fileType', 'Only PDF files are allowed', (value) => {
              if (!value) return true;
              return value && value.type === 'application/pdf';
            })
            .test('fileSize', 'File must be less than 5MB', (value) => {
              if (!value) return true;
              return value && value.size <= 5000000;
            })
        : schema
    ),

  // Driving License fields
  isLicenseHolder: Yup.string().required('Please specify if you hold a driving license'),
  licenseNumber: Yup.string().when('isLicenseHolder', (isLicenseHolder, schema) => 
    isLicenseHolder 
      ? schema.required('License number is required for license holders')
      : schema
  ),
  licenseIssueDate: Yup.date().when('isLicenseHolder', (isLicenseHolder, schema) => 
    isLicenseHolder 
      ? schema.required('License issue date is required for license holders')
      : schema
  ),
  licenseExpiryDate: Yup.date().when('isLicenseHolder', (isLicenseHolder, schema) => 
    isLicenseHolder 
      ? schema.required('License expiry date is required for license holders')
      : schema
  ),

  // Passport Details fields
  passportNumber: Yup.string().required('Passport number is required'),
  passportIssueDate: Yup.date().required('Passport issue date is required'),
  passportExpiryDate: Yup.date().required('Passport expiry date is required'),
  passportCopy: Yup.mixed().required('Passport copy is required'),
  visaApplied: Yup.boolean().required('Please specify if you have applied for a visa'),

  // Referral fields
  referralName: Yup.string().required('Referral name is required'),
  referralPhone: Yup.object().shape({
    countryCode: Yup.string()
      .matches(/^\+\d{1,3}$/, 'Country code must be in the format +XX or +XXX')
      .required('Country code is required'),
    number: Yup.string()
      .matches(/^\d{3} \d{3} \d{4}$/, 'Number must be in the format XXX XXX XXXX')
      .required('Phone number is required'),
  }),

  referralAddress: Yup.string().required('Referral address is required'),
});
