import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"

//-------------- Components
import Navbar from "./components/Navbar"

//-------------- Pages
import Home from "./Pages/Home/Home"

function App() {

  return (
    <Router>
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router >
  )
}

export default App
