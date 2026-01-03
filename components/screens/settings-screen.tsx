"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Bell, Lock, Globe, HelpCircle, Moon, Eye } from "lucide-react"
import { useState } from "react"

export default function SettingsScreen({ onNavigate }: any) {
  const [notifications, setNotifications] = useState({
    eventReminders: true,
    newReviews: true,
    messages: true,
    promotions: false,
  })

  const [preferences, setPreferences] = useState({
    darkMode: false,
    soundEnabled: true,
    privateProfile: false,
  })

  const toggleNotification = (key: string) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const togglePreference = (key: string) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white flex items-center gap-3">
        <button onClick={() => onNavigate("profile")}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold">Settings</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Notifications Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Notifications</h2>
          </div>
          <div className="space-y-3">
            <Card className="p-4 flex items-center justify-between">
              <span className="font-semibold text-foreground">Event Reminders</span>
              <button
                onClick={() => toggleNotification("eventReminders")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  notifications.eventReminders ? "bg-primary" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.eventReminders ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </Card>
            <Card className="p-4 flex items-center justify-between">
              <span className="font-semibold text-foreground">New Reviews</span>
              <button
                onClick={() => toggleNotification("newReviews")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  notifications.newReviews ? "bg-primary" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.newReviews ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </Card>
            <Card className="p-4 flex items-center justify-between">
              <span className="font-semibold text-foreground">Messages</span>
              <button
                onClick={() => toggleNotification("messages")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  notifications.messages ? "bg-primary" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.messages ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </Card>
            <Card className="p-4 flex items-center justify-between">
              <span className="font-semibold text-foreground">Promotions</span>
              <button
                onClick={() => toggleNotification("promotions")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  notifications.promotions ? "bg-primary" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.promotions ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </Card>
          </div>
        </div>

        {/* Privacy & Security Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Lock className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Privacy & Security</h2>
          </div>
          <div className="space-y-3">
            <Card className="p-4 flex items-center justify-between">
              <span className="font-semibold text-foreground">Private Profile</span>
              <button
                onClick={() => togglePreference("privateProfile")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  preferences.privateProfile ? "bg-primary" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    preferences.privateProfile ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </Card>
            <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
              <Lock className="h-4 w-4" />
              Change Password
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
              <Globe className="h-4 w-4" />
              Manage Blocked Users
            </Button>
          </div>
        </div>

        {/* Preferences Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Moon className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Preferences</h2>
          </div>
          <div className="space-y-3">
            <Card className="p-4 flex items-center justify-between">
              <span className="font-semibold text-foreground">Dark Mode</span>
              <button
                onClick={() => togglePreference("darkMode")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  preferences.darkMode ? "bg-primary" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    preferences.darkMode ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </Card>
            <Card className="p-4 flex items-center justify-between">
              <span className="font-semibold text-foreground">Sound Effects</span>
              <button
                onClick={() => togglePreference("soundEnabled")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  preferences.soundEnabled ? "bg-primary" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    preferences.soundEnabled ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </Card>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Support</h2>
          </div>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
              <HelpCircle className="h-4 w-4" />
              Help & FAQ
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
              <Globe className="h-4 w-4" />
              Contact Support
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
              <Eye className="h-4 w-4" />
              Privacy Policy
            </Button>
          </div>
        </div>

        {/* App Info */}
        <Card className="p-4 text-center">
          <p className="text-sm text-muted-foreground">GoOutside App</p>
          <p className="text-sm text-muted-foreground">Version 1.0.0</p>
        </Card>
      </div>
    </div>
  )
}
