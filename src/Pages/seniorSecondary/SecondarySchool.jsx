"use client"

import { useState } from "react"
import {
    BookOpen,
    Zap,
    Microscope,
    Users,
    Award,
    CheckCircle,
    ArrowRight,
    Phone,
    Mail,
    MapPin,
    Calendar,
} from "lucide-react"
import SecondaryGallerySection from "./components/SecondaryGallerySection"
import CountdownWidget from "./components/CountdownWidget.jsx"

export default function SecondarySchool() {
    const [activePathway, setActivePathway] = useState("stem")

    const stemSubjects = [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Studies",
        "Electricity",
        "General Science",
        "English",
        "Kiswahili",
    ]

    const socialSciencesSubjects = [
        "History & Citizenship",
        "Geography",
        "Business Studies",
        "Religious Studies",
        "Arabic",
        "English",
        "Kiswahili",
        "Home Science",
        "Agriculture",
    ]

    const allSubjects = [
        "English",
        "Kiswahili",
        "Mathematics",
        "Biology",
        "Physics",
        "Chemistry",
        "Agriculture",
        "Home Science",
        "Aviation",
        "History & Citizenship",
        "Geography",
        "Business Studies",
        "Computer Studies",
        "Religious Studies",
        "Electricity",
        "Arabic",
        "General Science",
        "Building & Construction",
    ]

    return (
        <div className="min-h-screen bg-white max-w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-[url('/senior-secondary/senior-secondary-banner.png')] bg-cover bg-center flex items-center justify-center">
                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <div className="mb-6 inline-block px-6 py-2">
                        <CountdownWidget />
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">Keyworld Senior Secondary School</h1>
                    <p className="text-md md:text-xl mb-4 text-white font-bold">Shaping Tomorrow's Leaders, Today</p>
                    <p className="text-sm md:text-md text-neutral-100 max-w-3xl mx-auto mb-10 leading-relaxed max-md:w-100">
                        A fully equipped institution with state-of-the-art laboratories, workshops, and learning facilities designed
                        to provide an all-round education that prepares learners for excellence in higher education and beyond.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="w-fit bg-primary hover:bg-secondary-hover text-white font-bold py-2 px-8 transition-colors flex items-center justify-center gap-2 rounded-md cursor-pointer">
                            Secure Your Place <ArrowRight size={20} />
                        </button>
                        <button className="w-fit border-2 border-white text-white hover:bg-secondary hover:text-primary font-bold py-2 px-8 transition-colors rounded-md cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Quick Info Section */}
            <section className="py-12 bg-secondary">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-white text-center">
                            <MapPin size={40} className="mx-auto mb-4 text-primary" />
                            <h3 className="text-xl font-bold mb-2">Location</h3>
                            <p className="text-neutral-100">Off Fedha Road, Tassia Embakasi, Nairobi</p>
                        </div>
                        <div className="text-white text-center">
                            <Phone size={40} className="mx-auto mb-4 text-primary" />
                            <h3 className="text-xl font-bold mb-2">Contact</h3>
                            <p className="text-neutral-100">+254 20 800 0932 | +254 722 111 805</p>
                        </div>
                        <div className="text-white text-center">
                            <Calendar size={40} className="mx-auto mb-4 text-primary" />
                            <h3 className="text-xl font-bold mb-2">Opening</h3>
                            <p className="text-neutral-100">January 2026</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-primary mb-4">Why Choose Keyworld Senior School?</h2>
                        <p className="text-xl text-secondary font-semibold">Excellence in Every Aspect</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-neutral-50 p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                                <Microscope size={32} className="text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">State-of-the-Art Facilities</h3>
                            <p className="text-neutral-700 leading-relaxed">
                                Fully equipped laboratories, modern workshops, and advanced learning spaces designed to support hands-on
                                education and practical skill development.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-neutral-50 p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-6">
                                <Users size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Specially Trained Teachers</h3>
                            <p className="text-neutral-700 leading-relaxed">
                                Our faculty comprises competent and specially trained educators with expertise in their respective
                                fields, committed to student success.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-neutral-50 p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                                <Award size={32} className="text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Personalized Support</h3>
                            <p className="text-neutral-700 leading-relaxed">
                                We provide individualized academic support and mentoring to ensure every student reaches their full
                                potential and achieves excellence.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-neutral-50 p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-6">
                                <BookOpen size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Comprehensive Curriculum</h3>
                            <p className="text-neutral-700 leading-relaxed">
                                Diverse pathways and subjects offering students the flexibility to pursue their interests and career
                                aspirations.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-neutral-50 p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                                <Zap size={32} className="text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Innovation & Technology</h3>
                            <p className="text-neutral-700 leading-relaxed">
                                Integration of modern technology and innovative teaching methods to prepare students for the digital
                                age.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-neutral-50 p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-6">
                                <CheckCircle size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Character Development</h3>
                            <p className="text-neutral-700 leading-relaxed">
                                Strong focus on discipline, integrity, and character development alongside academic excellence and
                                leadership skills.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pathways Section */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-primary mb-4">Academic Pathways</h2>
                        <p className="text-xl text-secondary font-semibold">Choose Your Path to Success</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* STEM Pathway */}
                        <div
                            onClick={() => setActivePathway("stem")}
                            className={`p-8 cursor-pointer transition-all ${activePathway === "stem" ? "bg-primary text-white shadow-lg" : "bg-white text-primary hover:shadow-md"
                                }`}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <Microscope size={40} />
                                <h3 className="text-3xl font-bold">STEM Pathway</h3>
                            </div>
                            <p
                                className={`text-lg leading-relaxed ${activePathway === "stem" ? "text-neutral-100" : "text-neutral-700"}`}
                            >
                                Science, Technology, Engineering, and Mathematics - Perfect for students interested in pursuing careers
                                in engineering, medicine, technology, and scientific research.
                            </p>
                        </div>

                        {/* Social Sciences Pathway */}
                        <div
                            onClick={() => setActivePathway("social")}
                            className={`p-8 cursor-pointer transition-all ${activePathway === "social"
                                ? "bg-secondary text-white shadow-lg"
                                : "bg-white text-primary hover:shadow-md"
                                }`}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <BookOpen size={40} />
                                <h3 className="text-3xl font-bold">Social Sciences</h3>
                            </div>
                            <p
                                className={`text-lg leading-relaxed ${activePathway === "social" ? "text-neutral-100" : "text-neutral-700"}`}
                            >
                                History, Geography, Business, and Humanities - Ideal for students interested in law, business,
                                diplomacy, education, and social sciences.
                            </p>
                        </div>
                    </div>

                    {/* Subjects Display */}
                    <div className="bg-white p-12">
                        <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                            {activePathway === "stem" ? "STEM Subjects" : "Social Sciences Subjects"}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {(activePathway === "stem" ? stemSubjects : socialSciencesSubjects).map((subject, index) => (
                                <div
                                    key={index}
                                    className="bg-neutral-50 p-4 text-center hover:bg-primary hover:text-secondary transition-colors"
                                >
                                    <p className="font-semibold">{subject}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* All Subjects Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-primary mb-4">Complete Subject Offering</h2>
                        <p className="text-xl text-secondary font-semibold">18 Subjects Across All Pathways</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {allSubjects.map((subject, index) => (
                            <div
                                key={index}
                                className="bg-neutral-50 p-6 text-center hover:bg-secondary hover:text-white transition-colors"
                            >
                                <p className="font-semibold">{subject}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Promise Section */}
            <section className="py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-white mb-4">Our Promise to You</h2>
                        <p className="text-xl text-secondary font-semibold">Commitment to Excellence</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-4 items-start">
                            <CheckCircle size={32} className="text-secondary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Competent & Trained Teachers</h3>
                                <p className="text-neutral-100">
                                    Our faculty is specially trained and certified in their respective fields with years of experience in
                                    secondary education.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <CheckCircle size={32} className="text-secondary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Personalized Academic Support</h3>
                                <p className="text-neutral-100">
                                    Individual attention and tailored support to help each student achieve their academic goals and
                                    potential.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <CheckCircle size={32} className="text-secondary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Safe & Inspiring Environment</h3>
                                <p className="text-neutral-100">
                                    A nurturing, secure, and inspiring learning environment that fosters growth, creativity, and
                                    innovation.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <CheckCircle size={32} className="text-secondary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Innovation & Excellence</h3>
                                <p className="text-neutral-100">
                                    Strong emphasis on innovation, discipline, and character development alongside academic excellence and
                                    leadership.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SecondaryGallerySection images={[
                "/senior-secondary/keyworld-senior-secondary-gallery-1.png",
                "/senior-secondary/keyworld-senior-secondary-gallery-2.png",
                "/senior-secondary/keyworld-senior-secondary-gallery-3.png",
                "/senior-secondary/keyworld-senior-secondary-gallery-4.png",
                "/senior-secondary/keyworld-senior-secondary-gallery-5.jpg",
            ]} />


            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-primary mb-4">Get In Touch</h2>
                        <p className="text-xl text-secondary font-semibold">We'd Love to Hear From You</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Address */}
                        <div className="bg-neutral-50 p-8 text-center">
                            <MapPin size={40} className="mx-auto mb-4 text-primary" />
                            <h3 className="text-xl font-bold text-primary mb-3">Address</h3>
                            <p className="text-neutral-700">
                                Off Fedha Road
                                <br />
                                Tassia Embakasi
                                <br />
                                Nairobi County
                                <br />
                                P.O BOX 10431-00400
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="bg-neutral-50 p-8 text-center">
                            <Phone size={40} className="mx-auto mb-4 text-primary" />
                            <h3 className="text-xl font-bold text-primary mb-3">Phone</h3>
                            <p className="text-neutral-700 mb-2">Office: +254 20 800 0932</p>
                            <p className="text-neutral-700">Mobile: +254 722 111 805</p>
                        </div>

                        {/* Email */}
                        <div className="bg-neutral-50 p-8 text-center">
                            <Mail size={40} className="mx-auto mb-4 text-primary" />
                            <h3 className="text-xl font-bold text-primary mb-3">Email</h3>
                            <p className="text-neutral-700">admin@keyworldacademy.ac.ke</p>
                            <p className="text-neutral-700 text-sm mt-2">For inquiries about admissions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admissions CTA Section */}
            <section className="py-20 bg-secondary">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-5xl font-bold text-white mb-6">Admissions Now Open</h2>
                    <p className="text-xl text-neutral-100 mb-8 leading-relaxed">
                        Secure your child's place at Keyworld Senior Secondary School and be part of an institution that goes Beyond
                        Excellence. Limited spaces available for our inaugural cohort.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primary hover:bg-primary-dark text-secondary font-bold py-4 px-8 transition-colors flex items-center justify-center gap-2">
                            Apply Now <ArrowRight size={20} />
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold py-4 px-8 transition-colors">
                            Request Information
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
