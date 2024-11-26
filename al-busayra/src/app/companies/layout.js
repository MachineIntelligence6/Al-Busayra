
import { AppSidebar } from "@/components/app-sidebar";
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


export default function Layout({ children }) {
  return (
    <div className="bg-[#23567F] h-[100vh]">
      <SidebarProvider>
        <AppSidebar/>
        <main className = 'bg-[#23567F] p-2 w-full h-[100vh]'>
          <div className = ' w-full h-full bg-[#F8F7FA] rounded-[30px] p-[25px] overflow-auto'> {children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
