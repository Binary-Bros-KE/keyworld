"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Trophy, Lightbulb } from "lucide-react"
import HeroSection from "../../components/HeroSection"
import SecondaryGallerySection from "../seniorSecondary/components/SecondaryGallerySection"

export default function ElementaryPage() {
  const grades = [
    { level: "Pre-Primary 1 (PP1)", ages: "Ages 4-6", focus: "Foundation Building" },
    { level: "Pre-Primary 2 (PP2)", ages: "Ages 6-9", focus: "Core Skills Development" },
  ]

  const subjects = [
    "English Language",
    "Kiswahili",
    "Mathematics",
    "Science",
    "Social Studies",
    "Religious Studies",
    "Physical Education",
    "Creative Arts",
    "Computer Studies",
    "Music",
  ]

  const dailySchedule = [
    { time: "8:00 AM - 8:30 AM", activity: "Assembly & Devotion" },
    { time: "8:30 AM - 10:00 AM", activity: "Core Subjects (Math/English)" },
    { time: "10:00 AM - 10:30 AM", activity: "Break Time" },
    { time: "10:30 AM - 12:00 PM", activity: "Language & Literacy" },
    { time: "12:00 PM - 1:00 PM", activity: "Lunch" },
    { time: "1:00 PM - 2:30 PM", activity: "Science & Social Studies" },
    { time: "2:30 PM - 3:00 PM", activity: "Creative Activities" },
    { time: "3:00 PM - 3:30 PM", activity: "Sports & Recreation" },
    { time: "3:30 PM", activity: "Dismissal" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        backgroundImage="/academics/elementary/elementary-4.jpg"
        title="Pre primary"
        description="PP1, PP2 | Ages 4-12"
        breadcrumbs={[
          { label: "Academics", link: "/pre-school" },
          { label: "Pre primary" }
        ]}
      />

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#0d5c3d] mb-6">Building Strong Foundations</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our Pre primary program provides a comprehensive, well-rounded education that develops critical thinking,
              creativity, and character. Students engage in rigorous academics while developing social-emotional skills.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We use a balanced approach combining traditional teaching methods with modern pedagogies to ensure every
              child reaches their full potential.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
              <img src="/academics/elementary/elementary-1.jpg" alt="Pre primary classroom" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0d5c3d] mb-12 text-center">Our Grade Levels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {grades.map((grade, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 border-t-4 border-[#f4c430]"
              >
                <h3 className="text-2xl font-bold text-[#0d5c3d] mb-2">{grade.level}</h3>
                <p className="text-[#f4c430] font-semibold mb-4">{grade.ages}</p>
                <p className="text-gray-600">{grade.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-[#0d5c3d] mb-12">Subjects Offered</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#f4c430] bg-opacity-20 p-4 text-center border-l-4 border-[#f4c430]"
            >
              <p className="font-semibold text-[#0d5c3d]">{subject}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0d5c3d] mb-12">Typical Daily Schedule</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {dailySchedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border-l-4 border-[#0d5c3d] p-4"
              >
                <p className="font-bold text-[#0d5c3d]">{item.time}</p>
                <p className="text-gray-600">{item.activity}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-[#0d5c3d] mb-12 text-center">Why Pre primary at Keyworld</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: BookOpen, title: "Comprehensive Curriculum", desc: "Well-rounded education" },
            { icon: Users, title: "Supportive Community", desc: "Collaborative learning" },
            { icon: Trophy, title: "Excellence Focus", desc: "High academic standards" },
            { icon: Lightbulb, title: "Innovation", desc: "Modern teaching methods" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 text-center"
            >
              <item.icon className="w-12 h-12 text-[#f4c430] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#0d5c3d] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SecondaryGallerySection images={[
        "/academics/elementary/elementary-1.jpg",
        "/academics/elementary/elementary-2.jpg",
        "/academics/elementary/elementary-3.jpg",
        "/academics/elementary/elementary-4.jpg",
        "/academics/elementary/elementary-5.jpg",
      ]} />

      {/* CTA */}
      <section className="bg-[#0d5c3d] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Enroll Your Child Today</h2>
          <p className="text-xl mb-8">Give them the best Pre primary education</p>
          <a
            href="/admission"
            className="inline-block bg-[#f4c430] text-[#0d5c3d] px-8 py-3 font-bold hover:bg-opacity-90 transition"
          >
            Start Application
          </a>
        </div>
      </section>
    </div>
  )
}
