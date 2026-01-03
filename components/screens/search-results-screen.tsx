"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, MapPin, Clock, Star } from "lucide-react"

export default function SearchResultsScreen({ searchQuery, onNavigate }: any) {
  const [results] = useState([
    {
      id: 1,
      title: "Sunset Brunch at Labadi",
      price: 150,
      location: "Labadi Beach",
      image: "/sunset-brunch-beach.jpg",
      rating: 4.8,
      reviews: 124,
      time: "10:00 AM - 2:00 PM",
      relevance: 95,
    },
    {
      id: 5,
      title: "Food Festival Weekend",
      price: 50,
      location: "Jamestown, Accra",
      image: "/food-festival-street-food.jpg",
      rating: 4.5,
      reviews: 312,
      time: "11:00 AM - 9:00 PM",
      relevance: 88,
    },
    {
      id: 2,
      title: "Brunch Jazz Night Combo",
      price: 250,
      location: "Osu, Accra",
      image: "/jazz-night-live-music.jpg",
      rating: 4.9,
      reviews: 89,
      time: "6:00 PM - 11:00 PM",
      relevance: 82,
    },
  ])

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white flex items-center gap-3 sticky top-0 z-10">
        <button onClick={() => onNavigate("home")} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold truncate">Results for "{searchQuery}"</h1>
      </div>

      <div className="p-4 space-y-4">
        <div className="text-sm text-muted-foreground">
          Found {results.length} event{results.length !== 1 ? "s" : ""} matching your search
        </div>

        {results.map((event) => (
          <Card
            key={event.id}
            onClick={() => onNavigate("event-detail", event)}
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="relative">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-40 object-cover" />
              <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                {event.relevance}% match
              </div>
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

              {/* Rating and Price */}
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
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
