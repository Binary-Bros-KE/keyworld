"use client"

import { motion } from "framer-motion"
import { Users, Calendar } from "lucide-react"
import HeroSection from "../../components/HeroSection"

export default function SportsPage() {
  const sports = [
    {
      name: "Football",
      description: "Competitive football program with professional coaching and regular tournaments.",
      icon: "⚽",
      teams: "U-10, U-12, U-14, U-16",
      season: "Year-round",
      image: "/blog/football-team.png",
    },
    {
      name: "Hockey",
      description: "Field hockey program developing skills and teamwork with experienced coaches.",
      icon: "🏑",
      teams: "U-12, U-14, U-16",
      season: "March - September",
      image: "/sports/hockey.jpg",
    },
    {
      name: "Swimming",
      description: "Professional swimming lessons and competitive swimming team training.",
      icon: "🏊",
      teams: "All ages",
      season: "Year-round",
      image: "/sports/swimming.jpg",
    },
    {
      name: "Skating",
      description: "Roller skating and ice skating programs for beginners to advanced skaters.",
      icon: "⛸️",
      teams: "All ages",
      season: "Year-round",
      image: "/sports/skating.jpg",
    },
    {
      name: "Chess",
      description: "Strategic thinking and competitive chess club with regular tournaments.",
      icon: "♟️",
      teams: "All ages",
      season: "Year-round",
      image: "/sports/chess.jpg",
    },
    {
      name: "Volleyball",
      description: "Team volleyball with focus on coordination, communication, and competitive play.",
      icon: "🏐",
      teams: "U-12, U-14, U-16",
      season: "August - November",
      image: "/sports/volleyball.jpg",
    },
    {
      name: "Rope Jumping",
      description: "Rope Jumping games for fun competitions and simple challenges.",
      icon: "➰",
      teams: "U-10, U-12, U-14, U-16",
      season: "Year-round",
      image: "/sports/rope_jumping.jpg",
    },
    {
      name: "Ice Skating",
      description: "Track and field events including sprints, distance running, and field events.",
      icon: "⛸️",
      teams: "All ages",
      season: "August - October",
      image: "/sports/ice_skating.jpg",
    },
  ]

  const benefits = [
    { title: "Physical Fitness", description: "Build strength, endurance, and overall health" },
    { title: "Teamwork", description: "Learn collaboration and communication skills" },
    { title: "Leadership", description: "Develop confidence and leadership abilities" },
    { title: "Discipline", description: "Build character through commitment and dedication" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        backgroundImage="/academics/junior-secondary/junior-secondary-2.jpg"
        title="Sports & Athletics"
        description="Excellence through competition and teamwork"
        breadcrumbs={[
          { label: "School Life", link: "/sports" },
          { label: "Sports" }
        ]}
      />

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5c3d] mb-12 text-center">Why Sports Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 border-l-4 border-[#f4c430]"
              >
                <h3 className="text-lg font-bold text-[#0d5c3d] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Offerings */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5c3d] mb-12 text-center">Our Sports Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sports.map((sport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-70 bg-gray-200 overflow-hidden">
                  <img
                    src={sport.image || "/placeholder.svg"}
                    alt={sport.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{sport.icon}</span>
                    <h3 className="text-2xl font-bold text-[#0d5c3d]">{sport.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{sport.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users size={16} className="text-[#f4c430]" />
                      <span>
                        <strong>Teams:</strong> {sport.teams}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar size={16} className="text-[#f4c430]" />
                      <span>
                        <strong>Season:</strong> {sport.season}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f4c430] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0d5c3d] mb-4">Join Our Sports Community</h2>
          <p className="text-lg text-[#0d5c3d] mb-6">Discover your passion and excel in sports at Keyworld Academy</p>
          <button className="bg-[#0d5c3d] text-white px-8 py-3 font-bold hover:bg-[#0a4a2f] transition-colors">
            Register for Sports
          </button>
        </div>
      </section>
    </div>
  )
}
