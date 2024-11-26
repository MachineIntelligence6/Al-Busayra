"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { Upload, ChevronDown, Check, X,ArrowLeft } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import { Separator } from "@/components/ui/separator";


function ContactInfo() {
  return (
    <div className = 'max-h-[80vh] overflow-auto scrollbar ' id="scrollbar2">

      <div className="mt-[40px] flex flex-col gap-[20px]">
        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            Salutation <span className="text-red-500"> *</span>
          </Label>
          <Select className="border-[1px] border-[#2F2B3D40] bg-[#FCFCFC] rounded-[6px] max-w-[75px]">
            <SelectTrigger className="w-[75px]">
              <SelectValue placeholder="Mr" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Mr</SelectItem>
              <SelectItem value="dark">Miss</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            Full Name <span className="text-red-500"> *</span>
          </Label>
          <Input
            className=" border-[1px] border-[#2F2B3D40] rounded-[6px] w-full bg-[#FCFCFC]"
            placeholder="Zaheer"
          />
        </div>
        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            Job Title <span className="text-red-500"> *</span>
          </Label>
          <Input
            className=" border-[1px] border-[#2F2B3D40] rounded-[6px] w-full bg-[#FCFCFC]"
            placeholder="www.al-busayra.com"
          />
        </div>
        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
            Email Address <span className="text-red-500"> *</span>
          </Label>
          <Input
            className=" border-[1px] border-[#2F2B3D40] rounded-[6px] w-full bg-[#FCFCFC]"
            placeholder="www.al-busayra.com"
          />
        </div>
        <div className="flex flex-row items-center gap-[70px]">
          <Label className="min-w-[220px] ">
             Phone number <span className="text-red-500">*</span>
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
      </div>
      <Separator className = 'my-5 mt-10'/>
      <div className="flex flex-row items-center justify-between mt-5">
      
        <Button variant="outlined" className="flex flex-row items-center border-[1px] border-[#FF4C51] text-[#FF4C51] ">
          <div className="bg-[#FF4C51] p-[2px]  rounded-full">
            <X className="text-white" />
            
          </div>
          Cancel
        </Button>
        <div className = 'flex flex-row items-center gap-5'>
        <Button disabled onClick = {()=> setTabs('contact')}>
          Back
          <ArrowLeft className="text-white" />
        </Button>
        <Button className = 'bg-[#104774]' onClick = {()=> setTabs('contact')}>
          Next
          <Check className="text-white" />
        </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo