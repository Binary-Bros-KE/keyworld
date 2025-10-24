// src/Pages/FormSuccess.jsx
import { Link } from "react-router-dom"
import { FaCheckCircle } from "react-icons/fa"

export default function FormSuccess() {
  return (
    <section className="flex flex-col justify-center items-center text-center bg-gradient-to-b from-green-50 to-white px-4 py-20">
      <FaCheckCircle className="text-green-500 text-7xl mb-6 animate-bounce" />

      <h1 className="text-3xl font-bold text-gray-800 mb-3">
        Form Submitted Successfully!
      </h1>

      <p className="text-gray-600 max-w-md mb-8">
        Thank you for reaching out to us. We’ve received your submission and will get back to you shortly.
      </p>

      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-all duration-300"
        >
          Go to Home
        </Link>

        <Link
          to="/contact"
          className="border border-green-600 text-green-700 px-6 py-3 rounded-full font-medium hover:bg-green-100 transition-all duration-300"
        >
          Send Another Message
        </Link>
      </div>
    </section>
  )
}
