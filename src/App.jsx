import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './widgets/Header';
import Footer from './widgets/Footer';
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
import AdminDeshbordLanding from './pages/Admin/AdminDeshbordLanding';

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

function AppLayout() {
  const location = useLocation();

  // List of routes where Header and Footer should not appear
  const excludedRoutes = ["/AdminDashbord"];

  const showHeaderFooter = !excludedRoutes.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
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
          <Route path="/Admin" element={<AdminLogin />} />
          <Route path="/AdminDashbord" element={<AdminDeshbordLanding />} />
        </Routes>
      </div>
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;
