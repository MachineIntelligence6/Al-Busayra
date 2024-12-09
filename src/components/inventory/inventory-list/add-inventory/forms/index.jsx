import { Box } from "@mui/material";
import React from "react";
import FormTab from "./FormTab";
import { inventoryFormTab } from "@/utils/hard-data/inventoryFormTab";
import CustomButton from "@/components/Shared-components/CustomButton";
import { ArrowBack, Close } from "@mui/icons-material";
import { Backpack, Check, CircleX } from "lucide-react";
import BikeInfoForm from "./BikeInfoForm";
import BikeMulkiyaForm from "./BikeMulkiyaForm";
import BikeInsuranceForm from "./BikeInsuranceForm";
import BikeContract from "./BikeContract";
import BikeFoodPermitForm from "./BikeFoodPermitForm";
import OtherDetailsForm from "./OtherDetailsForm";

const AddInventorForm = ({ formtabs, onClickTab, selectedTab }) => {
    console.log(selectedTab)

    const handleNextClick = () => {
        const index = formtabs.findLastIndex(item => item.isActive);
        const nextTab = formtabs.at(index + 1)
        onClickTab(nextTab)
    }
    const handleBackClick = () => {
        const index = formtabs.findLastIndex(item => item.isActive);
        const nextTab = formtabs.at(index - 1)
        onClickTab(nextTab)
    }

    return (
        <Box>
            <Box component="div" sx={{ display: "flex", gap: 2, borderBottom: "1px solid #2F2B3D40", pb: 2, pt: 4 }}>
                {formtabs?.length &&
                    formtabs.map((tab) => <FormTab key={tab.id} tab={tab} onClickTab={onClickTab} />)}
            </Box>
            {/* *****************************(Forms view)***************************************************************************************** */}
            <Box sx={{ width: "100%", my: 5 }}>

                {formtabs?.map(item => {
                    return (
                        <>
                            {item.isActive && item.text === "Bike Info" && <BikeInfoForm />}
                            {item.isActive && item.text === "Bike Mulikya" && <BikeMulkiyaForm />}
                            {item.isActive && item.text === "Bike Insurance" && <BikeInsuranceForm />}
                            {item.isActive && item.text === "Bike Contract" && <BikeContract />}
                            {item.isActive && item.text === "Bike Food Permit" && <BikeFoodPermitForm />}
                            {item.isActive && item.text === "Other Details" && <OtherDetailsForm />}
                        </>
                    )
                })}
            </Box>
            {/* *************************************************(Actions)************************************************************************************ */}

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', borderTop: "1px solid #2F2B3D40", pt: 2, pb: 4 }}>
                <CustomButton variant="outlined" bgColor="danger" startIcon={<CircleX size={20} />}>Cancel</CustomButton>
                <Box component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
                    {selectedTab?.text !== "Bike Info" && <CustomButton startIcon={<ArrowBack size={20} />} bgColor="muted" onClick={handleBackClick}>Back</CustomButton>}
                    <CustomButton endIcon={<Check size={20} />} onClick={handleNextClick} disabled={Boolean(selectedTab?.text === "Other Details")}>Next</CustomButton>
                </Box>
            </Box>


        </Box >
    );
};

export default AddInventorForm;
