import { Routes, Route, useNavigate } from "react-router-dom";
import AdminSidebar from "../../widgets/AdminSidebar"; // Sidebar for Admin Dashboard
import Deshbord from '../../widgets/Deshbord';
import AddCenter from '../../widgets/AddCenterForm';
import AddCourse from '../../widgets/AddCourse';
import AdminAddedFrenchiseDetail from '../../pages/Admin/AdminAddedFrenchiseTable';
import AdminStudentDetail from '../../pages/Admin/StudentDetails';
import { FrenchiseReguestDatatable } from "@/reUsableComponents/FrenchiseReguestDatatable";
import FrenchiseDetail from "./FrenchiseDetils";
import { useEffect, useState } from "react";
import { handleSuccess } from "@/Util";

function AdminDashboard() {

  const [loggedInAdmin, setloggedInAdmin] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setloggedInAdmin(localStorage.getItem('LogedInAdminEmail'))
  }, [])

  const hanleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('LogedInAdminEmail');
    handleSuccess('User Loggedout')
    setTimeout(function () {
      navigate('/home');
    }, 1000)
  }

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <main className="flex-1 w-full p-4 bg-gray-100 overflow-auto">
        <Routes>
          <Route path="/dashboard" element={<p>View Deshbord Content{loggedInAdmin}</p>} />
          <Route path="/add-center" element={<AddCenter />} />
          <Route path="/view-center" element={<FrenchiseDetail />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/view-course" element={<p>View Course Content</p>} />
          <Route path="/frenchise-details" element={<AdminAddedFrenchiseDetail />} />
          <Route path="/student-details" element={<AdminStudentDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminDashboard;