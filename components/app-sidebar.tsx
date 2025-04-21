"use client";

import * as React from "react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";
// import { NavUser } from "@/components/nav-user";
import { data } from "@/constants";

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center justify-center h-16">
        <Image
          src="/logo-text.svg"
          alt="Full Logo"
          width={150}
          height={50}
          priority
        />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}

      <SidebarRail />
    </Sidebar>
  );
}
