"use client"

import { useState } from "react"
import { ChevronLeft, Send, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AIPlanner({ onNavigate }: any) {
  const [step, setStep] = useState<"initial" | "chat">("initial")
  const [messages, setMessages] = useState<Array<{ type: "ai" | "user"; text: string }>>([
    {
      type: "ai",
      text: "Hi! I'm your AI event planner. Tell me your budget, mood, and location, and I'll create the perfect weekend itinerary for you!",
    },
  ])
  const [input, setInput] = useState("")
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null)

  const moods = [
    { id: "adventure", label: "Adventure", icon: "🏔️" },
    { id: "relaxation", label: "Relaxation", icon: "🧘" },
    { id: "social", label: "Social", icon: "🎉" },
    { id: "cultural", label: "Cultural", icon: "🎨" },
    { id: "foodie", label: "Foodie", icon: "🍽️" },
    { id: "nightlife", label: "Nightlife", icon: "🌙" },
  ]

  const budgets = [
    { id: "budget", label: "Budget", range: "₵0-100", icon: "💰" },
    { id: "moderate", label: "Moderate", range: "₵100-300", icon: "💳" },
    { id: "premium", label: "Premium", range: "₵300+", icon: "✨" },
  ]

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId)
  }

  const handleBudgetSelect = (budgetId: string) => {
    setSelectedBudget(budgetId)
  }

  const handleQuickStart = () => {
    if (selectedMood && selectedBudget) {
      const moodLabel = moods.find((m) => m.id === selectedMood)?.label
      const budgetLabel = budgets.find((b) => b.id === selectedBudget)?.label
      const userMessage = `I'm in the mood for ${moodLabel} activities with a ${budgetLabel} budget. Plan my weekend!`

      setMessages([...messages, { type: "user", text: userMessage }])
      setStep("chat")

      // Simulate AI response
      setTimeout(() => {
        const recommendations = {
          adventure: "🏔️ Hiking at Aburi Mountains (₵100) → 🏖️ Beach exploration at Labadi",
          relaxation: "🧘 Yoga retreat in Tema (₵180) → 🌊 Sunset meditation at the beach",
          social: "🎉 Live Jazz Night (₵200) → 🍽️ Food Festival (₵50)",
          cultural: "🎨 Art Exhibition (Free) → 🏛️ Museum tour (₵30)",
          foodie: "🍽️ Sunset Brunch (₵150) → 🍜 Street food festival (₵50)",
          nightlife: "🌙 Club night in Osu (₵150) → 🎵 Late-night karaoke (₵75)",
        }

        const response =
          recommendations[selectedMood as keyof typeof recommendations] ||
          "Great! Here's your perfect weekend itinerary..."

        setMessages((prev) => [
          ...prev,
          {
            type: "ai",
            text: `Perfect! Based on your ${moodLabel} mood and ${budgetLabel} budget, here's my recommendation:\n\n${response}\n\nWould you like me to book any of these events or get more details?`,
          },
        ])
      }, 1000)
    }
  }

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", text: input }])
      setInput("")

      // Simulate AI response
      setTimeout(() => {
        const responses = [
          "Great choice! I've added that to your itinerary. Would you like more recommendations?",
          "Perfect! That event has excellent reviews. Shall I book it for you?",
          "Interesting! Let me find similar events you might enjoy...",
          "I can help with that! Would you like to see more options in that category?",
        ]

        const randomResponse = responses[Math.floor(Math.random() * responses.length)]

        setMessages((prev) => [
          ...prev,
          {
            type: "ai",
            text: randomResponse,
          },
        ])
      }, 800)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-primary p-4 text-white flex items-center gap-3 sticky top-0 z-10">
        <button onClick={() => onNavigate("home")} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            AI Event Planner
          </h1>
        </div>
      </div>

      {/* Initial Selection Screen */}
      {step === "initial" && (
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Chat Message */}
          <div className="flex justify-start">
            <div className="max-w-xs px-4 py-3 rounded-2xl rounded-bl-none bg-muted text-foreground">
              <p className="text-sm">{messages[0].text}</p>
            </div>
          </div>

          {/* Mood Selection */}
          <div>
            <h2 className="text-lg font-bold text-foreground mb-3">What's your mood?</h2>
            <div className="grid grid-cols-2 gap-3">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => handleMoodSelect(mood.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedMood === mood.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="text-3xl mb-2">{mood.icon}</div>
                  <p className="font-semibold text-foreground text-sm">{mood.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div>
            <h2 className="text-lg font-bold text-foreground mb-3">What's your budget?</h2>
            <div className="grid grid-cols-1 gap-3">
              {budgets.map((budget) => (
                <button
                  key={budget.id}
                  onClick={() => handleBudgetSelect(budget.id)}
                  className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                    selectedBudget === budget.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <span className="text-2xl">{budget.icon}</span>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-foreground">{budget.label}</p>
                    <p className="text-xs text-muted-foreground">{budget.range}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Start Button */}
          <Button
            onClick={handleQuickStart}
            disabled={!selectedMood || !selectedBudget}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Zap className="h-5 w-5" />
            Plan My Weekend
          </Button>
        </div>
      )}

      {/* Chat Screen */}
      {step === "chat" && (
        <>
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl ${
                    msg.type === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-border p-4 bg-card">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Tell me more..."
                className="flex-1 bg-muted text-foreground rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground"
              />
              <button
                onClick={handleSend}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-3 flex items-center justify-center transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
