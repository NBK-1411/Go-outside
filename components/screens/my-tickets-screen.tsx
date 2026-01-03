"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Download, QrCode, MapPin, Calendar, Users } from "lucide-react"

export default function MyTicketsScreen({ onNavigate }: any) {
  const [tickets] = useState([
    {
      id: 1,
      eventTitle: "Sunset Brunch at Labadi",
      date: "Friday, Nov 22",
      time: "10:00 AM",
      location: "Labadi Beach",
      ticketCode: "GB-2024-001",
      quantity: 2,
      status: "active",
      image: "/sunset-brunch-beach.jpg",
      price: 150,
    },
    {
      id: 2,
      eventTitle: "Live Jazz Night",
      date: "Saturday, Nov 25",
      time: "8:00 PM",
      location: "Osu, Accra",
      ticketCode: "GB-2024-002",
      quantity: 1,
      status: "active",
      image: "/jazz-night-live-music.jpg",
      price: 200,
    },
    {
      id: 3,
      eventTitle: "Hiking Adventure",
      date: "Sunday, Nov 17",
      time: "6:00 AM",
      location: "Aburi Mountains",
      ticketCode: "GB-2024-003",
      quantity: 1,
      status: "past",
      image: "/hiking-mountain-adventure.jpg",
      price: 100,
    },
  ])

  const activeTickets = tickets.filter((t) => t.status === "active")
  const pastTickets = tickets.filter((t) => t.status === "past")

  const TicketCard = ({ ticket }: any) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex">
        <img src={ticket.image || "/placeholder.svg"} alt={ticket.eventTitle} className="w-24 h-24 object-cover" />
        <div className="flex-1 p-4">
          <h3 className="font-bold text-foreground mb-1">{ticket.eventTitle}</h3>
          <div className="space-y-1 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {ticket.date} at {ticket.time}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {ticket.location}
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {ticket.quantity} {ticket.quantity > 1 ? "tickets" : "ticket"}
            </div>
          </div>
          <p className="text-xs text-muted-foreground font-mono">Code: {ticket.ticketCode}</p>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white flex items-center gap-3 sticky top-0 z-10">
        <button onClick={() => onNavigate("profile")} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold">My Tickets</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Active Tickets */}
        {activeTickets.length > 0 && (
          <div>
            <h2 className="font-bold text-foreground mb-3">Upcoming Events</h2>
            <div className="space-y-3">
              {activeTickets.map((ticket) => (
                <div key={ticket.id} className="space-y-3">
                  <TicketCard ticket={ticket} />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => alert("QR Code: " + ticket.ticketCode)}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
                    >
                      <QrCode className="h-4 w-4" />
                      Show QR Code
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary/5 flex items-center justify-center gap-2 bg-transparent"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Past Tickets */}
        {pastTickets.length > 0 && (
          <div>
            <h2 className="font-bold text-foreground mb-3">Past Events</h2>
            <div className="space-y-3">
              {pastTickets.map((ticket) => (
                <div key={ticket.id}>
                  <TicketCard ticket={ticket} />
                </div>
              ))}
            </div>
          </div>
        )}

        {tickets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">You haven't booked any tickets yet</p>
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
