'use client'
import React from "react";
import { EllipsisVertical, MapPin, Mail, Phone } from "lucide-react";
import { Separator, } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

function Listings() {
  const router = useRouter();
  const listings = [
    {
      icon: "/icon1.png",
      name: "Al Busayra",
      industry: "Delivery Services",
      country: "United Arab Emirates",
      email: "info@al-busayradelivery.com",
      phone: "+971 123 456 7890",
      color: "#6F79A8",
    },
    {
      icon: "/icon2.png",
      name: "Al Hamama",
      industry: "Delivery Services",
      country: "United Arab Emirates",
      email: "info@al-busayradelivery.com",
      phone: "+971 123 456 7890",
      color: "#DA7069",
    },
    {
      icon: "/icon3.png",
      name: "Al Busayra",
      industry: "Delivery Services",
      country: "United Arab Emirates",
      email: "info@al-busayradelivery.com",
      phone: "+971 123 456 7890",
      color: "#52AE7E",
    },
  ];
  return (
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {
        listings?.map((element, idx) => {
          return <div key={idx} onClick={() => router.push(`/admin/companies/view?${element?.name}`)} class={`w-full  bg-[${element?.color}] rounded-[25px] `} style={{ backgroundColor: element?.color }}>
            <div className="p-[20px] flex flex-col gap-[10px]">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="w-[60px] h-[60px] rounded-full">
                  <img src="/icon3.png" alt="" />
                </div>
                <div>
                  <EllipsisVertical className="text-white" />
                </div>
              </div>
              <div className="">
                <div className="flex flex-row items-center w-full justify-between">
                  <div className="text-white font-semibold text-[18px] leading-[24px]">Al Busayra</div>
                  <div className="p-1 px-2 bg-[#FFFFFF] rounded-[41px] ">
                    <span className="font-medium text-[14px] leading[22px]">Industry</span>: Delivery Services
                  </div>
                </div>
              </div>
            </div>

            <Separator />
            <div className="p-[25px] flex flex-col gap-[10px] text-[#F2F2F2]">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <MapPin className="text-[#F2F2F2]" />
                  <div>Country</div>
                </div>
                <div>United Arab Emirates</div>
              </div>

              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <Mail className="text-[#F2F2F2]" />
                  <div>Country</div>
                </div>
                <div>United Arab Emirates</div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <Phone className="text-[#F2F2F2]" />
                  Phone Number
                </div>
                <div>+971 123 456 7890</div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  );
}

export default Listings;
