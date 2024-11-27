import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

function layout({children}) {
  return (
    <SidebarProvider>
        <AppSidebar/>
        <main className = 'bg-[#23567F] p-2 w-full h-[100vh]'>
          <div className = ' w-full h-full bg-[#F8F7FA] rounded-[30px] p-[25px] overflow-auto'> {children}</div>
        </main>
      </SidebarProvider>
  )
}

export default layout