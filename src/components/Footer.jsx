import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="bg-neutral-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div className="col-span-2 max-md:col-span-1">
              <h3 className="text-lg font-bold mb-6 text-gray-800 uppercase tracking-wide">
                ABOUT THE SCHOOL
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.763013623941!2d36.89520147404583!3d-1.317831835659477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13d6b9414e07%3A0x6ebc27c0a488520e!2sKEYWORLD%20ACADEMY!5e0!3m2!1sen!2ske!4v1760785494195!5m2!1sen!2ske"
                loading="lazy"
                className="h-[80%] w-full "
              >
              </iframe>
            </div>


            {/* School Section */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-800 uppercase tracking-wide">
                OUR SCHOOL
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/senior-secondary" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Senior Secondary School
                  </a>
                </li>
                <li>
                  <a href="/admission" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Enrollment
                  </a>
                </li>
                <li>
                  <a href="/pre-school" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Preschool
                  </a>
                </li>
                <li>
                  <a href="/pre-primary" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Pre primary (PP1 & PP2)
                  </a>
                </li>
                <li>
                  <a href="/primary" className="text-gray-600 hover:text-primary transition-colors text-sm">
                   Primary (Grade 1-6)
                  </a>
                </li>
                <li>
                  <a href="/junior-secondary" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Junior Secondary
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-primary transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-neutral-800 p-8 rounded-sm -mt-4 lg:mt-0">
              <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">
                GET IN TOUCH
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <MapPin size={18} className="text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Off Fedha Road <br />
                      Tassia Embakasi <br />
                      Nairobi County
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone size={18} className="text-white flex-shrink-0" />
                  <p className="text-gray-200 text-sm">
                    +254 20 8000 932 <br />
                    +254 722 111 805
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail size={18} className="text-white flex-shrink-0" />
                  <p className="text-gray-200 text-sm">
                    Monday - Friday <br />
                    8:00 AM - 5:00 PM <br />
                    P.O BOX 10431-00400
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              Keyworld - Made by BB KE
            </p>
            <div className="flex items-center gap-2">
              <p className="text-gray-500 text-sm">© 2025 Keyworld Academy. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}