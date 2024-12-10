"use client";
import {useEffect, useState} from 'react';
import DynamicBreadcrumb from '@/components/Shared-components/BreadCrumb';
import { Box, Divider } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { usePathname } from 'next/navigation';
import RolesTemplateListTableWrapper from '@/components/roles-template/RolesTemplateListTableWrapper';

const Page = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isBtnShow, setIsBtnShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const pathname = usePathname();
  
    useEffect(()=> {
      if (pathname === "/challans/traffic") {
        setIsBtnShow(true);
        setIsChallan(true);
      }
        },[pathname])

    const onChange = (e) => {
        setSelectedValue(e.target.value);
      console.log("cl");
    }

    return (
        <>
        <Box sx={{ px: 2 }}>
        <DynamicBreadcrumb  btnName = "Upload" isBtnShow={isBtnShow} icon={<FileUploadIcon/>} />
      </Box>
      <Divider sx={{ mt: 2 }} />
        <Box component="div">
          <RolesTemplateListTableWrapper rowsPerPage={rowsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}   selectedValue={selectedValue}
          onChange={onChange}/>
        </Box>
        </>
    )
}

export default Page;
