"use client"
import { custom } from "@/app/theme";
import AssetClearanceForm from "@/components/company-flow/asset-clearance/AssetClearanceForm";
import CustomizedAccordions from "@/components/company-flow/asset-clearance/CustomAccordion";
import ActionMenu from "@/components/Shared-components/ActionMenu";
import { challanData } from "@/utils/challans-data";
import { Box, Typography } from "@mui/material";

export default function AssetClearanceFormPage() {

    const items = [
        {
          title: 'Bike Information',
        },
        {
          title: 'Car Information',
        },
      ];

   const actionMenu = [
          { label: "Procced", route: "/admin/applicants/proceed" },
          { label: "Not qualified", route: "/admin/applicants/not-qualified" },
        ]

    const column = [
        {
          field: "id",
          headerName: "ID",
          align: "left",
          render: (row) => (
            <Typography
              variant="body2"
              sx={{
                borderBottom: "1px solid #20A4D5E5",
                color: "#20A4D5E5",
                cursor: "pointer"
              }}
            >
              {row.id}
            </Typography>
          ),
        },
        {
          field: "fullName",
          headerName: "FULL NAME AS PER EMIRATES ID",
          align: "left",
        },
        {
          field: "resident",
          headerName: "RESIDENT",
          align: "left",
          render: (row) => (
            <Typography
              variant="caption"
              sx={{
                backgroundColor: "transparent",
                border: `1px solid ${custom.deepBlue}`,
                padding: "7px 10px",
                borderRadius: "6px",
                color: custom.deepBlue,
              }}
            >
              {row.resident}
            </Typography>
          ),
        },
        {
          field: "drivingLicense",
          headerName: "DRIVING LICENSE",
          align: "left",
        },
        {
          field: "passportNumber",
          headerName: "PASSPORT NUMBER",
          align: "left",
        },
        {
          field: "phoneNumber",
          headerName: "PHONE NUMBER",
          align: "left",
        },
        {
          field: "employeeType",
          headerName: "EMPLOYEE TYPE",
          align: "left",
          render: (row) => (
            <Typography
              variant="caption"
              sx={{
                backgroundColor: "#80839029"
                  // row.employeeType === "Rider" ? "#80839029" : "#FCE4EC",
                  ,
                padding: "4px 10px",
                borderRadius: "3px",
                color: "#2F2B3DE5"
              }}
            >
              {row.employeeType}
            </Typography>
          ),
        },
        {
          field: "action",
          headerName: "ACTION",
          align: "left",
          render: (row) => (
            <ActionMenu
              menuItems={actionMenu}
              onMenuItemClick={(item) => router.push(item.route)}
            />
          ),
        },
      ];
    return (
    <Box display="flex" flexDirection="column" gap={2} sx={{width:"100%"}}>
        <AssetClearanceForm/>
        <CustomizedAccordions column={column} data={challanData} items={items} title="Asset History"/>
    </Box>
    )
  }