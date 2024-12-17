import { Separator } from "@/components/ui/separator";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button";
import { Upload, ChevronDown, Check, X, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function Locations() {
  const router = useRouter()
  return (
    <div>
      <div className='text-[#2F2B3D] text-[14px] font-medium leading-[24px] py-2'>Country : United Arab Emirates</div>
      <Separator />
      <div className='grid grid-cols-4 gap-5 py-5'>
        <div className='flex flex-row items-center space-x-2'>
          <Checkbox id="terms" className='border-[1px]  border-[#2F2B3D66]' />
          <label
            htmlFor="terms"
            className="text-[15px] font-normal text-[#2F2B3DE5] leading-none "
          >
            Abu Dhabi
          </label>
        </div>
        <div className='flex flex-row items-center space-x-2'>
          <Checkbox id="terms" className='border-[1px]  border-[#2F2B3D66]' />
          <label
            htmlFor="terms"
            className="text-[15px] font-normal text-[#2F2B3DE5] leading-none"
          >
            Al Ain
          </label>
        </div>
        <div className='flex flex-row items-center space-x-2'>
          <Checkbox id="terms" className='border-[1px]  border-[#2F2B3D66]' />
          <label
            htmlFor="terms"
            className="text-[15px] font-normal text-[#2F2B3DE5] leading-none"
          >
            Ajman
          </label>
        </div>
        <div className='flex flex-row items-center space-x-2'>
          <Checkbox id="terms" className='border-[1px]  border-[#2F2B3D66]' />
          <label
            htmlFor="terms"
            className="text-[15px] font-normal text-[#2F2B3DE5] leading-none"
          >
            Dubai
          </label>
        </div>
        <div className='flex flex-row items-center space-x-2'>
          <Checkbox id="terms" className='border-[1px]  border-[#2F2B3D66]' />
          <label
            htmlFor="terms"
            className="text-[15px] font-normal text-[#2F2B3DE5] leading-none"
          >
            Fujairah
          </label>
        </div>
        <div className='flex flex-row items-center space-x-2'>
          <Checkbox id="terms" className='border-[1px]  border-[#2F2B3D66]' />
          <label
            htmlFor="terms"
            className="text-[15px] font-normal text-[#2F2B3DE5] leading-none"
          >
            Sharjah
          </label>
        </div>
        <div className='flex flex-row items-center space-x-2'>
          <Checkbox id="terms" className='border-[1px]  border-[#2F2B3D66]' />
          <label
            htmlFor="terms"
            className="text-[15px] font-normal text-[#2F2B3DE5] leading-none"
          >
            Umm Al Quwain
          </label>
        </div>
        <div className='flex flex-row items-center space-x-2'>
          <Checkbox id="terms" className='border-[1px]  border-[#2F2B3D66]' />
          <label
            htmlFor="terms"
            className="text-[15px] font-normal text-[#2F2B3DE5] leading-none"
          >
            Ras Al-Khaimah
          </label>
        </div>

      </div>
      <Separator className='my-5 mt-10' />
      <div className="flex flex-row items-center justify-between mt-5">

        <Button variant="outlined" className="flex flex-row items-center border-[1px] border-[#FF4C51] text-[#FF4C51] ">
          <div className="bg-[#FF4C51] p-[2px]  rounded-full">
            <X className="text-white" />

          </div>
          Cancel
        </Button>
        <div className='flex flex-row items-center gap-5'>
          <Button disabled onClick={() => setTabs('contact')}>
            Back
            <ArrowLeft className="text-white" />
          </Button>
          <Button className='bg-[#104774]' onClick={() => router.push("/admin/companies/users")}>
            Save
            <Check className="text-white" />
          </Button>
        </div>
      </div>
    </div>

  );
}

export default Locations;
