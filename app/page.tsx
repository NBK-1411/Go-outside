"use client"

import { useState } from "react"
import OnboardingScreen from "@/components/screens/onboarding-screen"
import SignupScreen from "@/components/screens/signup-screen"
import LoginScreen from "@/components/screens/login-screen"
import RoleSelectionScreen from "@/components/screens/role-selection-screen"
import PreferenceDiscoveryScreen from "@/components/screens/preference-discovery-screen"
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
  const [userRole, setUserRole] = useState<"customer" | "organizer" | null>(null)

  const handleNavigate = (screen: string, event?: any) => {
    setCurrentScreen(screen)
    if (event) setSelectedEvent(event)
  }

  const handleRoleSelect = (role: "customer" | "organizer") => {
    setUserRole(role)
    handleNavigate(role === "organizer" ? "organizer" : "preferences")
  }

  return (
    <div className="min-h-screen bg-background">
      {currentScreen === "onboarding" && <OnboardingScreen onNavigate={handleNavigate} />}
      {currentScreen === "signup" && <SignupScreen onNavigate={() => handleNavigate("role-selection")} />}
      {currentScreen === "login" && <LoginScreen onNavigate={() => handleNavigate("role-selection")} />}
      {currentScreen === "role-selection" && (
        <RoleSelectionScreen
          onNavigate={(screen: string) => {
            if (screen === "organizer") {
              setUserRole("organizer")
              handleNavigate("organizer")
            } else {
              setUserRole("customer")
              handleNavigate("preferences")
            }
          }}
        />
      )}
      {currentScreen === "preferences" && userRole === "customer" && (
        <PreferenceDiscoveryScreen onNavigate={handleNavigate} />
      )}
      {currentScreen === "home" && userRole === "customer" && <HomeScreen onNavigate={handleNavigate} />}
      {currentScreen === "event-detail" && selectedEvent && userRole === "customer" && (
        <EventDetailScreen event={selectedEvent} onNavigate={handleNavigate} />
      )}
      {currentScreen === "ai-planner" && userRole === "customer" && <AIPlanner onNavigate={handleNavigate} />}
      {currentScreen === "community" && userRole === "customer" && <CommunityScreen onNavigate={handleNavigate} />}
      {currentScreen === "profile" && userRole === "customer" && <ProfileScreen onNavigate={handleNavigate} />}
      {currentScreen === "settings" && <SettingsScreen onNavigate={handleNavigate} />}
      {currentScreen === "organizer" && userRole === "organizer" && <OrganizerPortal onNavigate={handleNavigate} />}
    </div>
  )
}
