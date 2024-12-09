import { Box } from "@mui/material";
import React from "react";
import FormTab from "./FormTab";
import { inventoryFormTab } from "@/utils/hard-data/inventoryFormTab";
import CustomButton from "@/components/Shared-components/CustomButton";
import { Close } from "@mui/icons-material";
import { Check, CircleX } from "lucide-react";
import BikeInfoForm from "./BikeInfoForm";

const AddInventorForm = ({ formtabs, onClickTab, selectedTab }) => {


    const handleNextClick = () => {
        const index = formtabs.findLastIndex(item => item.isActive);
        const nextTab = formtabs.at(index + 1)
        onClickTab(nextTab)
    }

    return (
        <Box>
            <Box component="div" sx={{ display: "flex", gap: 2, borderBottom: "1px solid #2F2B3D40", pb: 2, pt: 4 }}>
                {formtabs?.length &&
                    formtabs.map((tab) => <FormTab tab={tab} onClickTab={onClickTab} />)}
            </Box>
            {/* *****************************(Forms view)***************************************************************************************** */}
            <Box sx={{ width: "100%", height: "400px", mt: 5 }}>

                {formtabs?.map(item => {
                    return (
                        <>
                            {item.isActive && item.text === "Bike Info" && <BikeInfoForm />}
                            {item.isActive && item.text === "Bike Mulikya" && <h1>2</h1>}
                            {item.isActive && item.text === "Bike Insurance" && <h1>3</h1>}
                            {item.isActive && item.text === "Bike Contract" && <h1>4</h1>}
                            {item.isActive && item.text === "Bike Food Permit" && <h1>5</h1>}
                            {item.isActive && item.text === "Other Details" && <h1>6</h1>}
                        </>
                    )
                })}
            </Box>
            {/* *************************************************(Actions)************************************************************************************ */}

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', borderTop: "1px solid #2F2B3D40", pt: 2, pb: 4 }}>
                <CustomButton variant="outlined" bgColor="danger" startIcon={<CircleX size={20} />}>Cancel</CustomButton>
                <CustomButton endIcon={<Check size={20} />} onClick={handleNextClick}>Next</CustomButton>
            </Box>


        </Box >
    );
};

export default AddInventorForm;
