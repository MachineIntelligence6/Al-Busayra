import { Box } from '@mui/material'
import React, { useMemo, useState } from 'react'
import TableFilters from '../Shared-components/Table-components/TableFilters'
import TableExportRow from '../Shared-components/Table-components/TableExportRow'
import TablePagination from '../Shared-components/Table-components/TablePagination'
import Scrollbars from 'react-custom-scrollbars'
import CustomTable from '../Shared-components/Table-components/CustomTable'
import { companyTableData } from '@/utils/campaigns.data'
import CustomAvatar from '../Shared-components/CustomAvatar'
import ActionMenu from '../Shared-components/ActionMenu'
import AddUserModal from './AddUserModal'
import { useRouter } from 'next/navigation'

const actionMenu = [
    { label: "View Details", action: "view" },
    { label: "Edit Details", action: "edit" },
];
const CompanyTableWrapper = () => {
    const [openUserModal, setOpenUserModal] = useState(false);
    const router = useRouter()


    const handleMenuClick = (action) => {
        if (action === "view") router.push("/users/active-users/view-details");
        if (action === "edit") setOpenUserModal(true)
    }


    const columns = useMemo(() => {
        return [
            { field: "date", headerName: "DATE", align: "left" },
            {
                field: "fullName", headerName: "Full Name", align: "left", render: (row) => (
                    <CustomAvatar
                        image={row.image}
                        email={row.email}
                        fullName={row.fullName}
                    />
                ),
            },
            { field: "residentCountry", headerName: "Country", align: "left" },
            { field: "residentCity", headerName: "City", align: "left" },
            { field: "phoneNumber", headerName: "Phone Number", align: "left" },
            { field: "role", headerName: "Role", align: "left" },
            {
                field: "Action", headerName: "Action", align: "left", render: (row) => (
                    <ActionMenu
                        menuItems={actionMenu}
                        onMenuItemClick={(item) => handleMenuClick(item.action)}
                    />
                ),
            },
        ]
    }, [])
    return (


        <Box sx={{ bgcolor: "white", overflow: "hidden", m: 1.5, borderRadius: 6 }}>
            <TableFilters />
            <TableExportRow btnText='Add User' isBtnAdd={true} handleOpenModal={() => setOpenUserModal(true)} />
            <Box sx={{ height: "100%" }}>
                <Scrollbars style={{ height: 400, width: "100%" }}>
                    <CustomTable
                        columns={columns}
                        data={companyTableData}
                    //   onRowSelect={handleRowSelect}
                    //   handleFilterClick={handleFilterClick}
                    />
                </Scrollbars>
                <TablePagination />
            </Box>
            {openUserModal && <AddUserModal open={openUserModal} onClose={() => setOpenUserModal(false)} />}
        </Box>
    )
}

export default CompanyTableWrapper

