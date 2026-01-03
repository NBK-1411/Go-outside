"use client"

import { Suspense, useState } from "react"
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
import SearchResultsScreen from "@/components/screens/search-results-screen"
import SavedEventsScreen from "@/components/screens/saved-events-screen"
import MyTicketsScreen from "@/components/screens/my-tickets-screen"
import NotificationsScreen from "@/components/screens/notifications-screen"
import EditEventScreen from "@/components/screens/edit-event-screen"

function PageContent({ currentScreen, selectedEvent, userRole, searchQuery, onNavigate, setUserRole }: any) {
  return (
    <div className="min-h-screen bg-background">
      {currentScreen === "onboarding" && <OnboardingScreen onNavigate={onNavigate} />}
      {currentScreen === "signup" && <SignupScreen onNavigate={() => onNavigate("role-selection")} />}
      {currentScreen === "login" && <LoginScreen onNavigate={() => onNavigate("role-selection")} />}
      {currentScreen === "role-selection" && (
        <RoleSelectionScreen
          onNavigate={(screen: string) => {
            if (screen === "organizer") {
              setUserRole("organizer")
              onNavigate("organizer")
            } else {
              setUserRole("customer")
              onNavigate("preferences")
            }
          }}
        />
      )}
      {currentScreen === "preferences" && userRole === "customer" && (
        <PreferenceDiscoveryScreen onNavigate={onNavigate} />
      )}
      {currentScreen === "home" && userRole === "customer" && <HomeScreen onNavigate={onNavigate} />}
      {currentScreen === "event-detail" && selectedEvent && userRole === "customer" && (
        <EventDetailScreen event={selectedEvent} onNavigate={onNavigate} />
      )}
      {currentScreen === "ai-planner" && userRole === "customer" && <AIPlanner onNavigate={onNavigate} />}
      {currentScreen === "community" && userRole === "customer" && <CommunityScreen onNavigate={onNavigate} />}
      {currentScreen === "profile" && userRole === "customer" && <ProfileScreen onNavigate={onNavigate} />}
      {currentScreen === "settings" && <SettingsScreen onNavigate={onNavigate} />}
      {currentScreen === "saved-events" && userRole === "customer" && <SavedEventsScreen onNavigate={onNavigate} />}
      {currentScreen === "my-tickets" && userRole === "customer" && <MyTicketsScreen onNavigate={onNavigate} />}
      {currentScreen === "notifications" && <NotificationsScreen onNavigate={onNavigate} />}
      {currentScreen === "search-results" && userRole === "customer" && (
        <SearchResultsScreen searchQuery={searchQuery} onNavigate={onNavigate} />
      )}
      {currentScreen === "edit-event" && userRole === "organizer" && selectedEvent && (
        <EditEventScreen event={selectedEvent} onNavigate={onNavigate} />
      )}
      {currentScreen === "organizer" && userRole === "organizer" && <OrganizerPortal onNavigate={onNavigate} />}
    </div>
  )
}

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState("onboarding")
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [userRole, setUserRole] = useState<"customer" | "organizer" | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const handleNavigate = (screen: string, event?: any, query?: string) => {
    setCurrentScreen(screen)
    if (event) setSelectedEvent(event)
    if (query) setSearchQuery(query)
  }

  return (
    <Suspense fallback={null}>
      <PageContent
        currentScreen={currentScreen}
        selectedEvent={selectedEvent}
        userRole={userRole}
        searchQuery={searchQuery}
        onNavigate={handleNavigate}
        setUserRole={setUserRole}
      />
    </Suspense>
  )
}
