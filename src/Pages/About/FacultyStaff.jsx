"use client"

import { motion } from "framer-motion"
import HeroSection from "../../components/HeroSection"

export default function FacultyStaff() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staffCategories = [
    {
      title: "Teaching Staff",
      description: "Highly qualified educators dedicated to student success",
      count: "45+",
      members: [
        "Mathematics Teachers",
        "English & Literature",
        "Sciences (Biology, Chemistry, Physics)",
        "Islamic Studies",
        "Languages (Kiswahili, Arabic)",
        "Social Studies",
        "Physical Education",
        "Arts & Crafts",
        "Computer Studies",
      ],
    },
    {
      title: "Administrative Staff",
      description: "Ensuring smooth operations and student support",
      count: "12+",
      members: [
        "School Principal",
        "Deputy Principal",
        "Academic Coordinator",
        "Admissions Officer",
        "Finance Manager",
        "HR Manager",
        "Counselors",
        "Administrative Assistants",
      ],
    },
    {
      title: "Support Staff",
      description: "Creating a safe and healthy learning environment",
      count: "30+",
      members: [
        "Kitchen & Catering Staff",
        "Cleaning & Maintenance",
        "Security Personnel",
        "Groundskeeping",
        "Medical Staff",
        "Transportation Coordinators",
        "Library Assistants",
        "IT Support",
      ],
    },
    {
      title: "Specialized Services",
      description: "Providing additional support for student development",
      count: "8+",
      members: [
        "School Counselors",
        "Special Needs Coordinators",
        "Sports Coaches",
        "Music Instructors",
        "Drama & Performing Arts",
        "Debate Coaches",
        "Robotics Instructors",
        "Career Guidance Counselors",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        backgroundImage="/faculty.jpg"
        title="Faculty & Staff"
        description="Meet the dedicated professionals behind Keyworld Academy"
        breadcrumbs={[
          { label: "About", link: "/our-story" },
          { label: "Faculty & Staff" }
        ]}
      />

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our team comprises over 95 dedicated professionals committed to providing exceptional education and care.
              Each member brings unique expertise and passion to create a nurturing learning environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staff Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="space-y-16">
            {staffCategories.map((category, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="border-l-4 border-[#f4c430] pl-8"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-[#0d5c3d] mb-2">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-[#f4c430]">{category.count}</p>
                    <p className="text-gray-600 text-sm">Staff Members</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.members.map((member, memberIdx) => (
                    <div key={memberIdx} className="bg-gray-50 p-4 flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#0d5c3d] flex-shrink-0"></div>
                      <p className="text-gray-700">{member}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5c3d] mb-4">Our Commitment to Excellence</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Continuous Professional Development", desc: "Regular training and workshops for all staff" },
              { title: "Qualified Educators", desc: "All teachers hold relevant degrees and certifications" },
              { title: "Passion for Teaching", desc: "Dedicated professionals who love what they do" },
              { title: "Student-Centered Approach", desc: "Focus on individual student needs and growth" },
            ].map((item, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }} className="bg-white p-8">
                <h3 className="text-xl font-bold text-[#0d5c3d] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
