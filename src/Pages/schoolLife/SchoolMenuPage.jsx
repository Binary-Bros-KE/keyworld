"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import HeroSection from "../../components/HeroSection"

export default function SchoolMenuPage() {
  const meals = [
    {
      time: "10:00 AM",
      name: "Morning Tea & Snacks",
      items: ["Fresh Fruit", "Whole Wheat Bread", "Milk", "Biscuits"],
      image: "/food/food.jpg",
      nutrition: "Balanced breakfast to energize morning learning",
    },
    {
      time: "12:30 PM",
      name: "Lunch",
      items: ["Protein (Chicken/Fish/Beans)", "Rice/Ugali", "Vegetables", "Salad", "Fruit"],
      image: "/food/food-2.jpg",
      nutrition: "Nutritious lunch with balanced macronutrients",
    },
    {
      time: "3:00 PM",
      name: "Afternoon Snack",
      items: ["Juice", "Mandazi", "Samosa", "Fruit", "Yogurt"],
      image: "/food/snacks.jpg",
      nutrition: "Energy boost for afternoon activities",
    },
  ]

  const nutritionPrinciples = [
    {
      icon: "🥗",
      title: "Balanced Nutrition",
      description: "All meals include proteins, carbohydrates, and vegetables",
    },
    {
      icon: "🌾",
      title: "Whole Grains",
      description: "Emphasis on whole wheat and unrefined grains",
    },
    {
      icon: "🥛",
      title: "Dairy Products",
      description: "Milk and dairy for calcium and strong bones",
    },
    {
      icon: "🍎",
      title: "Fresh Produce",
      description: "Seasonal fruits and vegetables daily",
    },
    {
      icon: "🚫",
      title: "No Junk Food",
      description: "Strict policy against processed and sugary foods",
    },
    {
      icon: "💧",
      title: "Hydration",
      description: "Clean drinking water available throughout the day",
    },
  ]

  const weeklyMenu = [
    { day: "Monday", lunch: "Rice & Beans with Chicken", snack: "Fruit & Biscuits" },
    { day: "Tuesday", lunch: "Ugali & Fish with Vegetables", snack: "Juice & Mandazi" },
    { day: "Wednesday", lunch: "Pasta & Beef with Salad", snack: "Yogurt & Fruit" },
    { day: "Thursday", lunch: "Rice & Lentils with Greens", snack: "Bread & Cheese" },
    { day: "Friday", lunch: "Chapati & Beans with Tomato", snack: "Fruit & Biscuits" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        backgroundImage="/food/food.jpg"
        title="School Menu"
        description="Nutritious meals for healthy, happy students"
        breadcrumbs={[
          { label: "School Life", link: "/sports" },
          { label: "Schoo Menu" }
        ]}
      />

      {/* Nutrition Principles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5c3d] mb-12 text-center">Our Nutrition Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 border border-gray-200 text-center"
              >
                <div className="text-4xl mb-3">{principle.icon}</div>
                <h3 className="text-lg font-bold text-[#0d5c3d] mb-2">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Meals */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5c3d] mb-12 text-center">Daily Meal Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {meals.map((meal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img src={meal.image || "/placeholder.svg"} alt={meal.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={20} className="text-[#f4c430]" />
                    <span className="text-lg font-bold text-[#0d5c3d]">{meal.time}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0d5c3d] mb-3">{meal.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 italic">{meal.nutrition}</p>
                  <div className="space-y-2">
                    <p className="font-bold text-[#0d5c3d] text-sm">Menu Items:</p>
                    <ul className="space-y-1">
                      {meal.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#f4c430]"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Menu */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5c3d] mb-12 text-center">Weekly Lunch Menu</h2>
          <div className="space-y-4">
            {weeklyMenu.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 border-l-4 border-[#f4c430]"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Day</p>
                    <p className="text-lg font-bold text-[#0d5c3d]">{day.day}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Lunch</p>
                    <p className="text-lg font-bold text-[#0d5c3d]">{day.lunch}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Afternoon Snack</p>
                    <p className="text-lg font-bold text-[#0d5c3d]">{day.snack}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5c3d] mb-8 text-center">Important Notes</h2>
          <div className="space-y-6">
            <div className="bg-[#f4c430] p-6 border-l-4 border-[#0d5c3d]">
              <h3 className="text-lg font-bold text-[#0d5c3d] mb-2">🚫 No Outside Food</h3>
              <p className="text-[#0d5c3d]">
                For health and safety reasons, students are not allowed to bring food from outside. All meals are
                prepared in our hygienic kitchen.
              </p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-[#0d5c3d]">
              <h3 className="text-lg font-bold text-[#0d5c3d] mb-2">💧 Drinking Water</h3>
              <p className="text-gray-700">
                Each child should carry a bottle of clean drinking water every day. Water is available throughout the
                school.
              </p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-[#0d5c3d]">
              <h3 className="text-lg font-bold text-[#0d5c3d] mb-2">🏥 Dietary Requirements</h3>
              <p className="text-gray-700">
                Please inform the school of any allergies or dietary restrictions. We will accommodate special dietary
                needs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-[#0d5c3d]">
              <h3 className="text-lg font-bold text-[#0d5c3d] mb-2">👨‍🍳 Professional Kitchen Staff</h3>
              <p className="text-gray-700">
                All meals are prepared by trained kitchen staff following strict hygiene and food safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0d5c3d] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Menu?</h2>
          <p className="text-lg text-gray-100 mb-6">Contact our nutrition team for more information</p>
          <a href="/contact" className="bg-[#f4c430] text-[#0d5c3d] px-8 py-3 font-bold hover:bg-[#e0b020] transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
