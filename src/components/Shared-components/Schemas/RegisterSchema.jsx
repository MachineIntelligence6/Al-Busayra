

import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Address is required."),
  phone: Yup.string()
    .matches(/^\d{3} \d{3} \d{4}$/, "Phone number must be in the format 123 456 7890.")
    .required("Phone Number is required."),
  dropdown1: Yup.string().required("Resident Country is required."),
  dropdown2: Yup.string().required("Resident City is required."),
  dropdown3: Yup.string().required("Please select if you have a valid driving license."),
  
});
