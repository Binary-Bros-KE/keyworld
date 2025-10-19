"use client"

import { useState } from "react"
import { CheckCircle, AlertCircle, Mail, Phone, MapPin, Upload } from "lucide-react"
import HeroSection from "../../components/HeroSection.jsx"

export default function Admissions() {
    const [formData, setFormData] = useState({
        studentName: "",
        studentDOB: "",
        parentName: "",
        parentEmail: "",
        parentPhone: "",
        currentSchool: "",
        classLevel: "",
        message: "",
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    const preAdmissionDocs = [
        "Copy of Child's Birth Certificate",
        "Copy of Parent's/Guardian's Valid ID or Passport",
        "Copy of Pupil's Valid Pass/Visa (if not a Kenyan citizen)",
        "Passport Size Photographs (2 for student, 1 for each parent/guardian)",
        "Copy of Mother's ID Card/Passport and 1 Passport Size Photo",
        "Copy of Father's ID Card/Passport and 1 Passport Size Photo",
        "Certified Copy of Last Report from Previous School",
        "Certified Copy of Student's Leaving Certificate/Clearance Letter",
        "NEMIS Number and Assessment Number (if applicable)",
        "Copy of Previous Assessment Results",
    ]

    const admissionSteps = [
        {
            step: 1,
            title: "Submit Application",
            description:
                "Complete the admission request form with student and parent information. Our enrollment officers will review your application.",
        },
        {
            step: 2,
            title: "Document Submission",
            description:
                "Prepare and submit all required documents in soft copy. Hard copies will be needed during your school visit.",
        },
        {
            step: 3,
            title: "School Visit & Assessment",
            description:
                "Visit Keyworld Academy to complete the admission process. Your child will undergo oral/written assessments conducted by our qualified staff.",
        },
        {
            step: 4,
            title: "Assessment Review",
            description:
                "Our School Principal reviews assessment results. Admission decisions are communicated within 24 business hours.",
        },
        {
            step: 5,
            title: "Offer Acceptance",
            description:
                "Parents/Guardians receive an admission offer letter. Accept the offer based on instructions provided in the letter.",
        },
        {
            step: 6,
            title: "Fee Payment & Enrollment",
            description:
                "Pay the non-refundable admission fee and full-term school fees. Admission to class is granted upon completion of full payment.",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}

            <HeroSection
                backgroundImage="/about/admissions-banner.jpg"
                title="Admissions"
                description="Join Keyworld Academy and begin your journey to excellence"
                breadcrumbs={[
                    { label: "About", link: "/our-story" },
                    { label: "Admissions" }
                ]}
            />

            {/* Quick Info Section */}
            <section className="py-12 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <MapPin size={32} className="text-primary" />
                                <h3 className="text-lg font-bold text-secondary">Location</h3>
                            </div>
                            <p className="text-neutral-600">Fedha, Nairobi County</p>
                            <p className="text-neutral-600">P.O BOX 10431-00400</p>
                        </div>

                        <div className="bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <Phone size={32} className="text-primary" />
                                <h3 className="text-lg font-bold text-secondary">Contact</h3>
                            </div>
                            <p className="text-neutral-600">Office: +254 20 800 0932</p>
                            <p className="text-neutral-600">Mobile: +254 722 111 805</p>
                        </div>

                        <div className="bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <Mail size={32} className="text-primary" />
                                <h3 className="text-lg font-bold text-secondary">Email</h3>
                            </div>
                            <p className="text-neutral-600">admissions@keyworldacademy.ac.ke</p>
                            <p className="text-neutral-600">info@keyworldacademy.ac.ke</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission Process Steps */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-secondary mb-3">Admission Process</h2>
                        <p className="text-xl text-primary font-semibold">Six Simple Steps to Join Keyworld Academy</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {admissionSteps.map((item) => (
                            <div key={item.step} className="bg-neutral-50 p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
                                </div>
                                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Required Documents Section */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-secondary mb-3">Required Documents</h2>
                        <p className="text-xl text-primary font-semibold mb-4">Pre-Admission Documentation</p>
                        <p className="text-neutral-600 max-w-2xl mx-auto">
                            Please prepare the following documents in soft copy to upload with your application and hard copy for your
                            file at the school. Our Enrollment Officers are ready to assist you at any point.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {preAdmissionDocs.map((doc, index) => (
                            <div key={index} className="bg-white p-6 shadow-sm flex items-start gap-4">
                                <CheckCircle size={24} className="text-accent-green flex-shrink-0 mt-1" />
                                <p className="text-neutral-700 font-medium">{doc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-primary text-secondary p-8 max-w-4xl mx-auto">
                        <div className="flex items-start gap-4">
                            <AlertCircle size={28} className="flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Important Note</h3>
                                <p className="leading-relaxed">
                                    You will need to have a copy of the Birth Certificate and Parent ID attached to submit your
                                    application. You may upload the other documents later in your application process. Admission to class
                                    will ONLY be granted upon completion of the full admission process and payment of full-term school
                                    fees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission Request Form */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-secondary mb-3">Admission Request Form</h2>
                        <p className="text-neutral-600">
                            Fill out this form to request admission. Our enrollment team will contact you shortly to guide you through
                            the process.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-neutral-50 p-10 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Student Name */}
                            <div>
                                <label className="block text-sm font-semibold text-secondary mb-2">Student's Full Name *</label>
                                <input
                                    type="text"
                                    name="studentName"
                                    value={formData.studentName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter student's full name"
                                />
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label className="block text-sm font-semibold text-secondary mb-2">Date of Birth *</label>
                                <input
                                    type="date"
                                    name="studentDOB"
                                    value={formData.studentDOB}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            {/* Parent Name */}
                            <div>
                                <label className="block text-sm font-semibold text-secondary mb-2">Parent/Guardian Name *</label>
                                <input
                                    type="text"
                                    name="parentName"
                                    value={formData.parentName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter parent/guardian name"
                                />
                            </div>

                            {/* Parent Email */}
                            <div>
                                <label className="block text-sm font-semibold text-secondary mb-2">Parent Email *</label>
                                <input
                                    type="email"
                                    name="parentEmail"
                                    value={formData.parentEmail}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter parent email"
                                />
                            </div>

                            {/* Parent Phone */}
                            <div>
                                <label className="block text-sm font-semibold text-secondary mb-2">Parent Phone Number *</label>
                                <input
                                    type="tel"
                                    name="parentPhone"
                                    value={formData.parentPhone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter phone number"
                                />
                            </div>

                            {/* Current School */}
                            <div>
                                <label className="block text-sm font-semibold text-secondary mb-2">Current School</label>
                                <input
                                    type="text"
                                    name="currentSchool"
                                    value={formData.currentSchool}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter current school name"
                                />
                            </div>

                            {/* Class Level */}
                            <div>
                                <label className="block text-sm font-semibold text-secondary mb-2">Desired Class Level *</label>
                                <select
                                    name="classLevel"
                                    value={formData.classLevel}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="">Select class level</option>
                                    <option value="preschool">Preschool</option>
                                    <option value="reception">Reception</option>
                                    <option value="grade1">Grade 1</option>
                                    <option value="grade2">Grade 2</option>
                                    <option value="grade3">Grade 3</option>
                                    <option value="grade4">Grade 4</option>
                                    <option value="grade5">Grade 5</option>
                                    <option value="grade6">Grade 6</option>
                                    <option value="grade7">Grade 7</option>
                                    <option value="grade8">Grade 8</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-secondary mb-2">Additional Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Tell us anything else you'd like us to know..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="bg-primary hover:bg-primary-hover text-secondary font-bold py-3 px-8 transition-colors flex items-center gap-2"
                            >
                                <Upload size={20} />
                                Submit Application
                            </button>
                            <button
                                type="reset"
                                className="bg-neutral-300 hover:bg-neutral-400 text-neutral-800 font-bold py-3 px-8 transition-colors"
                            >
                                Clear Form
                            </button>
                        </div>

                        {/* Success Message */}
                        {submitted && (
                            <div className="mt-6 bg-accent-green text-white p-4 flex items-center gap-3">
                                <CheckCircle size={24} />
                                <p className="font-semibold">Thank you! Your application has been submitted. We'll contact you soon.</p>
                            </div>
                        )}
                    </form>

                    <div className="mt-8 bg-neutral-100 p-6 text-center">
                        <p className="text-neutral-700 mb-3">
                            <strong>Note:</strong> This form will be integrated with formsubmit.co to send your information directly
                            to our admissions team.
                        </p>
                        <p className="text-sm text-neutral-600">
                            For immediate assistance, please call us at +254 20 800 0932 or +254 722 111 805
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-secondary mb-4">Ready to Join Keyworld Academy?</h2>
                    <p className="text-xl text-secondary-dark mb-8">
                        Take the first step towards an excellent education. Visit our campus or submit your application today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-secondary hover:bg-secondary-hover text-white font-bold py-3 px-8 transition-colors">
                            Schedule a Campus Visit
                        </button>
                        <button className="bg-white hover:bg-neutral-100 text-primary font-bold py-3 px-8 transition-colors">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
