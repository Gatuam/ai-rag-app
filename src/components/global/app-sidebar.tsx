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
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className=" py-2">
        <SidebarMenu>
          <SidebarMenuItem className=" border-b py-2 w-full">
            <Button
              asChild
              variant={"outline"}
              className=" px-3 py-3 w-full border rounded-sm !border-accent-foreground/5 bg-gradient-to-b from-chart-2/30 to-accent hover:bg-gradient-to-t active:scale-103 "
            >
              <Link href={"/"}>
                <Image src={"/code.svg"} alt="logo" width={20} height={20} />
                <h1 className=" text-xl text-center">Helix-AI</h1>
              </Link>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem className="px-2">
              <Button
                variant={"ghost"}
                className=" px-3 py-3 w-full border-b rounded-sm !border-accent-foreground/5"
              >
                Your previous chat
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
