"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { AdinkraPattern } from "@/components/adinkra-symbols"
import { Briefcase, Users } from "lucide-react"

export default function RoleSelectionScreen({ onNavigate }: any) {
  const [isLoading, setIsLoading] = useState(false)

  const handleRoleSelect = (role: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (role === "organizer") {
        onNavigate("organizer")
      } else {
        onNavigate("preferences")
      }
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header with Adinkra */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20">
              <AdinkraPattern symbol="Adinkrahene" className="w-full h-full" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Welcome to GoOutside</h1>
          <p className="text-lg text-muted-foreground">Choose your path - are you here to discover or to organize?</p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Customer Role */}
          <Card
            onClick={() => handleRoleSelect("customer")}
            className="p-8 cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-primary"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">I'm a Customer</h2>
              <p className="text-muted-foreground mb-6">
                Discover amazing events, experiences, and connect with the community
              </p>
              <div className="space-y-2 text-sm text-muted-foreground text-left w-full">
                <p>✓ Browse events & experiences</p>
                <p>✓ Book tickets easily</p>
                <p>✓ Join the community</p>
                <p>✓ Leave reviews & ratings</p>
              </div>
            </div>
          </Card>

          {/* Organizer Role */}
          <Card
            onClick={() => handleRoleSelect("organizer")}
            className="p-8 cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-accent"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-to-br from-accent to-green-500 mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">I'm an Organizer</h2>
              <p className="text-muted-foreground mb-6">
                Create events, manage bookings, and grow your business with GoOutside
              </p>
              <div className="space-y-2 text-sm text-muted-foreground text-left w-full">
                <p>✓ Create & manage events</p>
                <p>✓ Track earnings & payouts</p>
                <p>✓ Manage bookings</p>
                <p>✓ Access analytics</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Info Section */}
        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="flex gap-4">
            <div className="w-12 h-12 flex-shrink-0">
              <AdinkraPattern symbol="Gye Nyame" className="w-full h-full" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">No be small thing!</h3>
              <p className="text-sm text-muted-foreground">
                Whether you're looking for your next adventure or ready to share your passion with others, GoOutside is
                the place for you. You can always switch roles later in your settings.
              </p>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center rounded-lg">
            <div className="bg-card p-6 rounded-lg">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
