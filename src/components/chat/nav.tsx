"use client";
import React from "react";
import { Button } from "../ui/button";
import { SidebarOpen } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Nav = () => {
  const isMoble = useIsMobile();
  const { toggleSidebar } = useSidebar();
  return (
    <div className=" relative w-full px-4 bg-accent h-13 flex items-center ">
      <div className=" max-w-7xl mx-auto flex justify-start items-center">
        {isMoble && (
          <Button
            className=" absolute left-1"
            onClick={() => toggleSidebar()}
            size={"icon"}
            variant={"ghost"}
          >
            <SidebarOpen />
          </Button>
        )}
        <div>hi</div>
      </div>
    </div>
  );
};

export default Nav;
