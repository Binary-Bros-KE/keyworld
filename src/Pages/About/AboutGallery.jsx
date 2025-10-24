"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import HeroSection from "../../components/HeroSection"

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
        { id: 2, src: "/keyworld-academy.jpeg", alt: "Keyworld Academy" },
        { id: 1, src: "/gallery/classroom.jpg", alt: "Classroom" },
        { id: 1, src: "/gallery/classroom_2.jpeg", alt: "Classroom 2" },
      ],
    },
    {
      title: "Students & Learning",
      images: [
        { id: 4, src: "/gallery/keyworld-classes.jpg", alt: "Students in class" },
        { id: 5, src: "/gallery/projects.jpg", alt: "Group project" },
        { id: 6, src: "/academics/middle-school/middle-school-1.jpg", alt: "Students on Rooftop" },
      ],
    },
    {
      title: "Sports & Recreation",
      images: [
        { id: 7, src: "/sports/chess.jpg", alt: "Students Playing Chess" },
        { id: 8, src: "/academics/junior-secondary/junior-secondary-2.jpg", alt: "Football Tuff" },
        { id: 9, src: "/sports/swimming.jpg", alt: "Swimming" },
      ],
    },
    {
      title: "Meals & Nutrition",
      images: [
        { id: 10, src: "/food/food.jpg", alt: "School meals" },
        { id: 10, src: "/food/snacks.jpg", alt: "School meals" },
        { id: 10, src: "/food/food-2.jpg", alt: "School meals" },
      ],
    },
    {
      title: "School Bus & Transport",
      images: [
        { id: 13, src: "/transport/transport-1.jpg", alt: "School bus" },
        { id: 14, src: "/transport/transport-2.jpeg", alt: "Transport fleet" },
        { id: 15, src: "/transport/transport-4.jpg", alt: "Safe transportation" },
      ],
    },
    {
      title: "Activities & Events",
      images: [
        { id: 16, src: "/gallery/graduation.jpg", alt: "Graduation" },
        { id: 16, src: "/gallery/graduation-6.jpg", alt: "Graduation" },
        { id: 16, src: "/gallery/graduation-2.jpg", alt: "Graduation" },
        { id: 16, src: "/gallery/graduation-3.jpg", alt: "Graduation" },
        { id: 16, src: "/gallery/graduation-4.jpg", alt: "Graduation" },
        { id: 16, src: "/gallery/graduation-5.jpg", alt: "Graduation" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        backgroundImage="/blog/swimming-classes.png"
        title="Gallery"
        description="Explore life at Keyworld Academy"
        breadcrumbs={[
          { label: "About", link: "/our-story" },
          { label: "Gallery" }
        ]}
      />

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

          <div className="max-w-7xl mx-auto pt-10">
            <p className="font-bold text-center text-gray-500">More images on our socials. Visit our Facebook page for more images.</p>
          </div>
        </div>
      </section>



      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
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
