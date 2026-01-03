"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AdinkraPattern } from "@/components/adinkra-symbols"
import { Music, Utensils, Zap, Moon, Palette, Users } from "lucide-react"

export default function PreferenceDiscoveryScreen({ onNavigate }: any) {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const preferences = [
    {
      id: "food",
      label: "Chop & Taste",
      description: "Food festivals, restaurants, cooking classes",
      icon: Utensils,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "music",
      label: "Highlife & Beats",
      description: "Live music, concerts, DJ nights",
      icon: Music,
      color: "from-primary to-secondary",
    },
    {
      id: "adventure",
      label: "Adventure Time",
      description: "Hiking, sports, outdoor activities",
      icon: Zap,
      color: "from-accent to-green-500",
    },
    {
      id: "nightlife",
      label: "Night Vibes",
      description: "Clubs, bars, late-night hangouts",
      icon: Moon,
      color: "from-purple-500 to-primary",
    },
    {
      id: "arts",
      label: "Arts & Culture",
      description: "Galleries, exhibitions, theater",
      icon: Palette,
      color: "from-pink-500 to-red-500",
    },
    {
      id: "social",
      label: "Social Hangouts",
      description: "Meetups, networking, community events",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const togglePreference = (id: string) => {
    setSelectedPreferences((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]))
  }

  const handleContinue = () => {
    if (selectedPreferences.length === 0) return

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      onNavigate("home")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header with Adinkra */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16">
              <AdinkraPattern symbol="Akoma" className="w-full h-full" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">What's Your Vibe?</h1>
          <p className="text-muted-foreground">Pick what makes you happy, no be small thing! (Choose at least one)</p>
        </div>

        {/* Preferences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {preferences.map((pref) => {
            const Icon = pref.icon
            const isSelected = selectedPreferences.includes(pref.id)

            return (
              <Card
                key={pref.id}
                onClick={() => togglePreference(pref.id)}
                className={`p-6 cursor-pointer transition-all transform hover:scale-105 ${
                  isSelected ? "ring-2 ring-primary bg-primary/5 shadow-lg" : "hover:shadow-md"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${pref.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{pref.label}</h3>
                    <p className="text-sm text-muted-foreground">{pref.description}</p>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                  )}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Info Text */}
        <div className="bg-card rounded-lg p-4 mb-6 border border-border">
          <p className="text-sm text-muted-foreground text-center">
            "Sankofa" - go back for what you have forgotten. We'll use your preferences to show you the best events
            tailored just for you!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleContinue}
            disabled={selectedPreferences.length === 0 || isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg"
          >
            {isLoading ? "Setting up your profile..." : "Continue to GoOutside"}
          </Button>
          <Button
            onClick={() => onNavigate("home")}
            variant="outline"
            className="w-full border-2 border-border text-foreground hover:bg-muted font-semibold py-3 rounded-lg"
          >
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  )
}
