"use client";
import React from "react";
import { Button } from "../ui/button";
import { LucideArrowDownRightFromSquare, SidebarOpen } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { ModeToggle } from "../global/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Nav = () => {
  const isMoble = useIsMobile();
  const { toggleSidebar } = useSidebar();
  return (
    <div className=" relative w-full px-8 bg-background  h-15 flex items-center ">
      <div className=" max-w-5xl w-full mx-auto flex justify-between items-center px-5 border-b-[1px] border-accent-foreground/10 py-2">
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
          <div>
            <ModeToggle />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"ghost"}
                size={"sm"}
                className=" h-7 min-w-18 !ring-0 rounded-sm bg-accent-foreground/5"
              >
                <LucideArrowDownRightFromSquare className=" size-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Nav;
