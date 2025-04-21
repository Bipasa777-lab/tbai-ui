"use client"

import * as React from "react"
import {
    ArrowDown,
    ArrowUp,
    Bell,
    Copy,
    CornerUpLeft,
    CornerUpRight,
    FileText,
    GalleryVerticalEnd,
    LineChart,
    Link,
    MoreHorizontal,
    Settings2,
    Star,
    Trash,
    Trash2,
    BellIcon,
    User,
    MoonIcon,
    Phone,
    Scale,
    EarthLockIcon,
    KeyRoundIcon,
    LogOutIcon
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = [
    [
        {
            label: "Profile",
            icon: User,
        },
        {
            label: "Notification",
            icon: Bell,
        },
    ],
    [
        {
            label: "Change Theme",
            icon: MoonIcon,
        },
        {
            label: "Contact Us",
            icon: Phone,
        },
    ],
    [
        {
            label: "Privacy policy ",
            icon: EarthLockIcon,
        },
        {
            label: "Terms & Cond.",
            icon: Scale,
        },
    ],
    [
        {
            label: "Change password",
            icon: KeyRoundIcon,
        },
        {
            label: "Log out",
            icon: LogOutIcon,
        },
    ],
]

export function NavActions() {
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        setIsOpen(true)
    }, [])

    return (
        <div className="flex items-center gap-4 text-sm">
            <Button variant="ghost" size="icon" className="h-7 w-7 cursor-pointer">
                <BellIcon />
            </Button>
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 data-[state=open]:bg-accent cursor-pointer"
                    >
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-56 overflow-hidden rounded-lg p-0"
                    align="end"
                >
                    <Sidebar collapsible="none" className="bg-transparent">
                        <SidebarContent>
                            {data.map((group, index) => (
                                <SidebarGroup key={index} className="border-b last:border-none">
                                    <SidebarGroupContent className="gap-0">
                                        <SidebarMenu>
                                            {group.map((item, index) => (
                                                <SidebarMenuItem key={index}>
                                                    <SidebarMenuButton className="cursor-pointer">
                                                        <item.icon /> <span>{item.label}</span>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            ))}
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </SidebarGroup>
                            ))}
                        </SidebarContent>
                    </Sidebar>
                </PopoverContent>
            </Popover>
        </div>
    )
}
