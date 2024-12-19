"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { ChevronDown, Check, X } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import { Separator } from "@/components/ui/separator";

function CompanyInfo({setTabs,setListing}) {
  return (
    <div className = 'max-h-[80vh] overflow-auto scrollbar ' id="scrollbar2">
      <div className="flex flex-col items-start justify-start gap-5">
        <div className="bg-[#E9EAEC] cursor-pointer w-[100px] h-[100px] border-[#C9C8CC] border-[1px] flex flex-row items-center justify-center rounded-[10px]">
          <img src="/camera.png" className="w-[35px] h-[35px]" alt="" />
        </div>
        {/* <Button className="bg-[#104774] hover:bg-[#4080b4] text-white flex flex-row items-center gap-2">
          Upload Logo <Upload />{" "}
        </Button> */}
      </div>

      <div className="mt-[40px] flex flex-col gap-[20px]">
        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            Company abbreviation <span className="text-red-500"> *</span>
          </Label>
          <Input
            className=" border-[1px] border-[#2F2B3D40] rounded-[6px] max-w-[75px]"
            placeholder="Ab"
          />
        </div>
        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            Company Name <span className="text-red-500"> *</span>
          </Label>
          <Input
            className=" border-[1px] border-[#2F2B3D40] rounded-[6px] w-full"
            placeholder="Al Busayra"
          />
        </div>
        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            industry <span className="text-red-500"> *</span>
          </Label>
          <Select className="border-[1px] border-[#2F2B3D40] rounded-[6px] w-full">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            Corporate Website <span className="text-gray-300">(Optional)</span>
          </Label>
          <Input
            className=" border-[1px] border-[#2F2B3D40] rounded-[6px] w-full"
            placeholder="www.al-busayra.com"
          />
        </div>
        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            Company phone number <span className="text-red-500">*</span>
          </Label>
          <div className="border-[1px] flex flex-row items-center border-[#2F2B3D40] rounded-[6px] w-full ">
            <div className="flex flex-row items-center gap-2 px-2">
              +971 <ChevronDown className="text-[10px]" size={10} />
            </div>
            <div className="h-full w-[1px] bg-[#2F2B3D40]"></div>
            <Input
              className="w-full p-2 !outline-white"
              style={{ outline: "none" }}
              placeholder="123 456 7890"
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            Buisness Address <span className="text-red-500"> *</span>
          </Label>
          <Select className="border-[1px] border-[#2F2B3D40] rounded-[6px] w-full">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                Office no N12, first floor khansaheb G9, building al majaz
                sharjha
              </SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            County <span className="text-red-500"> *</span>
          </Label>
          <Select className="border-[1px] border-[#2F2B3D40] rounded-[6px] w-full">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">United Arab Emirates</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            State/Province <span className="text-red-500"> *</span>
          </Label>
          <Select className="border-[1px] border-[#2F2B3D40] rounded-[6px] w-full">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Sharjah</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            City <span className="text-red-500"> *</span>
          </Label>
          <Select className="border-[1px] border-[#2F2B3D40] rounded-[6px] w-full">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Sharjah</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Separator className = 'my-5 mt-10'/>
      <div className="flex flex-row items-center justify-between mt-5">
      
        <Button variant="outlined" className="flex flex-row items-center border-[1px] border-[#FF4C51] text-[#FF4C51] ">
          <div className="bg-[#FF4C51] p-[2px]  rounded-full">
            <X className="text-white" />
            
          </div>
          Cancel
        </Button>
        <Button onClick = {()=> {setTabs('contact');setListing(true)}}>
          Next
          <Check className="text-white" />
        </Button>
      </div>
    </div>
  );
}

export default CompanyInfo;
