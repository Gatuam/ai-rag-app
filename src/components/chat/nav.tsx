"use client";
import React from "react";
import { Button } from "../ui/button";
import { SidebarOpen } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { ModeToggle } from "../global/mode-toggle";

const Nav = () => {
  const isMoble = useIsMobile();
  const { toggleSidebar } = useSidebar();
  return (
    <div className=" relative w-full px-4 bg-background border-b-[1px] border-accent-foreground/30 h-13 flex items-center ">
      <div className=" max-w-7xl w-full mx-auto flex justify-between items-center px-5">
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
        <div className=" flex w-full h-full justify-between items-center ">
          <div>hi</div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Nav;
