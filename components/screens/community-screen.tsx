"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, MessageCircle, Share2, ChevronLeft, Star, Search, TrendingUp } from "lucide-react"

export default function CommunityScreen({ onNavigate }: any) {
  const [activeTab, setActiveTab] = useState("trending")
  const [liked, setLiked] = useState<Record<number, boolean>>({})
  const [searchQuery, setSearchQuery] = useState("")
  const [showComments, setShowComments] = useState<number | null>(null)

  const reviews = [
    {
      id: 1,
      author: "Ama Osei",
      handle: "@amaosei",
      avatar: "AO",
      rating: 5,
      event: "Sunset Brunch at Labadi",
      text: "Amazing experience! The food was incredible and the sunset views were breathtaking. Highly recommend this event to everyone!",
      likes: 234,
      comments: 12,
      shares: 45,
      hasVideo: true,
      timestamp: "2 hours ago",
      verified: true,
      image: "/sunset-brunch-review.jpg",
    },
    {
      id: 2,
      author: "Kwame Mensah",
      handle: "@kwamemensah",
      avatar: "KM",
      rating: 5,
      event: "Live Jazz Night",
      text: "Best night out in Accra! The musicians were world-class and the atmosphere was perfect. Can't wait for the next one!",
      likes: 189,
      comments: 8,
      shares: 32,
      hasVideo: false,
      timestamp: "5 hours ago",
      verified: false,
      image: "/jazz-night-review.jpg",
    },
    {
      id: 3,
      author: "Nana Adjoa",
      handle: "@nanadjoa",
      avatar: "NA",
      rating: 4,
      event: "Art Exhibition Opening",
      text: "Great collection of local artists! The venue was beautiful and the networking was fantastic. Worth checking out!",
      likes: 156,
      comments: 6,
      shares: 28,
      hasVideo: false,
      timestamp: "1 day ago",
      verified: true,
      image: "/art-exhibition-review.jpg",
    },
    {
      id: 4,
      author: "Kofi Asante",
      handle: "@kofiasante",
      avatar: "KA",
      rating: 5,
      event: "Hiking Adventure",
      text: "Incredible views from the top! The guide was knowledgeable and the group was amazing. Definitely doing this again!",
      likes: 312,
      comments: 18,
      shares: 67,
      hasVideo: true,
      timestamp: "3 days ago",
      verified: true,
      image: "/hiking-adventure-review.jpg",
    },
  ]

  const comments = {
    1: [
      { author: "John D.", text: "This looks amazing! Adding to my list!", likes: 24 },
      { author: "Sarah M.", text: "I was there too! Loved every moment!", likes: 18 },
    ],
    2: [{ author: "Mike T.", text: "The jazz band was incredible!", likes: 15 }],
  }

  const filteredReviews = reviews.filter(
    (review) =>
      review.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.text.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const trendingReviews = [...reviews].sort((a, b) => b.likes - a.likes)

  const displayReviews = activeTab === "trending" ? trendingReviews : filteredReviews

  const toggleLike = (id: number) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white flex items-center gap-3 sticky top-0 z-10">
        <button onClick={() => onNavigate("home")} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold flex-1">Community</h1>
      </div>

      {/* Search Bar */}
      <div className="px-4 pt-4 pb-2">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search reviews..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-muted text-foreground rounded-full pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-border px-4 pt-4 overflow-x-auto">
        {[
          { id: "trending", label: "Trending", icon: TrendingUp },
          { id: "recent", label: "Recent", icon: null },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id)
              setSearchQuery("")
            }}
            className={`pb-3 font-semibold capitalize transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === tab.id
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.icon && <tab.icon className="h-4 w-4" />}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Reviews Feed */}
      <div className="p-4 space-y-4">
        {displayReviews.length > 0 ? (
          displayReviews.map((review) => (
            <Card key={review.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {/* Author Info */}
              <div className="p-4 flex items-start gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">{review.author}</p>
                    {review.verified && (
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                        ✓
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{review.handle}</p>
                  <p className="text-xs text-muted-foreground mt-1">{review.event}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{review.timestamp}</span>
              </div>

              {/* Rating */}
              <div className="px-4 flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "fill-secondary text-secondary" : "text-muted"}`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="px-4 text-foreground mb-4 leading-relaxed">{review.text}</p>

              {/* Review Image */}
              {review.image && (
                <img src={review.image || "/placeholder.svg"} alt="Review" className="w-full h-48 object-cover mb-4" />
              )}

              {/* Engagement Stats */}
              <div className="px-4 py-3 bg-muted/50 text-xs text-muted-foreground flex gap-4 border-t border-border">
                <span>{review.likes} likes</span>
                <span>{review.comments} comments</span>
                <span>{review.shares} shares</span>
              </div>

              {/* Engagement Buttons */}
              <div className="px-4 py-3 flex items-center justify-between border-t border-border">
                <button
                  onClick={() => toggleLike(review.id)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors flex-1 justify-center py-2"
                >
                  <Heart className={`h-5 w-5 ${liked[review.id] ? "fill-primary text-primary" : ""}`} />
                  <span className="text-sm font-medium">Like</span>
                </button>
                <button
                  onClick={() => setShowComments(showComments === review.id ? null : review.id)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors flex-1 justify-center py-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Comment</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors flex-1 justify-center py-2">
                  <Share2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>

              {/* Comments Section */}
              {showComments === review.id && (
                <div className="px-4 py-4 bg-muted/30 border-t border-border space-y-3">
                  {comments[review.id as keyof typeof comments]?.map((comment, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-foreground">{comment.author}</p>
                        <p className="text-sm text-muted-foreground">{comment.text}</p>
                        <button className="text-xs text-muted-foreground hover:text-primary mt-1">
                          Like ({comment.likes})
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Comment Input */}
                  <div className="flex gap-2 pt-3 border-t border-border">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="flex-1 bg-background text-foreground rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder-muted-foreground"
                    />
                    <button className="text-primary hover:text-primary/80 font-semibold text-sm">Post</button>
                  </div>
                </div>
              )}
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No reviews found</p>
            <Button
              onClick={() => setSearchQuery("")}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/5"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
