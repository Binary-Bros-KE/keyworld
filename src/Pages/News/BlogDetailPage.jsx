"use client"

import { blogs } from "../../data/blogs"
import { Calendar, User, Tag, ArrowLeft } from "lucide-react"
import { Link, useParams, useNavigate } from "react-router-dom"


export default function BlogDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const blog = blogs.find((b) => b.slug === slug)


if (!blog) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-secondary mb-4">Blog Not Found</h1>
      <button
        onClick={() => navigate("/news")}
        className="text-primary hover:text-primary-hover font-semibold"
      >
        Go Back to News
      </button>
    </div>
  )
}


  const relatedBlogs = blogs.filter((b) => b.id !== blog.id && b.category === blog.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Header */}
      <section className="bg-secondary text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-4">
            <span className="inline-block bg-primary text-secondary text-sm font-bold px-4 py-2">{blog.category}</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-neutral-100">
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              {new Date(blog.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </div>
            <div className="flex items-center gap-2">
              <User size={20} />
              {blog.author}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <img src={blog.coverImage || "/placeholder.svg"} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            {blog.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-neutral-700 leading-relaxed mb-6 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Secondary Images */}
          {blog.secondaryImages && blog.secondaryImages.length > 0 && (
            <div className="mt-12 pt-12 border-t border-neutral-200">
              <h3 className="text-2xl font-bold text-secondary mb-6">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blog.secondaryImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md h-64">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 pt-12 border-t border-neutral-200">
              <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
                <Tag size={20} />
                Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag) => (
                  <span key={tag} className="bg-neutral-100 text-secondary px-4 py-2 text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-secondary mb-12">Related News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link key={relatedBlog.id} to={`/news/${relatedBlog.slug}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="h-40 overflow-hidden bg-neutral-200">
                      <img
                        src={relatedBlog.coverImage || "/placeholder.svg"}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-secondary mb-2 line-clamp-2">{relatedBlog.title}</h3>
                      <p className="text-neutral-600 text-sm line-clamp-2">{relatedBlog.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
