"use client";
import { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import DynamicBreadcrumb from "@/components/Shared-components/BreadCrumb";
import { usePathname } from "next/navigation";
import UserTableWrapper from "@/components/users/UserTableWrapper";
import UserCard from "@/components/users/UserCard";
import { userColoredCardData } from "@/utils/user-data";
// import AddUserForm from '@/components/users/AddUserForm';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [isBtnShow, setIsBtnShow] = useState(false);
  const [isChallan, setIsChallan] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const pathname = usePathname();

  const handleClick = () => {
    router.push("/users/roles-template/add-new-roles");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    console.log("cl");
  };

  const onChange = (e) => {
    setSelectedValue(e.target.value);
    console.log("cl");
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Box sx={{ px: 2 }}>
        <DynamicBreadcrumb />
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginY: "1rem",
        }}
      >
        {userColoredCardData?.map((card, index) => (
          <UserCard
            key={index}
            bgColor={card.bgColor}
            icon={card.icon}
            totalUsers={card.totalUsers}
            cardName={card.cardName}
          />
        ))}
      </Box>
      <Typography variant="body2" sx={{ fontSize: "18px", fontWeight: "500", color:"#4B465C", mt: 3  }}>
        Total users with their roles
      </Typography>
      <Divider sx={{ my: 2, }} />
      <Box component="div">
        <UserTableWrapper handleOpenModal={handleOpenModal} rowsPerPage={rowsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} selectedValue={selectedValue}
          onChange={onChange} isActive={isActive}/>
      </Box>
    </>
  );
};

export default Page;
