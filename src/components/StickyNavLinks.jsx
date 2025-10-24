"use client"

import { Facebook, Instagram, Youtube } from "lucide-react"
import { useState } from "react"
import { FaXTwitter } from "react-icons/fa6"

export default function StickyNavLinks() {
  const [isVisible, setIsVisible] = useState(true)

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/keyworldacademy", label: "Facebook", color: "bg-blue-900" },
    { icon: FaXTwitter, href: "https://x.com/keyworldacademy", label: "Twitter", color: "bg-blue-400" },
    { icon: Instagram, href: "https://www.instagram.com/keyworld_academy", label: "Instagram", color: "bg-pink-600" },
    { icon: Youtube, href: "https://www.youtube.com/@keyworldacademy525", label: "YouTube", color: "bg-red-600" },
  ]

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col">
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className={`w-12 h-12 text-white shadow-lg flex items-center justify-center text-neutral-700 transition-all duration-300 ${social.color} hover:shadow-xl hover:scale-110`}
            title={social.label}
            target="_blank"
          >
            <Icon size={24} />
          </a>
        )
      })}
    </div>
  )
}
