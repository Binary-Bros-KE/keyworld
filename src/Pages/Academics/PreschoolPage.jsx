"use client"

import { motion } from "framer-motion"
import { Users, Clock, BookOpen, Smile } from "lucide-react"
import HeroSection from "../../components/HeroSection"
import SecondaryGallerySection from "../seniorSecondary/components/SecondaryGallerySection"

export default function PreschoolPage() {
  const teachers = [
    { name: "Mrs. Teacher One", role: "Lead Teacher", experience: "8 years", url: "/staff/teacher-1.jpg" },
    { name: "Mrs. Teacher Two", role: "Assistant Teacher", experience: "5 years", url: "/staff/teacher-6.jpeg" },
    { name: "Mr. Teacher Three", role: "Play Specialist", experience: "6 years", url: "/staff/teacher-3.jpg" },
  ]

  const dailySchedule = [
    { time: "8:00 AM - 8:30 AM", activity: "Arrival & Free Play" },
    { time: "8:30 AM - 9:00 AM", activity: "Circle Time & Greeting" },
    { time: "9:00 AM - 10:00 AM", activity: "Learning Activities" },
    { time: "10:00 AM - 10:30 AM", activity: "Snack Time" },
    { time: "10:30 AM - 11:30 AM", activity: "Outdoor Play & Sports" },
    { time: "11:30 AM - 12:00 PM", activity: "Story Time" },
    { time: "12:00 PM - 1:00 PM", activity: "Lunch" },
    { time: "1:00 PM - 2:00 PM", activity: "Rest Time" },
    { time: "2:00 PM - 3:00 PM", activity: "Creative Activities" },
    { time: "3:00 PM", activity: "Dismissal" },
  ]

  const features = [
    { icon: Smile, title: "Play-Based Learning", desc: "Learning through play and exploration" },
    { icon: Users, title: "Small Class Sizes", desc: "Maximum 20 students per class" },
    { icon: BookOpen, title: "Early Literacy", desc: "Introduction to letters and numbers" },
    { icon: Clock, title: "Flexible Hours", desc: "Full day and half day options" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        backgroundImage="/academics/playgroup/playgroup.jpg"
        title="Preschool (Playgroup)"
        description="Ages 2-4 | Building Foundations for Lifelong Learning"
        breadcrumbs={[
          { label: "Academics", link: "/pre-school" },
          { label: "Pre-School" }
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
            <h2 className="text-4xl font-bold text-[#0d5c3d] mb-6">Welcome to Our Playgroup</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our Preschool program is designed to nurture young learners in a safe, stimulating environment. We focus
              on developing social skills, emotional intelligence, and foundational academic concepts through play-based
              learning.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Children at this stage are naturally curious and eager to explore. Our experienced teachers create
              opportunities for discovery, creativity, and meaningful interactions with peers.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
              <img src="/academics/playgroup/playgroup-2.jpg" alt="Preschool classroom" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0d5c3d] mb-12 text-center">Why Choose Our Preschool</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 text-center"
              >
                <feature.icon className="w-12 h-12 text-[#f4c430] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#0d5c3d] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
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
              className="bg-white border-l-4 border-[#f4c430] p-4"
            >
              <p className="font-bold text-[#0d5c3d]">{item.time}</p>
              <p className="text-gray-600">{item.activity}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SecondaryGallerySection images={[
        "/academics/playgroup/playgroup.jpg",
        "/academics/playgroup/playgroup-2.jpg",
        "/academics/playgroup/playgroup-3.jpg",
        "/academics/playgroup/playgroup-4.jpg",
        "/academics/playgroup/playgroup-5.jpg",
      ]} />

      {/* Teachers */}
      {/* <section className="bg-[#f4c430] bg-opacity-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0d5c3d] mb-12">Our Dedicated Playgroup Teachers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 text-center"
              >
                <img 
                src={teacher.url} 
                alt={teacher.name} 
                className="w-60 h-80 rounded-full mx-auto"
                />
                <h3 className="text-xl font-bold text-[#0d5c3d]">{teacher.name}</h3>
                <p className="text-[#f4c430] font-semibold mb-2">{teacher.role}</p>
                <p className="text-gray-600">{teacher.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-[#0d5c3d] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Child's Journey?</h2>
          <p className="text-xl mb-8">Join our vibrant preschool community today</p>
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
