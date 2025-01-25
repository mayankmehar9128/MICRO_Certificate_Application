import { Routes, Route, useNavigate } from "react-router-dom";
import AddStudent from "@/widgets/AddStudentForm";
import FrenchiseSidebar from "@/widgets/FrenchiseSidebar";
import { FrenchiseStudentsDatatable } from "@/reUsableComponents/FrenchiseAddStudent";
import { useContext, useEffect, useState } from "react";
import { handleSuccess } from "@/Util";
import { ToastContainer } from "react-toastify";
import { MicroContext } from "@/context";

function FrenchiseDashboard() {
  const [loggedInFrenchise, setloggedInFrenchise] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setloggedInFrenchise(localStorage.getItem('LogedInFrenchiseEmail'))
  }, [])

  const hanleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('LogedInFrenchiseEmail');
    localStorage.removeItem('LogedInFrenchiseCenterCode');
    localStorage.removeItem('LogedInFrenchiseCenterName');
    handleSuccess('User Loggedout')
    setTimeout(function () {
      navigate('/home');
    }, 1000)
  }

  // const CompanyId = useContext(MicroContext);
  return (
    <div className="flex h-screen">
      <ToastContainer />
      <FrenchiseSidebar />
      <main className="flex-1 w-full p-4 bg-gray-100 overflow-auto">
        <Routes>
          <Route path="/dashboard" element={<p>View Deshbord Content{loggedInFrenchise}</p>} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/view-student" element={<FrenchiseStudentsDatatable />} />
          <Route path="/transaction-history" element={<p>View Transaction History Content</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default FrenchiseDashboard;