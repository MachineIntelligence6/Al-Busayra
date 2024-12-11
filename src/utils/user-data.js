import { ActiveUserIcon, CompanyUserIcon, GlobalUserIcon, InactiveUserIcon } from "./Icons";

export const userData = [
    {
      id: "AB00001",
      fullName: "Saleem Akhtar",
      email: "saleem@gmail.com",
      image: "/images/profile-f.jpg",
      userType: "Internal",
      role: "Administrator",
      createdDate: "2024-01-01",
      lastLogin: "2024-02-15",
      isActive: true, // Toggle state
    },
    {
      id: "AB00002",
      fullName: "Ayesha Khan",
      email: "ayesha.khan@gmail.com",
      image: "/images/profile-f2.jpg",
      userType: "Internal",
      role: "Manager",
      createdDate: "2023-10-10",
      lastLogin: "2024-02-10",
      isActive: false,
    },
    {
      id: "AB00003",
      fullName: "Zain Ali",
      email: "zain.ali@gmail.com",
      image: "/images/profile-m.jpg",
      userType: "External",
      role: "Admin",
      createdDate: "2023-11-25",
      lastLogin: "2024-01-20",
      isActive: true,
    },
    {
      id: "AB00004",
      fullName: "Fatima Riaz",
      email: "fatima.riaz@gmail.com",
      image: "/images/profile-f3.jpg",
      userType: "Internal",
      role: "Manager",
      createdDate: "2024-01-05",
      lastLogin: "2024-02-18",
      isActive: false,
    },
    {
      id: "AB00005",
      fullName: "Bilal Ahmad",
      email: "bilal.ahmad@gmail.com",
      image: "/images/profile-m2.jpg",
      userType: "Internal",
      role: "Admin",
      createdDate: "2023-12-12",
      lastLogin: "2024-02-17",
      isActive: true,
    },
  ];

  export const userColoredCardData = [
    {
      bgColor: {
        background: "linear-gradient(105deg, #DA6F68 2.55%, #AE4039 98.46%)",
      },
      icon: GlobalUserIcon,
      totalUsers: 120,
      cardName: "Total Users",
    },
    {
      bgColor: {
        background: "linear-gradient(105deg, #52AD7E 2.55%, #2E724F 98.46%)",
      },
      icon: CompanyUserIcon,
      totalUsers: 50,
      cardName: "Active Users",
    },
    {
      bgColor: {
        background: "linear-gradient(105deg, #6F79A8 2.55%, #49537E 98.46%)",
      },
      icon: ActiveUserIcon,
      totalUsers: 70,
      cardName: "Inactive Users",
    },
    {
      bgColor: {
        background: "linear-gradient(105deg, #F3A458 2.55%, #786883 98.46%)",
      },
      icon: InactiveUserIcon,
      totalUsers: 30,
      cardName: "Admins",
    },
  ];
  