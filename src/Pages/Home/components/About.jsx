import { GraduationCap, Users, Utensils, BookOpen, Award, Heart } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Features Section */}
      <section className="py-16 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Facilities Card */}
            <div className="bg-secondary p-8 rounded-lg text-white hover:bg-secondary-hover transition-colors">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <GraduationCap size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">State-of-the-Art Facilities</h3>
              <p className="text-neutral-200 leading-relaxed">
                Keyworld Academy boasts modern classrooms, science labs, computer rooms, and sports facilities designed
                to provide the best learning environment for our students.
              </p>
            </div>

            {/* Qualified Tutors Card */}
            <div className="bg-accent-green p-8 rounded-lg text-white hover:bg-accent-green-light transition-colors">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Users size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Qualified Tutors</h3>
              <p className="text-neutral-100 leading-relaxed">
                Our dedicated team of experienced and certified teachers are committed to nurturing each child's
                potential and providing personalized attention to every student.
              </p>
            </div>

            {/* Meals Card */}
            <div className="bg-primary p-8 rounded-lg text-secondary hover:bg-primary-hover transition-colors">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <Utensils size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Nutritious Meals</h3>
              <p className="text-secondary-dark leading-relaxed">
                Proper nutrition is included in our plans. We provide healthy, balanced meals prepared with care to
                ensure students have the energy they need to learn and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main About Content */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-lg shadow-sm">
                <h2 className="text-4xl font-bold text-secondary mb-4">Welcome to Keyworld Academy</h2>
                <h3 className="text-xl text-primary font-semibold mb-6">Nurturing Excellence in Islamic Education</h3>
                <div className="space-y-4 text-neutral-700 leading-relaxed">
                  <p>
                    Keyworld Academy is a distinguished integrated Islamic private school situated at the heart of
                    Fedha. We are dedicated to providing exceptional education that combines academic excellence with
                    strong Islamic values and character development.
                  </p>
                  <p>
                    Our institution stands as a beacon of quality education in the community, recognized for our
                    state-of-the-art facilities and highly qualified teaching staff. We believe in nurturing every
                    learner's potential through a comprehensive curriculum that balances modern educational approaches
                    with traditional Islamic teachings.
                  </p>
                  <p>
                    At Keyworld Academy, we make it easy for every learner to read, study, and learn the Noble Quran.
                    Our Islamic studies program is integrated seamlessly with our academic curriculum, ensuring students
                    develop both intellectually and spiritually. May Allah bless us all in this noble endeavor.
                  </p>
                  <p>
                    We offer a holistic educational experience that includes extracurricular activities, sports
                    programs, and character-building initiatives. Our commitment extends beyond the classroom, fostering
                    an environment where students can discover their talents, build confidence, and develop into
                    well-rounded individuals prepared for future success.
                  </p>
                </div>

                {/* Additional Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary mb-1">Quran Studies</h4>
                      <p className="text-sm text-neutral-600">Comprehensive Islamic education program</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-accent-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary mb-1">Excellence</h4>
                      <p className="text-sm text-neutral-600">Award-winning academic programs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary mb-1">Care</h4>
                      <p className="text-sm text-neutral-600">Nurturing and supportive environment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-100 p-6 rounded-lg shadow-sm sticky top-32">
                <h3 className="text-lg font-bold text-secondary mb-6 pb-3 border-b-2 border-primary">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="/admission"
                    className="flex items-center justify-between p-3 bg-white hover:bg-primary hover:text-secondary transition-colors rounded group"
                  >
                    <span className="text-sm font-medium text-neutral-700 group-hover:text-secondary">
                      ADMISSIONS
                    </span>
                    <span className="text-xs bg-info text-white px-2 py-1 rounded">INFO</span>
                  </a>
                  <a
                    href="/pre-school"
                    className="block p-3 bg-white hover:bg-primary hover:text-secondary transition-colors rounded text-sm font-medium text-neutral-700"
                  >
                    PRESCHOOL
                  </a>
                  <a
                    href="/elementary"
                    className="block p-3 bg-white hover:bg-primary hover:text-secondary transition-colors rounded text-sm font-medium text-neutral-700"
                  >
                    ELEMENTARY
                  </a>
                  <a
                    href="/middle-school"
                    className="block p-3 bg-white hover:bg-primary hover:text-secondary transition-colors rounded text-sm font-medium text-neutral-700"
                  >
                    MIDDLE SCHOOL
                  </a>
                  <a
                    href="/junior-secondary"
                    className="flex items-center justify-between p-3 bg-white hover:bg-primary hover:text-secondary transition-colors rounded group"
                  >
                    <span className="text-sm font-medium text-neutral-700 group-hover:text-secondary">
                      JUNIOR SECONDARY
                    </span>
                    <span className="text-xs bg-info text-white px-2 py-1 rounded">INFO</span>
                  </a>
                  <a
                    href="/senior-secondary"
                    className="flex items-center justify-between p-3 bg-white hover:bg-primary hover:text-secondary transition-colors rounded group"
                  >
                    <span className="text-sm font-medium text-neutral-700 group-hover:text-secondary">
                      SENIOR SECONDARY
                    </span>
                    <span className="text-xs bg-accent-green text-white px-2 py-1 rounded">NEW</span>
                  </a>

                  <a
                    href="/transport"
                    className="block p-3 bg-white hover:bg-primary hover:text-secondary transition-colors rounded text-sm font-medium text-neutral-700"
                  >
                    SCHOOL TRANSPORT
                  </a>
                </div>
                <a
                  href="/KEYWORLD_ACADEMY_FINAL_FEE_STRUCTURE_2021.pdf"
                  download
                  className="w-full mt-6 bg-accent-green hover:bg-accent-green-light text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <BookOpen size={20} />
                  DOWNLOAD FEE STRUCTURE
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
