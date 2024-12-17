import React from "react";

const userData = {
    Name: "Zaheer Abbas",
    Email_Address: "zaheer@albusayradelivery.com",
    Website: "www.al-busayra.com",
    Phone_Number: "+971 123 456 7890",
    Industry: "Delivery Services",
    Country: "United Arab Emirates",
    "State/Province": "Dubai",
    City: "Dubari",
    Locations: "Dubai, Sharjah, Ajman",
    Business_Address: "Office no N12, first floor  G9, building al majaz sharjha",
    Status: "Active",
};
const CompanyDetailCard = () => {
    return (
        <div class="bg-[#062A47] rounded-[25px] h-full">
            <div className="flex flex-col gap-2 p-[25px]">
                <div className="w-[66px] h-[66px] rounded-full">
                    <img src="/icon1.png" alt="" />
                </div>
                <div className="text-[16px] font-semibold leading-[22px] text-white">
                    AL-BUSAYRA
                </div>
            </div>

            <div className="border-y-[1px] ">
                {Object.entries(userData).map(([key, value]) => (
                    <div
                        key={key}
                        className="flex flex-row w-full justify-between border-b"
                    >
                        <div className=" py-[21px] px-[24px] text-[#FFFFFFB2] text-[13px] font-medium leading-[18px]">
                            {key}
                        </div>
                        <div
                            className={` py-[21px] px-[24px] text-[#FFFFFFE5] text-[13px] font-medium leading-[18px] ${key === ""
                                } `}
                        >
                            {value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyDetailCard;
