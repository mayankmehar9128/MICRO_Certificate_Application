import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './widgets/Header'
import Footer from './widgets/Footer'
import Home from './pages/Landing/Home';
import About from './pages/Landing/About';
import ContectUs from './pages/Landing/ContectUs';
import Course from './pages/Landing/Course';
import StudentEnq from './pages/Student/StudentEnq';
import StudentLogin from './pages/Student/StudentLogin';
import StudentSearch from './pages/Student/StudentSearch';
import FrenchiseReg from './pages/Frenchise/FrenchiseReg';
import FrenchiseLogin from './pages/Frenchise/FrenchiseLogin';
import AdminLogin from './pages/Admin/AdminLogin';
import Mission from './pages/Landing/Mission';
import Vision from './pages/Landing/Vision';

function App() {

  return (
    <Router>
      <Header />
        <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutUs" element={<About />} />
              <Route path="/ContactUs" element={<ContectUs />} />
              <Route path="/course" element={<Course />} />
              <Route path="/StudentEnq" element={<StudentEnq />} />
              <Route path="/StudentLogin" element={<StudentLogin />} />
              <Route path="/StudentSearch" element={<StudentSearch />} />
              <Route path="/FrenchiseReg" element={<FrenchiseReg />} />
              <Route path="/FrenchiseLogin" element={<FrenchiseLogin />} />
              <Route path="/AdminLogin" element={<AdminLogin />} />
              <Route path="/Mission" element={<Mission />} />
              <Route path="/Vision" element={<Vision />} />
            </Routes>
          </div>
      <Footer />
    </Router>
  )
}

export default App
