import Navbar from "@/components/_home/components/nav";
import Nav from "@/components/chat/nav";
import { AppSidebar } from "@/components/global/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className=" w-full h-screen flex flex-col gap-y-3 bg-gradient-to-b from-accent/5 to-chart-2/1">
          <Nav />
          <main className="flex-1 flex-col h-full w-full mx-auto">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </>
  );
};

export default layout;
