"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, Users, Share2, Heart, ChevronLeft, Star, AlertCircle, Check, Calendar } from "lucide-react"

export default function EventDetailScreen({ event, onNavigate }: any) {
  const [activeTab, setActiveTab] = useState("details")
  const [liked, setLiked] = useState(false)
  const [showBooking, setShowBooking] = useState(false)
  const [ticketCount, setTicketCount] = useState(1)

  const reviews = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      text: "Amazing experience! The organizer was so welcoming and the event was perfectly organized.",
      date: "2 weeks ago",
      avatar: "SM",
    },
    {
      id: 2,
      author: "John D.",
      rating: 5,
      text: "Best weekend ever! Great vibes and wonderful people. Highly recommend!",
      date: "1 month ago",
      avatar: "JD",
    },
    {
      id: 3,
      author: "Ama K.",
      rating: 4,
      text: "Really enjoyed it. The only thing was it was a bit crowded, but still worth it.",
      date: "1 month ago",
      avatar: "AK",
    },
  ]

  const eventDetails = {
    date: "Friday, Nov 22",
    time: "6:00 PM - 8:00 PM",
    duration: "2 hours",
    attendees: 45,
    capacity: 60,
    description:
      "Join us for an unforgettable evening of live jazz music, delicious food, and great company. This is a verified event with excellent reviews from our community.",
    highlights: ["Live Jazz Band", "Complimentary Drinks", "Networking Opportunity", "Verified Organizer"],
    cancellationPolicy: "Free cancellation up to 24 hours before the event",
  }

  const handleBooking = () => {
    setShowBooking(true)
  }

  const confirmBooking = () => {
    alert(`Booked ${ticketCount} ticket(s)! Check your email for confirmation.`)
    setShowBooking(false)
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header Image */}
      <div className="relative">
        <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-64 object-cover" />
        <button
          onClick={() => onNavigate("home")}
          className="absolute top-4 left-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-foreground" />
        </button>
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
        >
          <Heart className={`h-6 w-6 ${liked ? "fill-primary text-primary" : "text-foreground"}`} />
        </button>
      </div>

      {/* Event Info */}
      <div className="px-4 pt-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground mb-2">{event.title}</h1>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(event.rating || 4.8) ? "fill-secondary text-secondary" : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">{event.rating || 4.8}</span>
              <span className="text-sm text-muted-foreground">({event.reviews || 248} reviews)</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">{event.price === 0 ? "Free" : `₵${event.price}`}</div>
            <span className="text-xs text-muted-foreground">per person</span>
          </div>
        </div>

        {/* Organizer Badge */}
        <Card className="p-4 mb-6 bg-primary/5 border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
              ✓
            </div>
            <div>
              <p className="font-semibold text-foreground">Verified Organizer</p>
              <p className="text-sm text-muted-foreground">Trusted by 1,200+ guests</p>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-border mb-6 overflow-x-auto">
          {["details", "reviews", "map"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 font-semibold capitalize transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "details" && (
          <div className="space-y-6 mb-6">
            {/* Description */}
            <div>
              <h3 className="font-bold text-foreground mb-2">About this event</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{eventDetails.description}</p>
            </div>

            {/* Event Details */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{eventDetails.date}</p>
                  <p className="text-sm text-muted-foreground">{eventDetails.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Duration</p>
                  <p className="text-sm text-muted-foreground">{eventDetails.duration}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{event.location}</p>
                  <p className="text-sm text-muted-foreground">Accra, Ghana</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">
                    {eventDetails.attendees} of {eventDetails.capacity} attending
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {eventDetails.capacity - eventDetails.attendees} spots left
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-bold text-foreground mb-3">What's included</h3>
              <div className="space-y-2">
                {eventDetails.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cancellation Policy */}
            <Card className="p-4 bg-accent/5 border-accent/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Cancellation Policy</p>
                  <p className="text-xs text-muted-foreground mt-1">{eventDetails.cancellationPolicy}</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4 mb-6">
            {/* Rating Summary */}
            <div className="bg-card rounded-xl p-4 border border-border mb-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">{event.rating || 4.8}</div>
                  <div className="flex gap-1 justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(event.rating || 4.8) ? "fill-secondary text-secondary" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Based on {event.reviews || 248} reviews</p>
                </div>
              </div>
            </div>

            {/* Individual Reviews */}
            {reviews.map((review) => (
              <Card key={review.id} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-foreground">{review.author}</p>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-3 w-3 ${j < review.rating ? "fill-secondary text-secondary" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "map" && (
          <div className="bg-muted rounded-xl h-64 flex items-center justify-center mb-6 border border-border">
            <p className="text-muted-foreground">Map view coming soon</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50">
          <div className="w-full bg-card rounded-t-3xl p-6 space-y-4 animate-in slide-in-from-bottom">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">Select Tickets</h2>
              <button onClick={() => setShowBooking(false)} className="text-muted-foreground hover:text-foreground">
                ✕
              </button>
            </div>

            {/* Ticket Counter */}
            <div className="flex items-center justify-between bg-muted rounded-lg p-4">
              <span className="font-semibold text-foreground">Number of Tickets</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                  className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90"
                >
                  −
                </button>
                <span className="w-8 text-center font-bold text-foreground">{ticketCount}</span>
                <button
                  onClick={() =>
                    setTicketCount(Math.min(eventDetails.capacity - eventDetails.attendees, ticketCount + 1))
                  }
                  className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <Card className="p-4 bg-muted/50">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {event.price === 0 ? "Free" : `₵${event.price}`} × {ticketCount}
                  </span>
                  <span className="font-semibold text-foreground">
                    ₵{event.price === 0 ? 0 : event.price * ticketCount}
                  </span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="font-bold text-foreground">Total</span>
                  <span className="font-bold text-primary text-lg">
                    ₵{event.price === 0 ? 0 : event.price * ticketCount}
                  </span>
                </div>
              </div>
            </Card>

            {/* Confirm Button */}
            <Button
              onClick={confirmBooking}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-xl"
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      )}

      {/* Booking Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 space-y-3">
        <Button
          onClick={handleBooking}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl"
        >
          Book Now
        </Button>
        <Button
          variant="outline"
          className="w-full border-2 border-primary text-primary hover:bg-primary/5 font-semibold py-6 rounded-xl flex items-center justify-center gap-2 bg-transparent"
        >
          <Share2 className="h-5 w-5" />
          Share Event
        </Button>
      </div>
    </div>
  )
}
