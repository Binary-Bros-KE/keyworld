"use client"

import { motion } from "framer-motion"
import HeroSection from "../../components/HeroSection"

export default function PrincipalsMessage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        backgroundImage="/staff/staff-banner.jpg"
        title="Principal's Message"
        description="A word from our school leadership"
        breadcrumbs={[
          { label: "About", link: "/our-story" },
          { label: "Principle's Message" }
        ]}
      />

      {/* Message Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Principal Image */}
            <motion.div {...fadeInUp} className="md:col-span-1">
              <div className="bg-gray-200 aspect-square flex items-center justify-center mb-6">
                <img src="/staff/Principle-Joseph-Orenge.jpg" alt="Principal" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#0d5c3d]">Mr. Joseph Orenge</h3>
                <p className="text-gray-600">Principal, Keyworld Academy</p>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="md:col-span-2">
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Welcome to Keyworld Academy, where we believe that education is not merely about imparting knowledge,
                  but about nurturing well-rounded individuals who are prepared to make meaningful contributions to
                  society.
                </p>

                <p className="text-lg leading-relaxed">
                  Since our establishment, we have remained committed to providing an environment where every child can
                  thrive academically, socially, and spiritually. Our dedicated team of educators works tirelessly to
                  ensure that each student receives personalized attention and support to reach their full potential.
                </p>

                <p className="text-lg leading-relaxed">
                  At Keyworld Academy, we integrate Islamic values with contemporary education, creating a unique
                  learning experience that prepares our students not just for examinations, but for life. We believe in
                  fostering critical thinking, creativity, and compassion in all our learners.
                </p>

                <p className="text-lg leading-relaxed">
                  Our state-of-the-art facilities, combined with our team of highly qualified and passionate educators,
                  provide the perfect foundation for academic excellence. We encourage our students to explore their
                  interests, develop their talents, and embrace challenges as opportunities for growth.
                </p>

                <p className="text-lg leading-relaxed">
                  I invite you to join our Keyworld Academy family. Together, we will nurture the leaders and innovators
                  of tomorrow, guided by our motto: "Beyond Excellence."
                </p>

                <div className="pt-6 border-t-2 border-[#f4c430]">
                  <p className="font-bold text-[#0d5c3d]">Mr. Joseph Orenge</p>
                  <p className="text-gray-600">Principal</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Highlights */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5c3d] mb-4">Our Leadership Commitment</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📚", title: "Academic Excellence", desc: "Ensuring rigorous and relevant curriculum" },
              { icon: "🤝", title: "Student Welfare", desc: "Prioritizing holistic development" },
              { icon: "🌟", title: "Innovation", desc: "Embracing modern teaching methodologies" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
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
