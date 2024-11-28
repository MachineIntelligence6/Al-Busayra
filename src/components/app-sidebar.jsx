'use client'
import * as React from "react";
import { Ellipsis, GalleryVerticalEnd, Minus, Plus, ChevronRight, ChevronDown } from "lucide-react";


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
      url: "/campaigns",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: false,
        },
        {
          title: "Rendering",
          url: "#",
        },
        {
          title: "Caching",
          url: "#",
        },
        {
          title: "Styling",
          url: "#",
        },
        {
          title: "Optimizing",
          url: "#",
        },
        {
          title: "Configuring",
          url: "#",
        },
        {
          title: "Testing",
          url: "#",
        },
        {
          title: "Authentication",
          url: "#",
        },
        {
          title: "Deploying",
          url: "#",
        },
        {
          title: "Upgrading",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "Applicants",
      img: '/sidebarIcons/users.png',
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true,
        },
        {
          title: "Rendering",
          url: "#",
        },
        {
          title: "Caching",
          url: "#",
        },
        {
          title: "Styling",
          url: "#",
        },
        {
          title: "Optimizing",
          url: "#",
        },
        {
          title: "Configuring",
          url: "#",
        },
        {
          title: "Testing",
          url: "#",
        },
        {
          title: "Authentication",
          url: "#",
        },
        {
          title: "Deploying",
          url: "#",
        },
        {
          title: "Upgrading",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "Employees",
      img: '/sidebarIcons/employee.png',
      url: "#",
      items: [
        {
          title: "Components",
          url: "#",
        },
        {
          title: "File Conventions",
          url: "#",
        },
        {
          title: "Functions",
          url: "#",
        },
        {
          title: "next.config.js Options",
          url: "#",
        },
        {
          title: "CLI",
          url: "#",
        },
        {
          title: "Edge Runtime",
          url: "#",
        },
      ],
    },
    {
      title: "Inventory",
      img: '/sidebarIcons/inventory.png',
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Fast Refresh",
          url: "#",
        },
        {
          title: "Next.js Compiler",
          url: "#",
        },
        {
          title: "Supported Browsers",
          url: "#",
        },
        {
          title: "Turbopack",
          url: "#",
        },
      ],
    },
    {
      title: "Corporate",
      img: '/sidebarIcons/corporate.png',
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
    {
      title: "Users",
      img: '/sidebarIcons/users.png',
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  const pathName = usePathname();
  return (
    <Sidebar {...props} className="border-[#23567F]">
      <SidebarHeader className="bg-[#23567F]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex ">
                  <img src="/logowhite.png" className="w-full h-full" />
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator />
      <SidebarContent className="bg-[#23567F]">
        <SidebarGroup>
          <SidebarMenuButton className='text-white' isActive={pathName === '/companies'}>
            Companies
          </SidebarMenuButton>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="text-white">
                      <img src={item?.img} />
                      {item.title}{" "}
                      <ChevronDown className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <ChevronRight className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                            >
                              <a href={item.url} className="text-white">
                                {item.title}
                              </a>
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
          <SidebarMenuButton className='text-white' isActive={pathName === '/companies'}>
            Configuration
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
