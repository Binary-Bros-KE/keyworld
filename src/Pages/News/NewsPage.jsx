"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Calendar, User } from "lucide-react"
import { blogs } from "../../data/blogs"
import HeroSection from "../../components/HeroSection"

export default function NewsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")

    const categories = ["All", ...new Set(blogs.map((blog) => blog.category))]

    const filteredBlogs = blogs.filter((blog) => {
        const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory
        const matchesSearch =
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="min-h-screen bg-white">
            <HeroSection
                backgroundImage="/news/banner.jpg"
                title="Latest News & Updates"
                description="Stay informed about events, programs, and achievements at Keyworld Academy"
                breadcrumbs={[
                    { label: "Blog", link: "/news" },
                    { label: "News" }
                ]}
            />

            {/* Search and Filter Section */}
            <section className="py-12 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="space-y-6">
                        {/* Search Bar */}
                        <div>
                            <input
                                type="text"
                                placeholder="Search news..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2 font-semibold transition-colors ${selectedCategory === category
                                            ? "bg-secondary text-white"
                                            : "bg-white text-secondary border border-secondary hover:bg-secondary hover:text-white"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-5 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    {filteredBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredBlogs.map((blog) => (
                                <Link key={blog.id} to={`/news/${blog.slug}`}>
                                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                                        {/* Image */}
                                        <div className="h-48 overflow-hidden bg-neutral-200">
                                            <img
                                                src={blog.coverImage || "/placeholder.svg"}
                                                alt={blog.title}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            {/* Category Badge */}
                                            <div className="mb-3">
                                                <span className="inline-block bg-primary text-secondary text-xs font-bold px-3 py-1">
                                                    {blog.category}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-secondary mb-3 line-clamp-2">{blog.title}</h3>

                                            {/* Excerpt */}
                                            <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                                                {blog.excerpt}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex items-center gap-4 text-xs text-neutral-500 pt-4 border-t border-neutral-200">
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={14} />
                                                    {new Date(blog.date).toLocaleDateString()}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <User size={14} />
                                                    {blog.author}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-xl text-neutral-600">No news found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
