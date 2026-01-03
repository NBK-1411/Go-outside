"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronLeft,
  Plus,
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  Edit,
  Trash2,
  Calendar,
  MapPin,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Settings,
  CheckCircle,
  Clock,
} from "lucide-react"
import { AdinkraPattern } from "@/components/adinkra-symbols"

export default function OrganizerPortal({ onNavigate }: any) {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "Brunch",
    date: "",
    location: "",
    description: "",
    capacity: "",
  })

  const events = [
    {
      id: 1,
      title: "Sunset Brunch",
      date: "Nov 22, 2024",
      location: "Labadi Beach",
      views: 1240,
      clicks: 340,
      sales: 28,
      revenue: 4200,
      capacity: 60,
      attendees: 28,
      status: "active",
    },
    {
      id: 2,
      title: "Live Jazz Night",
      date: "Nov 25, 2024",
      location: "Osu, Accra",
      views: 890,
      clicks: 210,
      sales: 15,
      revenue: 3000,
      capacity: 50,
      attendees: 15,
      status: "active",
    },
  ]

  const stats = {
    totalEvents: events.length,
    totalRevenue: events.reduce((sum, e) => sum + e.revenue, 0),
    totalAttendees: events.reduce((sum, e) => sum + e.attendees, 0),
    totalViews: events.reduce((sum, e) => sum + e.views, 0),
  }

  const monetizationStats = {
    totalEarnings: 12500,
    pendingPayout: 3200,
    monthlyRevenue: 8300,
    platformFee: 1250,
  }

  const paymentMethods = [
    {
      id: 1,
      type: "Mobile Money",
      provider: "MTN Mobile Money",
      number: "024XXXXXXX",
      isDefault: true,
      status: "verified",
    },
    {
      id: 2,
      type: "Mobile Money",
      provider: "Vodafone Cash",
      number: "055XXXXXXX",
      isDefault: false,
      status: "verified",
    },
    {
      id: 3,
      type: "Bank Account",
      provider: "Zenith Bank",
      number: "****5678",
      isDefault: false,
      status: "pending",
    },
  ]

  const payoutHistory = [
    {
      id: 1,
      amount: 2500,
      date: "Nov 15, 2024",
      method: "MTN Mobile Money",
      status: "completed",
      reference: "TXN-2024-001",
    },
    {
      id: 2,
      amount: 1800,
      date: "Nov 8, 2024",
      method: "Vodafone Cash",
      status: "completed",
      reference: "TXN-2024-002",
    },
    {
      id: 3,
      amount: 3200,
      date: "Nov 22, 2024",
      method: "MTN Mobile Money",
      status: "pending",
      reference: "TXN-2024-003",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Event "${formData.title}" created successfully, no be small thing!`)
    setFormData({
      title: "",
      price: "",
      category: "Brunch",
      date: "",
      location: "",
      description: "",
      capacity: "",
    })
    setShowCreateForm(false)
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header with Adinkra Symbol */}
      <div className="bg-gradient-to-r from-primary to-accent p-4 text-white flex items-center justify-between sticky top-0 z-10">
        <button onClick={() => onNavigate("home")} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2">
          <AdinkraPattern symbol="Adinkrahene" className="w-6 h-6" />
          <h1 className="text-xl font-bold">Organizer Portal</h1>
        </div>
        <div className="w-10" />
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-border px-4 pt-4 overflow-x-auto">
        {["overview", "events", "analytics", "monetization"].map((tab) => (
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

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="p-4 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <p className="text-xs text-muted-foreground">Total Revenue</p>
              </div>
              <p className="text-2xl font-bold text-primary">₵{stats.totalRevenue.toLocaleString()}</p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-5 w-5 text-secondary" />
                <p className="text-xs text-muted-foreground">Total Attendees</p>
              </div>
              <p className="text-2xl font-bold text-secondary">{stats.totalAttendees}</p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="flex items-center gap-3 mb-2">
                <Eye className="h-5 w-5 text-accent" />
                <p className="text-xs text-muted-foreground">Total Views</p>
              </div>
              <p className="text-2xl font-bold text-accent">{stats.totalViews.toLocaleString()}</p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <p className="text-xs text-muted-foreground">Active Events</p>
              </div>
              <p className="text-2xl font-bold text-primary">{stats.totalEvents}</p>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <Button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl flex items-center justify-center gap-2"
            >
              <Plus className="h-5 w-5" />
              Create New Experience
            </Button>
          </div>

          {/* Recent Events */}
          <div>
            <h2 className="font-bold text-foreground mb-4">Recent Events</h2>
            <div className="space-y-3">
              {events.slice(0, 2).map((event) => (
                <Card key={event.id} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-foreground">{event.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">
                      {event.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Attendees</p>
                      <p className="font-bold text-foreground">
                        {event.attendees}/{event.capacity}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Revenue</p>
                      <p className="font-bold text-primary">₵{event.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Views</p>
                      <p className="font-bold text-foreground">{event.views}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Events Tab */}
      {activeTab === "events" && (
        <div className="p-4 space-y-4">
          <Button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl flex items-center justify-center gap-2"
          >
            <Plus className="h-5 w-5" />
            Create New Experience
          </Button>

          {/* Events List */}
          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground">{event.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Edit className="h-5 w-5 text-primary" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Trash2 className="h-5 w-5 text-destructive" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Capacity</p>
                    <p className="font-bold text-foreground">{event.capacity}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Booked</p>
                    <p className="font-bold text-primary">{event.attendees}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Available</p>
                    <p className="font-bold text-foreground">{event.capacity - event.attendees}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                    <p className="font-bold text-primary">₵{event.revenue.toLocaleString()}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === "analytics" && (
        <div className="p-4 space-y-6">
          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="p-4">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  {event.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Page Views</p>
                    <p className="text-2xl font-bold text-foreground">{event.views}</p>
                    <p className="text-xs text-muted-foreground mt-1">+12% from last week</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Click-Through Rate</p>
                    <p className="text-2xl font-bold text-foreground">
                      {((event.clicks / event.views) * 100).toFixed(1)}%
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">+5% from last week</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Conversion Rate</p>
                    <p className="text-2xl font-bold text-foreground">
                      {((event.sales / event.clicks) * 100).toFixed(1)}%
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">+3% from last week</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Revenue</p>
                    <p className="text-2xl font-bold text-primary">₵{event.revenue.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground mt-1">+8% from last week</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Monetization Tab */}
      {activeTab === "monetization" && (
        <div className="p-4 space-y-6">
          {/* Earnings Overview */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-2">
                <Wallet className="h-5 w-5 text-primary" />
                <p className="text-xs text-muted-foreground">Total Earnings</p>
              </div>
              <p className="text-2xl font-bold text-primary">₵{monetizationStats.totalEarnings.toLocaleString()}</p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="flex items-center gap-3 mb-2">
                <ArrowUpRight className="h-5 w-5 text-secondary" />
                <p className="text-xs text-muted-foreground">Pending Payout</p>
              </div>
              <p className="text-2xl font-bold text-secondary">₵{monetizationStats.pendingPayout.toLocaleString()}</p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <p className="text-xs text-muted-foreground">This Month</p>
              </div>
              <p className="text-2xl font-bold text-accent">₵{monetizationStats.monthlyRevenue.toLocaleString()}</p>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-2">
                <ArrowDownLeft className="h-5 w-5 text-primary" />
                <p className="text-xs text-muted-foreground">Platform Fee</p>
              </div>
              <p className="text-2xl font-bold text-primary">₵{monetizationStats.platformFee.toLocaleString()}</p>
            </Card>
          </div>

          {/* Payment Methods */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-foreground flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Payment Methods
              </h2>
              <button
                onClick={() => setShowPaymentModal(true)}
                className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-1"
              >
                <Plus className="h-4 w-4" />
                Add
              </button>
            </div>

            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <Card key={method.id} className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-foreground">{method.provider}</h3>
                        {method.isDefault && (
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{method.number}</p>
                      <div className="flex items-center gap-2 mt-2">
                        {method.status === "verified" ? (
                          <div className="flex items-center gap-1 text-xs text-secondary">
                            <CheckCircle className="h-4 w-4" />
                            Verified
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-xs text-yellow-600">
                            <Clock className="h-4 w-4" />
                            Pending Verification
                          </div>
                        )}
                      </div>
                    </div>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Settings className="h-5 w-5 text-muted-foreground" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Payout History */}
          <div>
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Payout History
            </h2>

            <div className="space-y-3">
              {payoutHistory.map((payout) => (
                <Card key={payout.id} className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-foreground">₵{payout.amount.toLocaleString()}</h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            payout.status === "completed"
                              ? "bg-secondary/20 text-secondary"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {payout.status === "completed" ? "Completed" : "Pending"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{payout.method}</p>
                      <p className="text-xs text-muted-foreground mt-1">{payout.date}</p>
                      <p className="text-xs text-muted-foreground">Ref: {payout.reference}</p>
                    </div>
                    {payout.status === "completed" ? (
                      <CheckCircle className="h-6 w-6 text-secondary" />
                    ) : (
                      <Clock className="h-6 w-6 text-yellow-600" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Request Payout Button */}
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg">
            Request Payout
          </Button>
        </div>
      )}

      {/* Create Event Form Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50">
          <div className="w-full bg-card rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Create New Experience</h2>
              <button
                onClick={() => setShowCreateForm(false)}
                className="text-muted-foreground hover:text-foreground text-2xl"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Experience Name</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter experience name"
                  className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Price (₵)</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="0"
                    className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Capacity</label>
                  <input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleInputChange}
                    placeholder="50"
                    className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>Brunch</option>
                  <option>Music</option>
                  <option>Art</option>
                  <option>Adventure</option>
                  <option>Food</option>
                  <option>Wellness</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                    className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your experience..."
                  rows={4}
                  className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg"
              >
                Publish Experience
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
