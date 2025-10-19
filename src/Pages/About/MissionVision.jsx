"use client"

import { motion } from "framer-motion"
import HeroSection from "../../components/HeroSection.jsx"

export default function MissionVision() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    }

    return (
        <div className="min-h-screen bg-white">



            <HeroSection
                backgroundImage="/about/vision-banner.jpg"
                title="Our Mission & Vision"
                description="Guiding Keyworld Academy towards excellence and holistic development"
                breadcrumbs={[
                    { label: "About", link: "/our-story" },
                    { label: "Vision and Mission" }
                ]}
            />

            {/* Mission Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5c3d] mb-6">Our Mission</h2>
                            <div className="space-y-4 text-gray-700">
                                <p className="text-lg leading-relaxed">
                                    To provide exceptional care and foster each child's intellectual, social, physical, and moral
                                    development in an academically rich environment.
                                </p>
                                <div className="space-y-3 mt-6">
                                    <div className="flex gap-3">
                                        <div className="w-2 h-2 bg-[#f4c430] mt-2 flex-shrink-0"></div>
                                        <p>Provide exceptional care to every child</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2 h-2 bg-[#f4c430] mt-2 flex-shrink-0"></div>
                                        <p>Foster intellectual, social, physical, and moral development</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2 h-2 bg-[#f4c430] mt-2 flex-shrink-0"></div>
                                        <p>Create an academically rich learning environment</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2 h-2 bg-[#f4c430] mt-2 flex-shrink-0"></div>
                                        <p>Nurture Islamic values and principles</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                            <div className="bg-gray-200 h-80 flex items-center justify-center">
                                <img src="/about/vision-image.jpg" alt="Mission" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                            <div className="bg-gray-200 h-80 flex items-center justify-center">
                                <img src="/about/mission-image.jpg" alt="Vision" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5c3d] mb-6">Our Vision</h2>
                            <div className="space-y-4 text-gray-700">
                                <p className="text-lg leading-relaxed">
                                    To equip students with essential knowledge, critical thinking, digital literacy, life skills, and
                                    social-emotional competencies for success in their personal and professional lives.
                                </p>
                                <div className="space-y-3 mt-6">
                                    <div className="flex gap-3">
                                        <div className="w-2 h-2 bg-[#f4c430] mt-2 flex-shrink-0"></div>
                                        <p>Develop critical thinking and problem-solving skills</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2 h-2 bg-[#f4c430] mt-2 flex-shrink-0"></div>
                                        <p>Build digital literacy and technological competence</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2 h-2 bg-[#f4c430] mt-2 flex-shrink-0"></div>
                                        <p>Foster social-emotional intelligence</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-2 h-2 bg-[#f4c430] mt-2 flex-shrink-0"></div>
                                        <p>Prepare leaders and innovators for the modern world</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6 md:px-8">
                    <motion.div className="text-center mb-12" {...fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0d5c3d] mb-4">Our Core Values</h2>
                        <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: "Excellence", desc: "Striving for the highest standards in all endeavors" },
                            { title: "Integrity", desc: "Upholding honesty and moral principles" },
                            { title: "Inclusivity", desc: "Welcoming and supporting every student" },
                            { title: "Innovation", desc: "Embracing creative and forward-thinking approaches" },
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-50 p-8 text-center"
                            >
                                <h3 className="text-xl font-bold text-[#0d5c3d] mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
