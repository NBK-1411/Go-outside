"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { AdinkraPattern } from "@/components/adinkra-symbols"

export default function OnboardingScreen({ onNavigate }: any) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Discover verified events.",
      description: "Find authentic social experiences across Ghana - from Accra to Kumasi",
      adinkra: "GyeNyame" as const,
    },
    {
      title: "AI plans your perfect weekend.",
      description: "Get personalized recommendations based on your mood and budget - no stress!",
      adinkra: "Adinkrahene" as const,
    },
    {
      title: "Pay safely and share your experience.",
      description: "Secure payments and connect with the community - your story matters!",
      adinkra: "Sankofa" as const,
    },
  ]

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onNavigate("signup")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="text-5xl font-bold text-primary mb-2">GoOutside</div>
          <p className="text-muted-foreground text-sm">Discover. Plan. Experience.</p>
        </div>

        {/* Slide Content */}
        <div className="bg-card rounded-2xl p-8 shadow-lg mb-8 min-h-64 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 mb-6">
            <AdinkraPattern symbol={slides[currentSlide].adinkra} />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">{slides[currentSlide].title}</h2>
          <p className="text-muted-foreground">{slides[currentSlide].description}</p>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-primary w-8" : "bg-muted w-2"
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <Button
            onClick={handleNext}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl"
          >
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>

          {currentSlide === slides.length - 1 && (
            <Button
              onClick={() => onNavigate("login")}
              variant="outline"
              className="w-full border-2 border-primary text-primary hover:bg-primary/5 font-semibold py-6 rounded-xl bg-transparent"
            >
              Already have an account? Sign In
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
