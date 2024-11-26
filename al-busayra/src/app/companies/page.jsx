"use client";
import { useState } from "react";
import { Plus, Upload } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomBreadcrumb from "../Components/sharedComponents/BreadCrum/page";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CompanyInfo from "../Components/dashboardComponents/modalComponents/CompanyInfo";
import ContactInfo from "../Components/dashboardComponents/modalComponents/ContactInfo";
import Locations from "../Components/dashboardComponents/modalComponents/Locations";
import Listings from "../Components/dashboardComponents/modalComponents/Listings";

export default function Page() {
  const [tabs, setTabs] = useState("company");
  const [open,setOpen] = useState(false);
  const [listing,setListing] = useState(false)
  console.log(tabs, "iamtabsnew");
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between">
        <CustomBreadcrumb name = 'Companies' />
        <Button className="bg-[#296291] hover:bg-[#4080b4]">
          <Plus />
          Add Company
        </Button>
      </div>
      <div className = 'py-5'>
      <Separator />
      </div>

     {
      listing ? <div>
        <Listings/>
      </div> : 
      <div className="flex flex-col w-full h-full items-center justify-center gap-10">
        <div className="">
          <img src="/objectsimage.png" className="" />
        </div>
        <div className="flex flex-col items-center gap-[10px] ">
          <h1 className="text-[20px] text-[#104774] font-semibold leading-[28px]">
            No Companies Registered
          </h1>
          <p className="text-[#4B465C] font-normal text-[16px] leading-[28px]">
            Please click the button below to add a new company.
          </p>

          <AlertDialog  className="max-w-[864px] w-full  ">
            <AlertDialogTrigger>
              <Button className="bg-[#296291] hover:bg-[#4080b4]">
                <Plus />
                Add Company
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="max-w-[864px] ">
              <Tabs
                defaultValue="company"
                className="w-full flex flex-col gap-5"
              >
                <TabsList className="flex flex-row items-center justify-between">
                  <TabsTrigger
                    // onClick = {(e)=> setTabs('company')}
                    onValue={(e) => setTabs(e)}
                    value={"company"}
                    className="flex flex-row items-center gap-[12px]"
                  >
                    <div className="bg-[#104774] p-[8px] rounded-md">
                      <img
                        src="/companyinfo.png"
                        className="w-[22px] h-[22px]"
                      />
                    </div>
                    <div className="flex flex-col items-start ">
                      <div className="text-[#2F2B3DE5] text-[15px] font-medium leading-[22px]">
                        Company Info
                      </div>
                      <div className="text-[13px] font-normal leading-[20px] text-[#2F2B3DB2]">
                        Enter your company details
                      </div>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    value={"contact"}
                    onClick={() => setTabs("contact")}
                    className="flex flex-row items-center gap-[12px]"
                  >
                    <div className="bg-[#104774] p-[8px] rounded-md">
                      <img
                        src="/contactInfo.png"
                        className="w-[22px] h-[22px]"
                      />
                    </div>
                    <div className="flex flex-col items-start ">
                      <div className="text-[#2F2B3DE5] text-[15px] font-medium leading-[22px]">
                        Contact Info
                      </div>
                      <div className="text-[13px] font-normal leading-[20px] text-[#2F2B3DB2]">
                        Enter your contact info
                      </div>
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    value={"location"}
                    onClick={() => setTabs("location")}
                    className="flex flex-row items-center gap-[12px]"
                  >
                    <div className="bg-[#104774] p-[8px] rounded-md">
                      <img src="/location.png" className="w-[22px] h-[22px]" />
                    </div>
                    <div className="flex flex-col items-start ">
                      <div className="text-[#2F2B3DE5] text-[15px] font-medium leading-[22px]">
                        Company Locations
                      </div>
                      <div className="text-[13px] font-normal leading-[20px] text-[#2F2B3DB2]">
                        Select your company locations
                      </div>
                    </div>
                  </TabsTrigger>
                </TabsList>
                <Separator />
                <TabsContent value="company">
                  <CompanyInfo setTabs={setTabs} setListing = {setListing}  />
                </TabsContent>
                <TabsContent value="location">
                  <Locations />
                </TabsContent>
                <TabsContent value="contact">
                  <ContactInfo />
                </TabsContent>
              </Tabs>
              {/* <button onClick={()=> setTabs('contact')}>Click me</button> */}
              {/* <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter> */}
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      }


    </div>
  );
}
