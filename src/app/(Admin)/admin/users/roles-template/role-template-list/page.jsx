"use client";
import {useEffect, useState} from 'react';
import DynamicBreadcrumb from '@/components/Shared-components/BreadCrumb';
import { Box, Divider } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RolesTemplateListTableWrapper from '@/components/roles-template/RolesTemplateListTableWrapper';

const Page = () => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");
  const [isRole, setIsRole] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const pathname = usePathname();

    const onChange = (e) => {
        setSelectedValue(e.target.value);
      console.log("cl");
    }

    const AddNewRole = (e) => {
       router.push("/users/roles-template/role-template-list/view-details")
    }

    return (
        <>
        <Box sx={{ px: 2 }}>
        <DynamicBreadcrumb  btnName="Add New Role" icon={<AddOutlinedIcon/>} isRole={isRole} onClick={AddNewRole}/>
      </Box>
      <Divider sx={{ mt: 2 }} />
        <Box component="div">
          <RolesTemplateListTableWrapper rowsPerPage={rowsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} selectedValue={selectedValue}
          onChange={onChange}/>
        </Box>
        </>
    )
}

export default Page;
