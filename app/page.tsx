"use client"

import { useState } from "react"
import OnboardingScreen from "@/components/screens/onboarding-screen"
import SignupScreen from "@/components/screens/signup-screen"
import LoginScreen from "@/components/screens/login-screen"
import HomeScreen from "@/components/screens/home-screen"
import EventDetailScreen from "@/components/screens/event-detail-screen"
import AIPlanner from "@/components/screens/ai-planner-screen"
import CommunityScreen from "@/components/screens/community-screen"
import ProfileScreen from "@/components/screens/profile-screen"
import SettingsScreen from "@/components/screens/settings-screen"
import OrganizerPortal from "@/components/screens/organizer-portal"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState("onboarding")
  const [selectedEvent, setSelectedEvent] = useState(null)

  console.log("[v0] Home page rendered, currentScreen:", currentScreen)

  const handleNavigate = (screen: string, event?: any) => {
    console.log("[v0] Navigating to:", screen)
    setCurrentScreen(screen)
    if (event) setSelectedEvent(event)
  }

  return (
    <div className="min-h-screen bg-background">
      {currentScreen === "onboarding" && <OnboardingScreen onNavigate={handleNavigate} />}
      {!currentScreen && (
        <div className="min-h-screen flex items-center justify-center bg-primary text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">GoOutside</h1>
            <p className="text-xl">Loading...</p>
          </div>
        </div>
      )}
      {currentScreen === "signup" && <SignupScreen onNavigate={handleNavigate} />}
      {currentScreen === "login" && <LoginScreen onNavigate={handleNavigate} />}
      {currentScreen === "home" && <HomeScreen onNavigate={handleNavigate} />}
      {currentScreen === "event-detail" && selectedEvent && (
        <EventDetailScreen event={selectedEvent} onNavigate={handleNavigate} />
      )}
      {currentScreen === "ai-planner" && <AIPlanner onNavigate={handleNavigate} />}
      {currentScreen === "community" && <CommunityScreen onNavigate={handleNavigate} />}
      {currentScreen === "profile" && <ProfileScreen onNavigate={handleNavigate} />}
      {currentScreen === "settings" && <SettingsScreen onNavigate={handleNavigate} />}
      {currentScreen === "organizer" && <OrganizerPortal onNavigate={handleNavigate} />}
    </div>
  )
}
