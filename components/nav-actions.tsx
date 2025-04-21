"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { NavActionData as data } from "@/constants"

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
import { BellIcon } from "lucide-react"

export function NavActions() {
    const [isOpen, setIsOpen] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        setIsOpen(true)
    }, [])

    const handleAction = (item: { url?: string }) => {
        if (item.url) {
            router.push(`/${item.url}`)
            setIsOpen(false)
        }
    }

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
                            {data.map((group, groupIndex) => (
                                <SidebarGroup key={groupIndex} className="border-b last:border-none">
                                    <SidebarGroupContent className="gap-0">
                                        <SidebarMenu>
                                            {group.map((item, itemIndex) => (
                                                <SidebarMenuItem key={itemIndex}>
                                                    <SidebarMenuButton
                                                        className="cursor-pointer"
                                                        onClick={() => handleAction(item)}
                                                    >
                                                        <item.icon className="mr-2 h-4 w-4" />
                                                        <span>{item.label}</span>
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
