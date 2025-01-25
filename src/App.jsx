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
import { AuthProvider, useAuth } from "../context/Authcontext";
import ProtectedRoute from "./widgets/ProtectedRoute";
import PublicRoute from "./widgets/PublicRoute";

function App() {
  
  return (
    <div>
      <AuthProvider>
        <Router>
            <Routes>
              {/* Public Website Routes */}
              <Route element={<PublicRoute />}>
                <Route path="/*" element={<WebsiteLayout />} />
              </Route>



              {/* Admin Dashboard Routes */}


              {/* Protected Routes */}
              
              <Route element={<ProtectedRoute />}>

                <Route path="/admin/*" element={<AdminDashboard />} />

                <Route path="/frenchise/*" element={<FrenchiseDashboard /> } />

                {/* <Route path="/admin/dashboard" element={<PrivateRoute element={<AdminDashboard />} allowedRoles={["admin"]}/>} /> */}

              </Route>
            </Routes>
        </Router>
      </AuthProvider>
    </div>
    
  );
}

function WebsiteLayout() {

  return (
    <>
        <Header />
          <div>
            <Routes>

              {/* Unauthorized routes */}
              <Route path="/" element={<Navigate to="/home" replace />} />
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
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        <Footer />
    </>
  );
}

export default App;