import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import AdminDashboard from "./pages/Admin/AdminDeshbordLanding";
import FrenchiseDashboard from "./pages/Frenchise/FrenchiseLanding";
import { useState } from "react";
import RefreshHandler from "./widgets/RefreshHandler";
import { MicroProvider } from "./context";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to= "/FrenchiseLogin" />
  }
  return (
    <div>
    <MicroProvider>
      <Router>
        <RefreshHandler setIsAuthanticated={setIsAuthenticated} />
          <Routes>
            {/* Public Website Routes */}
            <Route path="/*" element={<WebsiteLayout />} />

            {/* Admin Dashboard Routes */}
            <Route path="/admin/*" element={<PrivateRoute element={<AdminDashboard />} />} />

            {/* Frenchise Dashboard Routes */}
            <Route path="/frenchise/*" element={<PrivateRoute element={<FrenchiseDashboard />} />} />
          </Routes>
      </Router>
    </MicroProvider>
    </div>
    
  );
}

function WebsiteLayout() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/ContactUs" element={<ContectUs />} />
          <Route path="/course" element={<Course />} />
          <Route path="/StudentEnq" element={<StudentEnq />} />
          <Route path="/StudentLogin" element={<StudentLogin />} />
          <Route path="/StudentSearch" element={<StudentSearch />} />
          <Route path="/FrenchiseReg" element={<FrenchiseReg />} />
          <Route path="/FrenchiseLogin" element={<FrenchiseLogin />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;