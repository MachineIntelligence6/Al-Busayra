"use client";
import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import { Person, Group, CalendarToday, CheckCircle } from "@mui/icons-material";
import { CustomPermissionTabs } from "@/components/Shared-components/CustomPermissionTabs";
import { CompanyIcon, GlobalIcon } from "@/utils/Icons";
import RoleInfoCard from "@/components/roles-template/RoleInfoCard";
import CustomButton from "@/components/Shared-components/CustomButton";

const Page = () => {
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const tabData = [
    {
      icon: <GlobalIcon sx={{ marginRight: 1, color: "#fff" }} />,
      label: "Global Permissions",
      content: "Content for Global Permissions",
    },
    {
      icon: <CompanyIcon sx={{ marginRight: 1 }} />,
      label: "Company Permissions",
      content: "Content for Company Permissions",
    },
  ];

  const cardData = {
    title: "Basic Information",
    editButton: true,
    data: [
      { label: "Role", value: "Administrator", 
        // icon: <Person />
       },
      { label: "Created Date", value: "10-12-2023",
        //  icon: <CalendarToday /> 
        },
      { label: "User Type", value: "Internal User",
        //  icon: <Group />
         },
      {
        label: "Status",
        value: "Active",
        // icon: <CheckCircle fontSize="20px" />,
        valueStyle: { color: "green", fontWeight: "bold" },
      },
    ],
  };

  useEffect(() => {
    if (pathname === "/challans/traffic") {
      // You might want to set these flags or remove if unnecessary
      setIsBtnShow(true);
      setIsChallan(true);
    }
  }, [pathname]);

  const handleEdit = () => {
    console.log("Edit button clicked!");
  };

  const handleEditTab = () => {
    console.log("Edit button clicked!");
  };

  return (
    <>
      <Box sx={{ px: 2 }}>
        <DynamicBreadcrumb />
      </Box>
      <Divider sx={{ mt: 2 }} />
      {/* Card Section */}
      <Box
        sx={{
          padding: "3px 0 0 0",
          margin: "20px 0px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
          borderRadius: "10px",
          backgroundColor: "#104774",
          height:"2rem !important"
        }}
      >
        <RoleInfoCard
          title={cardData.title}
          data={cardData.data}
          onEdit={handleEdit}
        />
        <Typography variant="body2" sx={{ marginY: "20px", fontWeight: "700" }}>
          ROLE & PERMISSIONS
        </Typography>
        <CustomPermissionTabs tabData={tabData} onClick={handleEditTab} handleChange={handleChange} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      </Box>
    </>
  );
};

export default Page;
