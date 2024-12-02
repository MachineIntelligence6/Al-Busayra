


'use client'


// import { AppSidebar } from "@/components/app-sidebar";
// import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


// export default function Layout({ children }) {
//   return (
//     <div className="bg-[#23567F] h-[100vh]">
//       <SidebarProvider>
//         <AppSidebar/>
//         <main className = 'bg-[#23567F] p-2 w-full h-[100vh]'>
//           <div className = ' w-full h-full bg-[#F8F7FA] rounded-[30px] p-[25px] overflow-auto'> {children}</div>
//         </main>
//       </SidebarProvider>
//     </div>
//   );
// }
// import React from 'react'

// function layout() {
//   return (
//     <div>layout</div>
//   )
// }

// export default layout
import * as React from "react";
import { Ellipsis, GalleryVerticalEnd, Minus, Plus, ChevronRight, ChevronDown } from "lucide-react";

import Link from 'next/link'
import { SearchForm } from "@/components/search-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { usePathname } from "next/navigation";


// This is sample data.


const data = {
  navMain: [
    {
      title: "Campaigns",
      img: '/sidebarIcons/campaigns.png',
      url: "/pages/campaigns",
      items: [
        {
          title: "Campaigns List",
          url: "/pages/campaigns/lists",
        },
        {
          title: "Not Qualitfied",
          url: "/pages/campaigns/not-qualified",
        },
      ],
    },
    {
      title: "Applicants",
      img: '/sidebarIcons/users.png',
      url: "/pages/applicants",
      items: [
        {
          title: "Short Listed",
          url: "/pages/applicants/short-listed",
        },
        {
          title: "Final Interview",
          url: "/pages/applicants/final-interview",
        },
        {
          title: "Hold",
          url: "/pages/applicants/hold",
        },
        {
          title: "Not Qualified ",
          url: "/pages/applicants/not-qualified",
        },
      ],
    },
    {
      title: "Employees",
      img: '/sidebarIcons/employee.png',
      url: "/pages/employees",
      items: [
        {
          title: "Incomplete Profile",
          url: "/pages/employees/incomplete-profile",
        },
        {
          title: "Active Employee",
          url: "/pages/employees/active-employee",
        },
        {
          title: "Inactive Employee",
          url: "/pages/employees/inactive-employee",
        },
      ],
    },
    {
      title: "Inventory",
      img: '/sidebarIcons/inventory.png',
      url: "/pages/inventory",
      items: [
        {
          title: "Dashboard",
          url: "/pages/inventory/dashboard",
        },
        {
          title: "Inventory List",
          url: "/pages/inventory/list",
        },
      ],
    },
    {
      title: "Corporate",
      img: '/sidebarIcons/corporate.png',
      url: "/pages/corporate",
      items: [
        {
          title: "Vendors",
          url: "/pages/corporate/vendors",
        },
        {
          title: "Platforms",
          url: "/pages/corporate/platforms",
        },
      ],
    },
    {
      title: "Challans",
      img: '/sidebarIcons/users.png',
      url: "/pages/challans",
      items: [
        {
          title: "Salik",
          url: "/pages/challans/salik",
        },
        {
          title: "Traffic",
          url: "/pages/challans/traffic",
        },
      ],
    },
    {
      title: "Users",
      img: '/sidebarIcons/users.png',
      url: "/pages/users",
      items: [
        {
          title: "Active Users",
          url: "/pages/users/active-users",
        },
        {
          title: "Inactive Users",
          url: "/pages/users/inactive-users",
        },
        {
          title: "Roles Template",
          url: "/pages/users/roles-template",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  const pathName = usePathname();
  return (
    <Sidebar {...props} className="border-[#23567F]">
      <SidebarHeader className="bg-[#23567F] ">
        <SidebarMenu>
          <SidebarMenuItem>
            {/* <SidebarMenuButton size="lg" asChild className = ''> */}
            <Link href="/pages/companies">
              <div className="flex ">
                <img src="/logowhite.png" className="w-full h-full" />
              </div>
            </Link>
            {/* </SidebarMenuButton> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator />
      <SidebarContent className="bg-[#23567F] ">
        <SidebarGroup className=''>
          <SidebarMenuButton
            className='text-white mb-2'
            isActive={(pathName === '/pages/companies' || pathName === '/pages/companies/view')}>
            Companies
          </SidebarMenuButton>
          <SidebarMenu className=''>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}

                className="group/collapsible "
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild className='py-[20px]'>
                    <SidebarMenuButton className="text-white" isActive={pathName === item?.url}>

                      <img src={item?.img} className='hover:invert' />
                      <Link href={item?.url}>
                        {item.title}{" "}
                      </Link>
                      <ChevronDown className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <ChevronRight className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent className='flex justify-start items-start'>
                      <SidebarMenuSub className='bg-[#FFFFFF17] rounded-[4px] p-2 w-full'>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              // isActive={pathName === item.url}
                              className={`hover:bg-[#104774] hover:text-white ${pathName === item.url ? 'bg-[#104774]' : ''}`}
                            >
                              <div>
                                <div className='w-[10px] h-[10px] rounded-full border-[1px] border-white '></div>
                                <Link href={item.url} className="text-white ">
                                  {item.title}
                                </Link>
                              </div>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
          <SidebarMenuButton className='text-white mt-2' isActive={pathName === '/pages/configuration'} >
            <Link href={'/pages/configuration'} > Configuration</Link>
          </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#23567F]">
        <div className='flex flex-col items-center justify-between py-5 space-y-4'>
          <div className='flex flex-row items-center justify-between w-full gap-2'>
            <img src='/bell.png' />
            <div className='bg-[#FF4C51] rounded-md px-2 py-1 text-white font-medium'>5</div>
          </div>
          <div className='flex flex-row items-center justify-between gap-[8px]'>
            <div className='w-[32px] h-[32px] rounded-full bg-[#3BC5FB] text-[14px] flex items-center justify-center text-white'>
              ZA
            </div>
            <div className='flex flex-col'>
              <div className='font-medium text-[12px] leading-[20px] text-white'>Zaheer Abbas</div>
              <div className='font-medium text-[12px] leading-[20px]  text-[#FFFFFF99]'>Al busayra delivery services</div>
            </div>
            <div className='py-[12px] px-[3.8px] rounded-[6px] bg-[#2F2B3D40] '>
              <Ellipsis className="text-white" />
            </div>
          </div>

        </div>
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
