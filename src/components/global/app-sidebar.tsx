"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { SidebarOpen } from "lucide-react";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className=" py-2 ">
        <SidebarMenu>
          <SidebarMenuItem className=" border-b py-2 w-full flex justify-between items-center gap-x-1">
            <SidebarMenuButton
              asChild
              variant={"outline"}
              className="  group-data-[collapsible=icon]:hidden px-3 py-3 border rounded-sm !border-accent-foreground/0 bg-accent hover:bg-gradient-to-t active:scale-103 flex justify-center items-center "
            >
              <Link href={"/"}>
                <Image src={"/code.svg"} alt="logo" width={20} height={20} />
                <h1 className=" text-xl text-center">Helix-AI</h1>
              </Link>
            </SidebarMenuButton>
            <Button
              className=" size-8"
              onClick={() => toggleSidebar()}
              size={"icon"}
              variant={"ghost"}
            >
              <SidebarOpen />
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="  group-data-[collapsible=icon]:hidden">
        <SidebarGroup />
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuButton className=" px-3 py-3 w-full border-b rounded-sm !border-accent-foreground/5 bg-none pointer-events-none">
              Your previous chat
            </SidebarMenuButton>
            <SidebarMenuItem className="px-2">
              <SidebarMenuButton className=" border border-accent hover:border bg-accent-foreground/5 shadow-2xs hover:border-accent-foreground/10">
                <p>hi</p>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarContent className="  group-data-[collapsible=icon]:hidden border p-2 rounded-sm bg-accent">
          Hi
        </SidebarContent>
      </SidebarFooter>
    </Sidebar>
  );
}
