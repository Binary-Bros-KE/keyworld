export default function HomeStorySection() {
    return (
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white col-span-2">
              <h2 className="text-5xl font-bold mb-6">OUR STORY</h2>
              <p className="text-lg leading-relaxed mb-8">
                The growth started off very early in 2019 when our director Keyworld shared a message to share
                his desire to make a school. What began as a vision has blossomed into a thriving educational
                institution dedicated to nurturing young minds with Islamic values and academic excellence. Today,
                Keyworld Academy stands as a testament to commitment, innovation, and the transformative power of
                quality education.
              </p>
              <a href="/our-story" className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Discover Our Story
              </a>
            </div>

            {/* Right Image */}
            <div className="">
              <img
                src="/home/director.jpg"
                alt="School Director"
                className=" h-[400px] aspect-3/4 object-cover bg-neutral-300"
              />
            </div>
          </div>
        </div>
      </section>
    )
}