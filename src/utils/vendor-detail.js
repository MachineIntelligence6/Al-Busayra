import CurrencyType from "@/components/Shared-components/CurrencyType";
import {
  CalendarIcon,
  GlobeIcon,
  HomeIcon,
  IdIcon,
  LicenseIcon,
  MailIcon,
  MapIcon,
  MotorbikeIcon,
  PhoneIcon,
  ReceieptTaxIcon,
  SendIcon,
  ShieldIcon,
  ShieldIcon1,
  StarIcon,
  UserIcon,
} from "./Icons";
import {
  CashFrameIcon,
  ClipBoardIcon,
  CutIcon,
  InstallmentIcon,
} from "./icons2";

export const tableViewDetail = [
  {
    label: "Date",
    value: "12-08-2016",
    icon: <CalendarIcon />,
  },
  {
    label: "Driving license Amount Charged To Rider",
    value: "300",
    icon: <MotorbikeIcon />,
    currencyIcon: <CurrencyType />,
  },
  {
    label: "Deduction Type",
    value: "Variable",
    icon: <CutIcon />,
  },
  {
    label: "Remaining Amount",
    value: "600",
    icon: <ClipBoardIcon />,
    currencyIcon: <CurrencyType />,
  },
  {
    label: "Installment Plan",
    value: "3 Months",
    icon: <InstallmentIcon />,
  },
  {
    label: "Reason for Driving License",
    value: "Expired",
    icon: <LicenseIcon />,
  },

  {
    label: "Driving License Purchase Cost (Actual License Cost)",
    value: "600",
    icon: <CashFrameIcon />,
    currencyIcon: <CurrencyType />,
  },
  {
    label: "Advance Received",
    value: "300",
    icon: <ClipBoardIcon />,
    currencyIcon: <CurrencyType />,
  },
  {
    label: "Status",
    value: "Approved",
    icon: <ShieldIcon1 />,
  },
];

export const vendorDetail = [
  {
    label: "Vendor ID",
    value: "CA125",
    icon: <UserIcon />,
  },
  {
    label: "Tax Register",
    value: "Yes",
    icon: <ReceieptTaxIcon />,
  },
  {
    label: "Email Address",
    value: "abidali@gmail.com",
    icon: <MailIcon />,
  },
  {
    label: "Country",
    value: "UAE",
    icon: <GlobeIcon />,
  },
  {
    label: "Address",
    value: "Street 08, Al Jamal Resident",
    icon: <HomeIcon />,
  },
  {
    label: "POC Name",
    value: "Abdul Rehman",
    icon: <UserIcon />,
  },
  {
    label: "Status",
    value: "Active",
    icon: <ShieldIcon />,
  },
  {
    label: "Vendor Name",
    value: "Abid Ali",
    icon: <UserIcon />,
  },
  {
    label: "Vendor Type",
    value: "Bike Maintenance",
    icon: <SendIcon />,
  },
  {
    label: "Phone Number",
    value: "+971 123 456 7890",
    icon: <PhoneIcon />,
  },
  {
    label: "City",
    value: "Dubai",
    icon: <MapIcon />,
  },
  {
    label: "TRN",
    value: "2143243",
    icon: <ReceieptTaxIcon />,
  },
  {
    label: "POC Phone Number",
    value: "+971 123 456 7890",
    icon: <PhoneIcon />,
  },
  {
    label: "Vendor Agreement",
    value: "PDF File",
    icon: <LicenseIcon />,
  },
];

export const allocateAssetData = [
  {
    label: "Employee ID",
    value: "AB00001",
  },
  {
    label: "Resident",
    value: "UAE",
  },
  {
    label: "Driving License",
    value: "879343",
  },
  {
    label: "Passport Number",
    value: "TA1822801",
  },
  {
    label: "Employee type",
    value: "Rider",
  },
  {
    label: "Rider Aquiring Company",
    value: "Rafiq Khan",
    icon: "/company/Avataricon.svg",
  },
  {
    label: "Rider Aquiring Company ",
    value: "Careem",
    icon: "/company/careemicon.svg",
  },
  {
    label: "City ",
    value: "Sharjah",
  },
  {
    label: "Salary Type Fixed/Commission",
    value: "Fixed",
  },
  {
    label: "Salary Amount Fixed/Commission",
    value: "200",
    currency: "AED",
  },
  {
    label: "Status",
    value: "Approved",
  },
  {
    label: "Bike",
    value: "Not Assigned",
  },
  {
    label: "SIM",
    value: "Not Assigned",
  },
];

export const addContractData = [
  {
    label: "Vendor ID",
    value: "CA125",
  },
  {
    label: "Vendor Type",
    value: "Bike Maintenance",
  },
  {
    label: "Phone Number",
    value: "+971 123 456 7890",
  },
  {
    label: "Country",
    value: "UAE",
  },
  {
    label: "City",
    value: "Dubai",
  },
  {
    label: "Address",
    value: "Street 08, Al Jamal Resident",
  },
  {
    label: "TRN",
    value: "2143243",
  },
  {
    label: "POC Name",
    value: "Abdul Rehman",
  },
  {
    label: "POC Phone Number",
    value: "+971 123 456 7890",
  },
  {
    label: "Status",
    value: "Active",
  },
];

export const platformDetail = [
  {
    label: "Platform ID",
    value: "589642",
    icon: <UserIcon />,
  },
  {
    label: "Platform Type",
    value: "Bike Maintenance",
    icon: <StarIcon />,
  },

  {
    label: "Country",
    value: "UAE",
    icon: <GlobeIcon />,
  },
  {
    label: "Address",
    value: "Street 08, Al Jamal Resident",
    icon: <HomeIcon />,
  },
  {
    label: "POC Phone Number",
    value: "+971 123 456 7890",
    icon: <PhoneIcon />,
  },

  {
    label: "Platform Name",
    value: "Careem",
    icon: <UserIcon />,
  },
  {
    label: "Email Address",
    value: "abidali@gmail.com",
    icon: <MailIcon />,
  },

  {
    label: "City",
    value: "Dubai",
    icon: <MapIcon />,
  },
  {
    label: "POC Name",
    value: "Abdul Rehman",
    icon: <UserIcon />,
  },
  {
    label: "Status",
    value: "Active",
    icon: <ShieldIcon />,
  },
];

export const dlRrquestSideCardData = [
  {
    label: "Employee ID",
    value: "AB00001",
  },
  {
    label: "Resident",
    value: "UAE",
  },
  {
    label: "Driving License",
    value: "879343",
  },
  {
    label: "Passport Number",
    value: "TA1822801",
  },

  {
    label: "Personal Mobile # (UAE)",
    value: "+971 986556465",
  },
  {
    label: "Employee type",
    value: "Rider",
  },
  {
    label: "Nationality ",
    value: "UAE",
  },
  {
    label: "Martial Status",
    value: "Single",
  },
  {
    label: "Religion",
    value: "Islam",
  },
  {
    label: "Personal Phone Number (UAE)",
    value: "+971 123 456 7890",
  },
  {
    label: "WhatsApp Number ",
    value: "+971 123 456 7890",
  },
  {
    label: "Emergency Contact Name (UAE)",
    value: "Ramzan Ali",
  },
  {
    label: "Emergency Contact Number (UAE)",
    value: "+971 123 456 7890",
  },
];
