// app/notifications/page.tsx
"use client"

import { useState } from "react"
import { Bell, Check, Clock, Info, Trash2, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"

// Define TypeScript interfaces
interface Notification {
  id: string
  title: string
  description: string
  timestamp: string
  type: "info" | "success" | "warning" | "error"
  isRead: boolean
}

const NotificationsPage = () => {
  // Sample notification data
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Your project was approved",
      description: "Project 'Data Analytics Dashboard' has been approved by the admin.",
      timestamp: "10 minutes ago",
      type: "success",
      isRead: false,
    },
    {
      id: "2",
      title: "New comment on your post",
      description: "John Doe commented on your post 'Machine Learning Pipeline'.",
      timestamp: "30 minutes ago",
      type: "info",
      isRead: false,
    },
    {
      id: "3",
      title: "System maintenance scheduled",
      description: "The system will be down for maintenance on Saturday from 2:00 AM to 4:00 AM.",
      timestamp: "1 hour ago",
      type: "warning",
      isRead: true,
    },
    {
      id: "4",
      title: "Failed to sync data",
      description: "Data synchronization failed. Please check your connection and try again.",
      timestamp: "2 hours ago",
      type: "error",
      isRead: true,
    },
    {
      id: "5",
      title: "API limit reached",
      description: "You've reached 80% of your monthly API call limit.",
      timestamp: "3 hours ago",
      type: "warning",
      isRead: false,
    },
    {
      id: "6",
      title: "Team member joined",
      description: "Sarah Johnson has joined your team.",
      timestamp: "5 hours ago",
      type: "info",
      isRead: true,
    },
    {
      id: "7",
      title: "Payment successful",
      description: "Your subscription has been renewed successfully.",
      timestamp: "6 hours ago",
      type: "success",
      isRead: true,
    },
  ])

  // Filter notifications by read status
  const unreadNotifications = notifications.filter((notification) => !notification.isRead)
  const readNotifications = notifications.filter((notification) => notification.isRead)

  // Mark notification as read
  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    )
    toast(
       "Notification marked as read",
    )
  }

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, isRead: true }))
    )
    toast(
       "All notifications marked as read",
    )
  }

  // Delete notification
  const deleteNotification = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    )
    toast(
       "Notification deleted",
    )
  }

  // Clear all notifications
  const clearAll = () => {
    setNotifications([])
    toast( "All notifications cleared",
    )
  }

  // Get icon by notification type
  const getIconByType = (type: string) => {
    switch (type) {
      case "info":
        return <Info className="w-5 h-5 text-blue-500" />
      case "success":
        return <Check className="w-5 h-5 text-green-500" />
      case "warning":
        return <Info className="w-5 h-5 text-yellow-500" />
      case "error":
        return <X className="w-5 h-5 text-red-500" />
      default:
        return <Bell className="w-5 h-5 text-gray-500" />
    }
  }

  // Get badge by notification type
  const getBadgeByType = (type: string) => {
    switch (type) {
      case "info":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Info</Badge>
      case "success":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Success</Badge>
      case "warning":
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Warning</Badge>
      case "error":
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Error</Badge>
      default:
        return <Badge variant="outline">Default</Badge>
    }
  }

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            Manage your notifications and preferences
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            disabled={notifications.length === 0}
            onClick={markAllAsRead}
          >
            Mark all as read
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notification Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={markAllAsRead}>
                <Check className="mr-2 h-4 w-4" />
                Mark all as read
              </DropdownMenuItem>
              <DropdownMenuItem onClick={clearAll}>
                <Trash2 className="mr-2 h-4 w-4" />
                Clear all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="all">
            All
            <Badge className="ml-2 bg-gray-100 text-gray-900">
              {notifications.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="unread">
            Unread
            <Badge className="ml-2 bg-blue-100 text-blue-900">
              {unreadNotifications.length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="read">
            Read
            <Badge className="ml-2 bg-gray-100 text-gray-900">
              {readNotifications.length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        <Card>
          <CardHeader className="px-4 md:px-6">
            <CardTitle>Notification Center</CardTitle>
            <CardDescription>
              {notifications.length > 0
                ? `You have ${unreadNotifications.length} unread notifications`
                : "No notifications to display"}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <TabsContent value="all" className="m-0">
              <ScrollArea className="h-[500px]">
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <div key={notification.id}>
                      <div
                        className={`flex items-start gap-4 p-4 md:p-6 ${
                          !notification.isRead ? "bg-muted/30" : ""
                        }`}
                      >
                        <div className="mt-1">
                          {getIconByType(notification.type)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{notification.title}</p>
                              {!notification.isRead && (
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                              )}
                            </div>
                            {getBadgeByType(notification.type)}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{notification.timestamp}</span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {!notification.isRead && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => markAsRead(notification.id)}
                              className="h-8 w-8"
                            >
                              <Check className="h-4 w-4" />
                              <span className="sr-only">Mark as read</span>
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteNotification(notification.id)}
                            className="h-8 w-8"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </div>
                      {index < notifications.length - 1 && <Separator />}
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="font-medium text-lg">No notifications</h3>
                    <p className="text-muted-foreground text-center max-w-sm mt-2">
                      You're all caught up! Check back later for new updates.
                    </p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="unread" className="m-0">
              <ScrollArea className="h-[500px]">
                {unreadNotifications.length > 0 ? (
                  unreadNotifications.map((notification, index) => (
                    <div key={notification.id}>
                      <div className="flex items-start gap-4 p-4 md:p-6 bg-muted/30">
                        <div className="mt-1">
                          {getIconByType(notification.type)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{notification.title}</p>
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                              </span>
                            </div>
                            {getBadgeByType(notification.type)}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{notification.timestamp}</span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => markAsRead(notification.id)}
                            className="h-8 w-8"
                          >
                            <Check className="h-4 w-4" />
                            <span className="sr-only">Mark as read</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteNotification(notification.id)}
                            className="h-8 w-8"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </div>
                      {index < unreadNotifications.length - 1 && <Separator />}
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Check className="h-12 w-12 text-green-500 mb-4" />
                    <h3 className="font-medium text-lg">All caught up!</h3>
                    <p className="text-muted-foreground text-center max-w-sm mt-2">
                      You have no unread notifications at this time.
                    </p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="read" className="m-0">
              <ScrollArea className="h-[500px]">
                {readNotifications.length > 0 ? (
                  readNotifications.map((notification, index) => (
                    <div key={notification.id}>
                      <div className="flex items-start gap-4 p-4 md:p-6">
                        <div className="mt-1">
                          {getIconByType(notification.type)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{notification.title}</p>
                            {getBadgeByType(notification.type)}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {notification.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{notification.timestamp}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteNotification(notification.id)}
                          className="h-8 w-8"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                      {index < readNotifications.length - 1 && <Separator />}
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Info className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="font-medium text-lg">No read notifications</h3>
                    <p className="text-muted-foreground text-center max-w-sm mt-2">
                      You haven't read any notifications yet.
                    </p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
          </CardContent>
          <CardFooter className="flex justify-between p-4 md:p-6 border-t">
            <div className="text-sm text-muted-foreground">
              Showing {notifications.length} notifications
            </div>
            <Button variant="outline" size="sm" onClick={clearAll} disabled={notifications.length === 0}>
              Clear all
            </Button>
          </CardFooter>
        </Card>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>
            Configure how you receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Email Notifications</h3>
            <div className="grid gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">System Updates</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified about system maintenance and updates
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Account Activity</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified about login attempts and security alerts
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Team Updates</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified about team membership changes
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Push Notifications</h3>
            <div className="grid gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Task Assignments</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified when you're assigned a new task
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Comments</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified when someone comments on your posts
                  </p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Project Updates</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified about changes to projects you're involved in
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default NotificationsPage