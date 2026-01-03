"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Trash2, MapPin, Clock, Star } from "lucide-react"

export default function SavedEventsScreen({ onNavigate }: any) {
  const [savedEvents, setSavedEvents] = useState([
    {
      id: 1,
      title: "Sunset Brunch at Labadi",
      price: 150,
      location: "Labadi Beach",
      image: "/sunset-brunch-beach.jpg",
      rating: 4.8,
      reviews: 124,
      time: "10:00 AM - 2:00 PM",
      savedDate: "2 days ago",
    },
    {
      id: 3,
      title: "Art Exhibition Opening",
      price: 0,
      location: "Accra Arts Center",
      image: "/art-exhibition-gallery.png",
      rating: 4.6,
      reviews: 56,
      time: "2:00 PM - 6:00 PM",
      savedDate: "1 week ago",
    },
    {
      id: 6,
      title: "Yoga & Wellness Retreat",
      price: 180,
      location: "Tema, Accra",
      image: "/yoga-wellness-retreat-nature.jpg",
      rating: 4.9,
      reviews: 78,
      time: "7:00 AM - 10:00 AM",
      savedDate: "3 days ago",
    },
  ])

  const removeBookmark = (id: number) => {
    setSavedEvents(savedEvents.filter((event) => event.id !== id))
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white flex items-center gap-3 sticky top-0 z-10">
        <button onClick={() => onNavigate("profile")} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold">Saved Events</h1>
      </div>

      {/* Events List */}
      <div className="p-4 space-y-4">
        {savedEvents.length > 0 ? (
          savedEvents.map((event) => (
            <Card
              key={event.id}
              onClick={() => onNavigate("event-detail", event)}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-40 object-cover" />
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    removeBookmark(event.id)
                  }}
                  className="absolute top-3 right-3 bg-destructive text-destructive-foreground p-2 rounded-full hover:bg-destructive/90 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-foreground mb-2">{event.title}</h3>

                {/* Location and Time */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                </div>

                {/* Rating and Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(event.rating) ? "fill-secondary text-secondary" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">{event.rating}</span>
                  </div>
                  <span className="text-primary font-bold">{event.price === 0 ? "Free" : `₵${event.price}`}</span>
                </div>

                <p className="text-xs text-muted-foreground mt-2">Saved {event.savedDate}</p>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">You haven't saved any events yet</p>
            <Button
              onClick={() => onNavigate("home")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Explore Events
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
