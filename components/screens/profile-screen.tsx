"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Settings, Bookmark, Ticket, MessageCircle, Edit2, Share2 } from "lucide-react"
import { useState } from "react"

export default function ProfileScreen({ onNavigate }: any) {
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white flex items-center justify-between">
        <button onClick={() => onNavigate("home")}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold">Profile</h1>
        <button onClick={() => onNavigate("settings")}>
          <Settings className="h-6 w-6" />
        </button>
      </div>

      {/* Profile Info */}
      <div className="p-4">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
            👤
          </div>
          <h2 className="text-2xl font-bold text-foreground">Ama Osei</h2>
          <p className="text-muted-foreground">@amaosei</p>
          <p className="text-sm text-muted-foreground mt-1">Accra, Ghana</p>

          <div className="flex gap-2 justify-center mt-4">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className="gap-2"
            >
              <Edit2 className="h-4 w-4" />
              Edit Profile
            </Button>
            <Button size="sm" variant="outline" className="gap-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-muted-foreground">Events Attended</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">8</p>
            <p className="text-xs text-muted-foreground">Reviews Posted</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">4.8</p>
            <p className="text-xs text-muted-foreground">Rating</p>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-3 px-2 font-semibold transition-colors ${
              activeTab === "overview" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`pb-3 px-2 font-semibold transition-colors ${
              activeTab === "activity" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
            }`}
          >
            Activity
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-4 bg-card rounded-xl hover:bg-muted transition-colors">
              <Bookmark className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Saved Events</span>
              <span className="ml-auto text-muted-foreground">24</span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 bg-card rounded-xl hover:bg-muted transition-colors">
              <Ticket className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">My Tickets</span>
              <span className="ml-auto text-muted-foreground">5</span>
            </button>
            <button className="w-full flex items-center gap-3 p-4 bg-card rounded-xl hover:bg-muted transition-colors">
              <MessageCircle className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">My Reviews</span>
              <span className="ml-auto text-muted-foreground">8</span>
            </button>

            {/* Payment Methods */}
            <div className="mt-8">
              <h3 className="font-bold text-foreground mb-4">Payment Methods</h3>
              <Card className="p-4 mb-3">
                <p className="font-semibold text-foreground">MTN Mobile Money</p>
                <p className="text-sm text-muted-foreground">0541234567</p>
              </Card>
              <Card className="p-4">
                <p className="font-semibold text-foreground">Visa Card</p>
                <p className="text-sm text-muted-foreground">•••• •••• •••• 4242</p>
              </Card>
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === "activity" && (
          <div className="space-y-4">
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  ✓
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Attended Sunset Brunch at Beach</p>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold">
                  ★
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Left a 5-star review</p>
                  <p className="text-sm text-muted-foreground">Jazz Night Performance</p>
                  <p className="text-sm text-muted-foreground">1 week ago</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  ♥
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Saved Art Gallery Exhibition</p>
                  <p className="text-sm text-muted-foreground">2 weeks ago</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full mt-8 border-destructive text-destructive hover:bg-destructive/5 bg-transparent"
        >
          Log Out
        </Button>
      </div>
    </div>
  )
}
