"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

export default function AboutGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const galleryCategories = [
    {
      title: "School Facilities",
      images: [
        { id: 1, src: "", alt: "Classroom" },
        { id: 2, src: "", alt: "Library" },
        { id: 3, src: "", alt: "Laboratory" },
        { id: 4, src: "", alt: "Classroom" },
        { id: 5, src: "", alt: "Library" },
        { id: 6, src: "", alt: "Laboratory" },
      ],
    },
    {
      title: "Students & Learning",
      images: [
        { id: 4, src: "", alt: "Students in class" },
        { id: 5, src: "", alt: "Group project" },
        { id: 6, src: "", alt: "Student presentation" },
      ],
    },
    {
      title: "Sports & Recreation",
      images: [
        { id: 7, src: "", alt: "Sports day" },
        { id: 8, src: "", alt: "Football match" },
        { id: 9, src: "", alt: "Athletics" },
      ],
    },
    {
      title: "Meals & Nutrition",
      images: [
        { id: 10, src: "", alt: "School meals" },
        { id: 11, src: "", alt: "Dining hall" },
        { id: 12, src: "", alt: "Healthy nutrition" },
      ],
    },
    {
      title: "School Bus & Transport",
      images: [
        { id: 13, src: "", alt: "School bus" },
        { id: 14, src: "", alt: "Transport fleet" },
        { id: 15, src: "", alt: "Safe transportation" },
      ],
    },
    {
      title: "Activities & Events",
      images: [
        { id: 16, src: "", alt: "School assembly" },
        { id: 17, src: "", alt: "Cultural event" },
        { id: 18, src: "", alt: "Prize giving" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0d5c3d] to-[#0a4a2f] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-lg text-gray-100">Explore life at Keyworld Academy</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="space-y-16">
            {galleryCategories.map((category, catIdx) => (
              <motion.div key={catIdx} {...fadeInUp} transition={{ delay: catIdx * 0.1 }}>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0d5c3d] mb-8">{category.title}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.images.map((image, imgIdx) => (
                    <motion.div
                      key={image.id}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer overflow-hidden bg-gray-200 aspect-square"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="w-full h-auto bg-gray-200"
            />
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
