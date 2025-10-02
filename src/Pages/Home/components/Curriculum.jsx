import { Calendar, Phone, FileText } from "lucide-react"

export default function Curriculum() {
  return (
    <div className="min-h-screen bg-white">
      {/* Contact/Info Section */}
      <section className="py-10 bg-neutral-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visit School */}
            <div className="transition-shadow text-center">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">VISIT SCHOOL</h3>
              <p className="text-neutral-600 leading-relaxed">
                We welcome you to visit our campus and experience our learning environment firsthand. Schedule a tour
                today.
              </p>
            </div>

            {/* Inquire/Contact */}
            <div className="transition-shadow text-center">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">INQUIRE</h3>
              <div className="text-neutral-600 leading-relaxed space-y-2">
                <p className="font-semibold">Fedha, Nairobi</p>
                <p>Email: info@keyworldacademy.ac.ke</p>
                <p>Phone: +254 XXX XXX XXX</p>
              </div>
            </div>

            {/* Online Application */}
            <div className="transition-shadow text-center">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">ONLINE APPLICATION</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Apply online and join our community of inspired, confident, and ready learners.
              </p>
              <button className="bg-primary hover:bg-primary-hover text-secondary font-semibold px-6 py-2 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-3">Our Curriculum</h2>
            <p className="text-xl text-primary font-semibold">Keyworld Academy</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src="/home/classroom.jpg"
                alt="Students in classroom at Keyworld Academy"
                className="w-full h-[400px] object-cover bg-neutral-200 shadow-lg rounded-lg mb-6"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, officia, quae earum placeat quidem, quam odio laudantium iure omnis perferendis saepe. Sapiente laboriosam sunt corrupti nihil similique? Consequuntur, non nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum velit tempora aliquam nihil expedita vero id sequi, nam similique, autem maiores animi! Iste consectetur praesentium ratione obcaecati dolor sunt.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, placeat impedit! Officiis adipisci tempore iusto recusandae dolor quis. Neque voluptates voluptatibus facilis optio veniam, ipsa a assumenda facere cum ab.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, esse maiores voluptatibus at eaque repellendus quo harum quam quas tempora vitae et possimus quisquam iusto itaque mollitia ab inventore optio!
              </p>
            </div>

            {/* Subjects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Core Subjects */}
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Mathematics</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">English</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Kiswahili</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Science</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Social Studies</p>
              </div>

              {/* Islamic Studies */}
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Quran Studies</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Fiqh</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Hadith</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Siira</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Tawheed</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Arabic Language</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Islamic Religious Education</p>
              </div>

              {/* Practical Subjects */}
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Computer Studies</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Agriculture</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Creative Arts</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Music</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Physical Education</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Home Science</p>
              </div>

              {/* Additional Subjects */}
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Literature</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Environmental Studies</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Hygiene</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg hover:bg-primary hover:text-secondary transition-colors">
                <p className="font-semibold text-center">Handwriting</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
