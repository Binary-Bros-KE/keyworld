"use client"

import { motion } from "framer-motion"
import { MapPin, DollarSign, Clock } from "lucide-react"
import HeroSection from "../../components/HeroSection"
import SecondaryGallerySection from "../seniorSecondary/components/SecondaryGallerySection"

export default function TransportPage() {
  const zones = [
    {
      zone: "Zone A",
      areas: "Fedha Estate, Telaviv",
      fee: "Kshs. 4,500",
      distance: "~2 km",
      pickupTime: "7:00 AM",
    },
    {
      zone: "Zone B",
      areas: "Tassia, Nyayo Estate",
      fee: "Kshs. 6,000",
      distance: "~4 km",
      pickupTime: "6:45 AM",
    },
    {
      zone: "Zone C",
      areas: "Donholm",
      fee: "Kshs. 9,000",
      distance: "~7 km",
      pickupTime: "6:30 AM",
    },
    {
      zone: "Zone D",
      areas: "Komarock, Mama Lucy, Nasra Estate",
      fee: "Kshs. 12,000",
      distance: "~10 km",
      pickupTime: "6:15 AM",
    },
    {
      zone: "Zone E",
      areas: "Imara Daima, South C, South B",
      fee: "Kshs. 15,000",
      distance: "~12 km",
      pickupTime: "6:00 AM",
    },
  ]

  const features = [
    {
      icon: "🚌",
      title: "Modern Fleet",
      description: "Well-maintained buses with comfortable seating and safety features",
    },
    {
      icon: "👨‍✈️",
      title: "Professional Drivers",
      description: "Experienced and vetted drivers trained in safety protocols",
    },
    {
      icon: "📍",
      title: "Fair Payment Plans",
      description: "Faily priced plans made at the beginning of every term",
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description: "Comprehensive safety measures and emergency protocols",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        backgroundImage="/transport/transport-1.jpg"
        title="School Transport"
        description="Safe, reliable, and convenient transportation"
        breadcrumbs={[
          { label: "School Life", link: "/sports" },
          { label: "Transport" }
        ]}
      />

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5c3d] mb-12 text-center">Keyworld Transport</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 text-center border border-gray-200"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#0d5c3d] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Zones */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5c3d] mb-4 text-center">Transport Zones & Fees</h2>
          <p className="text-center text-gray-600 mb-12">Per Term Charges</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {zones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-[#f4c430] p-6"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#0d5c3d] mb-2">{zone.zone}</h3>
                  <p className="text-sm text-gray-600 mb-3">{zone.areas}</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <DollarSign size={16} className="text-[#f4c430] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-[#0d5c3d]">{zone.fee}</p>
                      <p className="text-gray-600">per term</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-[#f4c430] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-[#0d5c3d]">{zone.distance}</p>
                      <p className="text-gray-600">from school</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock size={16} className="text-[#f4c430] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-[#0d5c3d]">{zone.pickupTime}</p>
                      <p className="text-gray-600">pickup time</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5c3d] mb-8 text-center">Important Information</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 border-l-4 border-[#f4c430]">
              <h3 className="text-lg font-bold text-[#0d5c3d] mb-2">Registration</h3>
              <p className="text-gray-600">
                Transport must be registered at the beginning of each term. Changes can be made with 2 weeks notice.
              </p>
            </div>
            <div className="bg-white p-6 border-l-4 border-[#f4c430]">
              <h3 className="text-lg font-bold text-[#0d5c3d] mb-2">Payment</h3>
              <p className="text-gray-600">
                Transport fees are due on or before the opening day of each term. Payment can be made via bank transfer
                or M-Pesa.
              </p>
            </div>
            <div className="bg-white p-6 border-l-4 border-[#f4c430]">
              <h3 className="text-lg font-bold text-[#0d5c3d] mb-2">Safety Rules</h3>
              <p className="text-gray-600">
                Students must follow all safety rules while on the bus. Seatbelts must be worn at all times. Misbehavior
                may result in suspension of transport privileges.
              </p>
            </div>
          </div>
        </div>
      </section>

        <SecondaryGallerySection images={[
              "/transport/transport-1.jpg",
              "/transport/transport-2.jpeg",
              "/transport/transport-3.jpeg",
              "/transport/transport-4.jpg",
              "/transport/transport-5.jpeg",
            ]} />

      {/* CTA Section */}
      <section className="bg-[#f4c430] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0d5c3d] mb-4">Register for Transport</h2>
          <p className="text-lg text-[#0d5c3d] mb-6">Secure your child's safe journey to and from school</p>
          <button className="bg-[#0d5c3d] text-white px-8 py-3 font-bold hover:bg-[#0a4a2f] transition-colors">
            Register Now
          </button>
        </div>
      </section>
    </div>
  )
}
