"use client"

import { motion } from "framer-motion"
import HeroSection from "../../components/HeroSection"

export default function OurStory() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      desc: "Keyworld Academy was established with a vision to provide quality Islamic education",
    },
    { year: "2017", title: "Expansion", desc: "Expanded facilities and introduced new academic programs" },
    { year: "2019", title: "Recognition", desc: "Achieved recognition for academic excellence and student welfare" },
    {
      year: "2021",
      title: "Innovation",
      desc: "Introduced digital learning platforms and modern teaching methodologies",
    },
    { year: "2023", title: "Growth", desc: "Expanded to include secondary school pathway" },
    { year: "2026", title: "Future", desc: "Launching Keyworld Senior Secondary School" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        backgroundImage="/gallery/graduation-2.jpg"
        title="Our Story"
        description="A journey of excellence and growth"
        breadcrumbs={[
          { label: "About", link: "/our-story" },
          { label: "Our story" }
        ]}
      />

      {/* Story Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div {...fadeInUp} className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Keyworld Academy was founded with a singular vision: to create an educational institution that seamlessly
              blends Islamic values with contemporary academic excellence. Located in the heart of Fedha, our school has
              grown from a small initiative to a beacon of quality education in the region.
            </p>

            <p className="text-lg leading-relaxed">
              Our journey began with a commitment to nurturing not just academically brilliant students, but
              well-rounded individuals equipped with moral values, critical thinking skills, and a deep understanding of
              their faith. We believe that true education extends beyond textbooks and examinations.
            </p>

            <p className="text-lg leading-relaxed">
              Over the years, Keyworld Academy has established itself as a trusted institution where parents entrust
              their children's future. Our state-of-the-art facilities, dedicated teaching staff, and holistic approach
              to education have earned us recognition and respect in the educational community.
            </p>

            <p className="text-lg leading-relaxed">
              Today, as we continue to grow and evolve, we remain steadfast in our mission to provide exceptional care
              and foster the intellectual, social, physical, and moral development of every child. Our motto, "Beyond
              Excellence," encapsulates our commitment to going above and beyond in everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5c3d] mb-4">Our Journey</h2>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 bg-[#f4c430] text-[#0d5c3d] font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl font-bold text-[#0d5c3d] mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5c3d] mb-4">What Drives Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Islamic Foundation", desc: "Grounded in Islamic principles and values" },
              { title: "Academic Excellence", desc: "Rigorous curriculum and qualified educators" },
              { title: "Holistic Development", desc: "Nurturing the whole child - mind, body, and spirit" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-8 text-center"
              >
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
