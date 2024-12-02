"use client";
import { useState } from "react";
import EmptyScreenView from "../Shared-components/EmptyScreenView";
// import ModalCard from "../Shared-components/ModalCard";
const CompaingEmptyScreen = () => {
    const [showPopup, setShowPopup] = useState(false);
    const onClose = () => {
        setShowPopup(false);
    };
    const handleClick = () => {
        setShowPopup(true);
        console.log(showPopup);
    };
    return (
        <div>
            <EmptyScreenView
                image="/empty-svg/campaign.svg"
                altText="campaign"
                description="Please click the button below to add your new campaign."
                buttonText="Add Campaign"
                onButtonClick={handleClick}
            />
            {/* {showPopup && <ModalCard onClose={onClose} />} */}
        </div>
    );
};
export default CompaingEmptyScreen;