import ActionMenu from '@/components/Shared-components/ActionMenu';
import CompanyTableModal from '@/components/Shared-components/modals/CompanyTableModal'
import { Box, Typography } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react'
import CustomTableWrapper from '../asset-clearance/CustomTableWrapper';
import CustomAvatar from '@/components/Shared-components/CustomAvatar';
import { foodPermitDeductionTableData } from '@/utils/company-flow/food-permit-deduction.data';
import TableFilters from '@/components/Shared-components/Table-components/TableFilters';
import CustomTable from '@/components/Shared-components/Table-components/CustomTable';
import TablePagination from '@/components/Shared-components/Table-components/TablePagination';
import CustomTableExportRow from '@/components/Shared-components/customTableExportRow';

const tableFiltersData = [
    {
        id: 2,
        filterName: "ID",
        placeholder: "3212",
        inputType: "text",
    },
    {
        id: 3,
        filterName: "Bike Number",
        placeholder: "Type here...",
        inputType: "text",
    },
    {
        id: 4,
        filterName: "Employee Name",
        placeholder: "e.g Rashid",
        inputType: "text",
    },
    {
        id: 1,
        filterName: "Working City",
        placeholder: "Search here",
        inputType: "text",

    },
];
const actionMenu = [
    { label: "Food Permit Deduction Form", action: "form" },
    { label: "View Details", action: "view" },
];

const FoodPermitModal = ({ open, onClose, onViewDetails }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalEntries, setTotalEntries] = useState(10);
    const [headerSearchValue, setHeaderSearchValue] = useState("");
    const rowsPerPage = 7;
    const router = useRouter()



    const onSearchChange = (value) => {
        console.log("Search Value:", value);
        setHeaderSearchValue(value);
    };

    // Handler for total entries dropdown change
    const handleTotalEntriesChange = (value) => {
        console.log("Total Entries Selected:", value);
        setTotalEntries(value);
    };

    const handleRowSelect = (selectedRowIds) => {
        console.log("Selected Row IDs:", selectedRowIds);
    };

    const handleMenuClick = (menuItem) => {
        console.log("Menu clicked:", menuItem.label);
    };

    const handleFilterClick = (field) => {
        console.log(`Filter clicked for: ${field}`);
    };
    const handleActionMenu = (item) => {
        if (item.action === "form") router.push("/employees/food-permit-deduction/form");
        if (item.action === "view") onViewDetails(item)
    }


    const columns = useMemo(() => {
        return [
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
                            cursor: "pointer",
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
                render: (row) => (
                    <CustomAvatar
                        fullName={row.fullName}
                        image={row.image}
                        email="abce@gmail.com"
                    />
                ),
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
                            border: "1px solid #104774",
                            padding: "7px 10px",
                            borderRadius: "6px",
                            color: "#104774",
                        }}
                    >
                        {row.resident}
                    </Typography>
                ),
            },
            {
                field: "bikeRegistrationCity",
                headerName: "Bike Registration City",
                align: "left",
            },
            {
                field: "workingCity",
                headerName: "Working City",
                align: "left",
            },
            {
                field: "bikeNo",
                headerName: "Bike No.",
                align: "left",
            },

            {
                field: "drivingLicense",
                headerName: "DRIVING LICENSE",
                align: "left",
            },
            {
                field: "foodPermitNumber",
                headerName: "Food Permit Number",
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
                            backgroundColor: "#80839029",
                            padding: "4px 10px",
                            borderRadius: "3px",
                            color: "#2F2B3DE5",
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
                        onMenuItemClick={(item) => handleActionMenu(item)}
                    />
                ),
            },
        ]
    }, [])
    return (
        <CompanyTableModal open={open} onClose={onClose}>

            <Box sx={{}}>
                <TableFilters filters={tableFiltersData} heading={null} bottomBorder={false} />
                <CustomTableExportRow isBtnAdd={false} isExportBtn={false} isActionMenu={false} />
                <CustomTable
                    data={foodPermitDeductionTableData}
                    columns={columns}
                    isSelectedOption={false}
                    headTextTransform="upperCase"
                    isFiltered
                />
                <TablePagination />
            </Box>

        </CompanyTableModal>
    )
}

export default FoodPermitModal
