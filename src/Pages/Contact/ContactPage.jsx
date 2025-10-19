"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import HeroSection from "../../components/HeroSection"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
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
        setTimeout(() => {
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
            setSubmitted(false)
        }, 3000)
    }

    return (
        <div className="min-h-screen bg-white">
            <HeroSection
                backgroundImage="/senior-secondary/keyworld-senior-secondary-gallery-1.png"
                title="Get In Touch"
                description="We'd love to hear from you. Contact us today!"
                breadcrumbs={[
                    { label: "Reach Us", link: "/contact" },
                    { label: "Elementary" }
                ]}
            />

            {/* Contact Information Cards */}
            <section className="py-16 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Address */}
                        <div className="bg-white p-8 text-center">
                            <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MapPin size={32} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">Location</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">
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
                        <div className="bg-white p-8 text-center">
                            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Phone size={32} className="text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">Phone</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                Office: +254 20 800 0932
                                <br />
                                Mobile: +254 722 111 805
                                <br />
                                <span className="text-xs text-neutral-500">Available Mon-Fri, 8AM-5PM</span>
                            </p>
                        </div>

                        {/* Email */}
                        <div className="bg-white p-8 text-center">
                            <div className="w-16 h-16 bg-accent-green rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Mail size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">Email</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                admin@keyworldacademy.com
                                <br />
                                info@keyworldacademy.ac.ke
                                <br />
                                <span className="text-xs text-neutral-500">Response within 24 hours</span>
                            </p>
                        </div>

                        {/* Hours */}
                        <div className="bg-white p-8 text-center">
                            <div className="w-16 h-16 bg-info rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Clock size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">Hours</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                Monday - Friday
                                <br />
                                8:00 AM - 5:00 PM
                                <br />
                                Saturday: 9:00 AM - 1:00 PM
                                <br />
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-neutral-50 p-12">
                        <h2 className="text-4xl font-bold text-secondary mb-2">Send us a Message</h2>
                        <p className="text-neutral-600 mb-8">
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>

                        {submitted && (
                            <div className="mb-8 p-4 bg-accent-green text-white rounded-lg">
                                Thank you for your message! We'll be in touch soon.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="+254 XXX XXX XXX"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-sm font-semibold text-secondary mb-2">Subject *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="How can we help?"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold text-secondary mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold py-3 px-6 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>

                        <p className="text-xs text-neutral-500 mt-6 text-center">
                            This form will be integrated with formsubmit.co for email delivery. Add your email to the form action when
                            ready.
                        </p>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-10 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-secondary mb-8 text-center">Find Us On The Map</h2>
                    <div className="rounded-lg overflow-hidden shadow-lg h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.763013623941!2d36.89520147404583!3d-1.317831835659477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13d6b9414e07%3A0x6ebc27c0a488520e!2sKEYWORLD%20ACADEMY!5e0!3m2!1sen!2ske!4v1760785494195!5m2!1sen!2ske"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Keyworld Academy Location"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}
