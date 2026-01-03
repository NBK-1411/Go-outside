"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Bell, Heart, MessageCircle, Calendar, AlertCircle } from "lucide-react"

export default function NotificationsScreen({ onNavigate }: any) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "booking",
      icon: Calendar,
      title: "Booking Confirmed",
      description: "Your tickets for Sunset Brunch at Labadi are confirmed",
      timestamp: "2 hours ago",
      read: false,
      color: "primary",
    },
    {
      id: 2,
      type: "review",
      icon: Heart,
      title: "Event Review Reminder",
      description: "Share your experience at Live Jazz Night",
      timestamp: "1 day ago",
      read: false,
      color: "secondary",
    },
    {
      id: 3,
      type: "event",
      icon: Bell,
      title: "Trending Event Near You",
      description: "Art Exhibition Opening is trending in Accra with 4.6 rating",
      timestamp: "2 days ago",
      read: true,
      color: "accent",
    },
    {
      id: 4,
      type: "message",
      icon: MessageCircle,
      title: "New Message",
      description: "Organizer sent you a message about the event",
      timestamp: "3 days ago",
      read: true,
      color: "primary",
    },
    {
      id: 5,
      type: "alert",
      icon: AlertCircle,
      title: "Limited Spots Available",
      description: "Only 5 spots left for Yoga & Wellness Retreat",
      timestamp: "4 days ago",
      read: true,
      color: "secondary",
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white flex items-center gap-3 sticky top-0 z-10">
        <button onClick={() => onNavigate("home")} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold">Notifications</h1>
        {unreadCount > 0 && (
          <div className="ml-auto flex items-center justify-center w-6 h-6 bg-destructive rounded-full text-white text-xs font-bold">
            {unreadCount}
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        {notifications.length > 0 ? (
          notifications.map((notification) => {
            const IconComponent = notification.icon
            const colorClass = colorClasses[notification.color as keyof typeof colorClasses]
            return (
              <Card
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
                className={`p-4 cursor-pointer transition-all ${
                  !notification.read ? "bg-primary/5 border-primary/20" : "hover:bg-muted/50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${colorClass}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-sm">{notification.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
                      </div>
                      {!notification.read && <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1" />}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{notification.timestamp}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteNotification(notification.id)
                    }}
                    className="text-muted-foreground hover:text-foreground text-xl flex-shrink-0"
                  >
                    ×
                  </button>
                </div>
              </Card>
            )
          })
        ) : (
          <div className="text-center py-12">
            <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">No notifications yet</p>
          </div>
        )}
      </div>
    </div>
  )
}
