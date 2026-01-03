"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Upload } from "lucide-react"

export default function EditEventScreen({ event, onNavigate }: any) {
  const [formData, setFormData] = useState({
    title: event?.title || "",
    price: event?.price || "",
    category: event?.category || "Brunch",
    date: event?.date || "",
    time: "6:00 PM",
    location: event?.location || "",
    description: event?.description || "Enter event details...",
    capacity: event?.capacity || "",
    image: event?.image || "",
  })

  const categories = ["Brunch", "Music", "Art", "Adventure", "Food", "Wellness", "Sports", "Tech"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Event "${formData.title}" updated successfully!`)
    onNavigate("organizer")
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-4 text-white flex items-center gap-3 sticky top-0 z-10">
        <button onClick={() => onNavigate("organizer")} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold">Edit Event</h1>
      </div>

      <div className="p-4 space-y-4">
        <form onSubmit={handleSave} className="space-y-4">
          {/* Event Image */}
          <Card className="p-4 border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer">
            <div className="flex items-center justify-center gap-3 py-8">
              <Upload className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-semibold text-foreground text-sm">Click to upload event image</p>
                <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
              </div>
            </div>
          </Card>

          {/* Event Title */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Event Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter event title"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              rows={4}
              placeholder="Describe your event"
              required
            />
          </div>

          {/* Category & Price */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Price (₵)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="0"
                required
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-3">
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
              <label className="block text-sm font-semibold text-foreground mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          {/* Location & Capacity */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Event location"
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
                className="w-full bg-muted text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Max attendees"
                required
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              onClick={() => onNavigate("organizer")}
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
