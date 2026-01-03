"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search, MapPin, Sparkles, Menu, Home, MessageCircle, User, Filter, Star, Clock } from "lucide-react"

export default function HomeScreen({ onNavigate }: any) {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const events = [
    {
      id: 1,
      title: "Sunset Brunch at Labadi",
      price: 150,
      location: "Labadi Beach",
      image: "/sunset-brunch-at-beach.jpg",
      category: "Brunch",
      verified: true,
      rating: 4.8,
      reviews: 124,
      time: "10:00 AM - 2:00 PM",
    },
    {
      id: 2,
      title: "Live Jazz Night",
      price: 200,
      location: "Osu, Accra",
      image: "/live-jazz-music-performance.jpg",
      category: "Music",
      verified: true,
      rating: 4.9,
      reviews: 89,
      time: "8:00 PM - 11:00 PM",
    },
    {
      id: 3,
      title: "Art Exhibition Opening",
      price: 0,
      location: "Accra Arts Center",
      image: "/art-gallery-exhibition.jpg",
      category: "Art",
      verified: true,
      rating: 4.6,
      reviews: 56,
      time: "2:00 PM - 6:00 PM",
    },
    {
      id: 4,
      title: "Hiking Adventure",
      price: 100,
      location: "Aburi Mountains",
      image: "/mountain-hiking-adventure.png",
      category: "Adventure",
      verified: true,
      rating: 4.7,
      reviews: 203,
      time: "6:00 AM - 12:00 PM",
    },
    {
      id: 5,
      title: "Food Festival Weekend",
      price: 50,
      location: "Jamestown, Accra",
      image: "/food-festival-street-food.jpg",
      category: "Food",
      verified: true,
      rating: 4.5,
      reviews: 312,
      time: "11:00 AM - 9:00 PM",
    },
    {
      id: 6,
      title: "Yoga & Wellness Retreat",
      price: 180,
      location: "Tema, Accra",
      image: "/yoga-wellness-retreat-nature.jpg",
      category: "Wellness",
      verified: true,
      rating: 4.9,
      reviews: 78,
      time: "7:00 AM - 10:00 AM",
    },
  ]

  const categories = ["Brunch", "Music", "Art", "Adventure", "Food", "Wellness"]
  const filters = ["All", "Budget", "Trending", "Near Me", "This Weekend"]

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(event.category)

    const matchesPrice = event.price >= priceRange[0] && event.price <= priceRange[1]

    return matchesSearch && matchesCategory && matchesPrice
  })

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white rounded-b-3xl sticky top-0 z-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">GoOutside</h1>
          <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-white/60" />
          <input
            type="text"
            placeholder="What do you want to do this weekend?"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              if (e.target.value.trim()) {
                onNavigate("search-results", undefined, e.target.value)
              }
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter" && searchQuery.trim()) {
                onNavigate("search-results", undefined, searchQuery)
              }
            }}
            className="w-full bg-white/20 text-white placeholder-white/60 rounded-full pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
        </div>
      </div>

      {/* AI Planner Button */}
      <div className="px-4 pt-6 pb-4">
        <Button
          onClick={() => onNavigate("ai-planner")}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 rounded-xl flex items-center justify-center gap-2"
        >
          <Sparkles className="h-5 w-5" />
          Ask AI to plan your day
        </Button>
      </div>

      {/* Filters Section */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter.toLowerCase())}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                selectedFilter === filter.toLowerCase()
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {filter}
            </button>
          ))}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 rounded-full font-medium whitespace-nowrap bg-muted text-foreground hover:bg-muted/80 flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            More
          </button>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      {showFilters && (
        <div className="px-4 pb-6 bg-card/50 mx-4 rounded-xl p-4 border border-border">
          {/* Price Range */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-3">Price Range</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>₵{priceRange[0]}</span>
              <span>₵{priceRange[1]}</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">Categories</label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategories.includes(category)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setShowFilters(false)}
            className="w-full mt-4 px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 font-medium transition-all"
          >
            Apply Filters
          </button>
        </div>
      )}

      {/* Events Grid */}
      <div className="px-4 space-y-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Card
              key={event.id}
              onClick={() => onNavigate("event-detail", event)}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-40 object-cover" />
                {event.verified && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    ✓ Verified
                  </div>
                )}
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

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center gap-0.5">
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
                  <span className="text-xs text-muted-foreground">({event.reviews} reviews)</span>
                </div>

                {/* Price and Category */}
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">
                    {event.price === 0 ? "Free" : `₵${event.price}`}
                  </span>
                  <span className="text-xs bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No events found matching your filters</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategories([])
                setPriceRange([0, 500])
              }}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border flex items-center justify-around p-4">
        <button className="flex flex-col items-center gap-1 text-primary">
          <Home className="h-6 w-6" />
          <span className="text-xs font-medium">Home</span>
        </button>
        <button
          onClick={() => onNavigate("community")}
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="text-xs font-medium">Community</span>
        </button>
        <button
          onClick={() => onNavigate("profile")}
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
        >
          <User className="h-6 w-6" />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </div>
  )
}
