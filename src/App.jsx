import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"

//-------------- Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//-------------- Pages
import Home from "./Pages/Home/Home"
import StickyNavLinks from "./components/StickyNavLinks"
import SecondarySchool from "./Pages/seniorSecondary/SecondarySchool"
import BackToTop from "./components/BackToTop"
import Admissions from "./Pages/About/Admissions"
import MissionVision from "./Pages/About/MissionVision"
import PrincipalsMessage from "./Pages/About/PrincipalsMessage"
import AboutGallery from "./Pages/About/AboutGallery"
import OurStory from "./Pages/About/OurStory"
import FacultyStaff from "./Pages/About/FacultyStaff"
import PreschoolPage from "./Pages/Academics/PreschoolPage"
import ElementaryPage from "./Pages/Academics/ElementaryPage"
import MiddleSchoolPage from "./Pages/Academics/MiddleSchoolPage"
import JuniorSecondaryPage from "./Pages/Academics/JuniorSecondaryPage"
import SportsPage from "./Pages/schoolLife/SportsPage"
import TransportPage from "./Pages/schoolLife/TransportPage"
import SchoolMenuPage from "./Pages/schoolLife/SchoolMenuPage"
import ContactPage from "./Pages/Contact/ContactPage"
import NewsPage from "./Pages/News/NewsPage"
import BlogDetailPage from "./Pages/News/BlogDetailPage"
import FormSuccess from "./Pages/success/FormSuccess"

function App() {

  return (
    <Router>
      <Toaster position="top-right" />
      <Navbar />
      <StickyNavLinks />
      <BackToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/senior-secondary" element={<SecondarySchool />} />

          <Route path="/admission" element={<Admissions />} />
          <Route path="/vision-and-mission" element={<MissionVision />} />
          <Route path="/principles-message" element={<PrincipalsMessage />} />
          <Route path="/gallery" element={<AboutGallery />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/faculty" element={<FacultyStaff />} />

          <Route path="/pre-school" element={<PreschoolPage />} />
          <Route path="/pre-primary" element={<ElementaryPage />} />
          <Route path="/primary" element={<MiddleSchoolPage />} />
          <Route path="/junior-secondary" element={<JuniorSecondaryPage />} />

          <Route path="/sports" element={<SportsPage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/school-menu" element={<SchoolMenuPage />} />
          
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/success" element={<FormSuccess />} />
        </Routes>
      </main>
      <Footer />
    </Router >
  )
}

export default App
