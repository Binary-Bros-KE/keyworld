import { Calendar } from "lucide-react";
import { blogs } from "../../../data/blogs"

export default function HomeBlogSection() {
  const featuredBlogs = blogs.slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-secondary mb-2">KEYWORLD NEWS & BLOG</h2>
            <p className="text-primary font-semibold mb-8">KEEP UPDATED</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <a key={blog.id} href={`/news/${blog.slug}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={blog.coverImage || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <p className="text-sm text-neutral-500 mb-3 flex items-center gap-2">
                        <Calendar size={16} /> {new Date(blog.date).toLocaleDateString()}
                      </p>
                      <h3 className="text-md font-bold text-secondary mb-3 line-clamp-2 ">{blog.title}</h3>
                      <p className="text-neutral-600 text-xs leading-relaxed line-clamp-5">{blog.excerpt}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Events Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-secondary mb-2">Events</h2>
              <p className="text-primary font-semibold mb-8">KEEP UPDATED</p>

              <div className="space-y-6">
                {/* Event 1 */}
                <div className="flex gap-4">
                  <div className="bg-info text-white rounded-lg p-4 text-center min-w-fit">
                    <p className="text-sm font-bold">JAN</p>
                    <p className="text-2xl font-bold">05</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Opening Day</h4>
                    <p className="text-sm text-neutral-600">Keyworld Academy Primary and Junior Secondary School</p>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="flex gap-4">
                  <div className="bg-info text-white rounded-lg p-4 text-center min-w-fit">
                    <p className="text-sm font-bold">JAN</p>
                    <p className="text-2xl font-bold">15</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Officially Launching</h4>
                    <p className="text-sm text-neutral-600">Formal Launch of Keyworld Senior Secondary School</p>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="flex gap-4">
                  <div className="bg-info text-white rounded-lg p-4 text-center min-w-fit">
                    <p className="text-sm font-bold">FEB</p>
                    <p className="text-2xl font-bold">02</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Teacher Parent Meeting (PTA)</h4>
                    <p className="text-sm text-neutral-600">Keyworld Academy Primary, Junior Secondary School and Keyworld Senior Secondary School</p>
                  </div>
                </div>
              </div>

              <a href="#" className="text-primary font-bold mt-8 inline-block hover:text-primary-dark">
                ALL EVENTS →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}