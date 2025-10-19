"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Award, Compass } from "lucide-react"
import HeroSection from "../../components/HeroSection"
import SecondaryGallerySection from "../seniorSecondary/components/SecondaryGallerySection"

export default function JuniorSecondaryPage() {
  const subjects = [
    "English Language",
    "Kiswahili",
    "Mathematics",
    "Biology",
    "Chemistry",
    "Physics",
    "History & Citizenship",
    "Geography",
    "Religious Studies",
    "Computer Studies",
    "Business Studies",
    "Physical Education",
    "Creative Arts",
    "Music",
    "Agriculture",
  ]

  const dailySchedule = [
    { time: "8:00 AM - 8:30 AM", activity: "Assembly & Devotion" },
    { time: "8:30 AM - 9:20 AM", activity: "Period 1" },
    { time: "9:20 AM - 10:10 AM", activity: "Period 2" },
    { time: "10:10 AM - 10:40 AM", activity: "Break" },
    { time: "10:40 AM - 11:30 AM", activity: "Period 3" },
    { time: "11:30 AM - 12:20 PM", activity: "Period 4" },
    { time: "12:20 PM - 1:10 PM", activity: "Lunch" },
    { time: "1:10 PM - 2:00 PM", activity: "Period 5" },
    { time: "2:00 PM - 2:50 PM", activity: "Period 6" },
    { time: "2:50 PM - 3:40 PM", activity: "Period 7" },
    { time: "3:40 PM - 4:20 PM", activity: "Co-curricular Activities" },
    { time: "4:20 PM", activity: "Dismissal" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        backgroundImage="/academics/junior-secondary/junior-secondary-1.jpg"
        title="Junior Secondary School"
        description="Standards 7-8 | Ages 14-16 | Preparing for Excellence"
        breadcrumbs={[
          { label: "Academics", link: "/pre-school" },
          { label: "Junior Secondary" }
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
            <h2 className="text-4xl font-bold text-[#0d5c3d] mb-6">Gateway to Secondary Education</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our Junior Secondary program provides intensive preparation for national examinations while fostering
              intellectual curiosity and personal growth. Students engage with challenging academics and develop
              essential life skills.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With specialized teachers and modern facilities, we ensure every student is equipped for success in
              secondary school and beyond.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
              <img src="/academics/junior-secondary/junior-secondary-2.jpg" alt="Junior secondary students" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0d5c3d] mb-12 text-center">Subjects Offered</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-4 text-center border-t-4 border-[#f4c430]"
              >
                <p className="font-semibold text-[#0d5c3d]">{subject}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-[#0d5c3d] mb-12">Daily Schedule</h2>
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
      </section>

            <SecondaryGallerySection images={[
              "/academics/junior-secondary/junior-secondary-1.jpg",
              "/academics/junior-secondary/junior-secondary-2.jpg",
              "/academics/junior-secondary/junior-secondary-3.jpg",
              "/academics/junior-secondary/junior-secondary-4.jpg",
              "/academics/junior-secondary/junior-secondary-5.jpg",
            ]} />

      {/* Features */}
      <section className="bg-[#f4c430] bg-opacity-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0d5c3d] mb-12 text-center">
            Why Choose Junior Secondary at Keyworld
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Exam Preparation", desc: "Focused on success" },
              { icon: Users, title: "Expert Teachers", desc: "Specialized instruction" },
              { icon: Award, title: "Track Record", desc: "Proven results" },
              { icon: Compass, title: "Career Guidance", desc: "Future planning" },
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d5c3d] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Enroll in Junior Secondary</h2>
          <p className="text-xl mb-8">Start your path to secondary school excellence</p>
          <a
            href="/admissions"
            className="inline-block bg-[#f4c430] text-[#0d5c3d] px-8 py-3 font-bold hover:bg-opacity-90 transition"
          >
            Apply Today
          </a>
        </div>
      </section>
    </div>
  )
}
