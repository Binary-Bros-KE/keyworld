"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Zap, Target } from "lucide-react"
import HeroSection from "../../components/HeroSection"
import SecondaryGallerySection from "../seniorSecondary/components/SecondaryGallerySection"

export default function MiddleSchoolPage() {
  const subjects = [
    "English Language",
    "Kiswahili",
    "Mathematics",
    "Science",
    "Social Studies",
    "History & Citizenship",
    "Religious Studies",
    "Computer Studies",
    "Physical Education",
    "Creative Arts",
    "Music",
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
    { time: "2:50 PM - 3:30 PM", activity: "Co-curricular Activities" },
    { time: "3:30 PM", activity: "Dismissal" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        backgroundImage="/about/mission-image.jpg"
        title="Middle School"
        description="Grades 1-6 | Ages 12-14 | Building Leaders"
        breadcrumbs={[
          { label: "Academics", link: "/pre-school" },
          { label: "Middle School" }
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
            <h2 className="text-4xl font-bold text-[#0d5c3d] mb-6">Transition to Excellence</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Middle School is a critical period of development. Our program bridges elementary and secondary education,
              preparing students for advanced academics while nurturing their growing independence and leadership
              skills.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Students explore diverse subjects, develop critical thinking, and engage in meaningful projects that
              connect learning to real-world applications.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
              <img src="/academics/middle-school/middle-school-1.jpg" alt="Middle school students" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0d5c3d] mb-12 text-center">Comprehensive Subject Offering</h2>
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
        "/about/mission-image.jpg",
        "/academics/middle-school/middle-school-1.jpg",
        "/academics/middle-school/middle-school-2.jpg",
        "/academics/middle-school/middle-school-3.jpg",
        "/academics/middle-school/middle-school-4.jpg",
      ]} />

      {/* Features */}
      <section className="bg-[#f4c430] bg-opacity-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0d5c3d] mb-12 text-center">Middle School Experience</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Advanced Academics", desc: "Rigorous curriculum" },
              { icon: Users, title: "Leadership Programs", desc: "Student leadership" },
              { icon: Zap, title: "STEM Focus", desc: "Science & Technology" },
              { icon: Target, title: "Career Exploration", desc: "Future planning" },
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
          <h2 className="text-4xl font-bold mb-6">Join Our Middle School</h2>
          <p className="text-xl mb-8">Prepare for secondary school success</p>
          <a
            href="/admission"
            className="inline-block bg-[#f4c430] text-[#0d5c3d] px-8 py-3 font-bold hover:bg-opacity-90 transition"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  )
}
