import { Routes, Route, useNavigate } from "react-router-dom";
import AddStudent from "@/widgets/AddStudentForm";
import FrenchiseSidebar from "@/widgets/FrenchiseSidebar";
import { FrenchiseStudentsDatatable } from "@/reUsableComponents/FrenchiseAddStudent";
import { useContext, useEffect, useState } from "react";
import { handleSuccess } from "@/Util";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../../context/Authcontext";

function FrenchiseDashboard() {

  const authDetails = useContext(AuthContext);
  // const [loggedInFrenchise, setloggedInFrenchise] = useState('');
  // const navigate = useNavigate();

  // useEffect(() => {
  //   setloggedInFrenchise(localStorage.getItem('LogedInFrenchiseEmail'))
  // }, [])

  return (
    <div className="flex h-screen">
      <ToastContainer />
      <FrenchiseSidebar />
      <main className="flex-1 w-full p-4 bg-gray-100 overflow-auto">
          <Routes>
                <Route path="/dashboard" element={<p>View Deshbord Content {authDetails.LogedInEmail}</p>} />
                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/view-student" element={<FrenchiseStudentsDatatable />} />
                <Route path="/transaction-history" element={<p>View Transaction History Content</p>} />
            </Routes>
      </main>
    </div>
  );
}

export default FrenchiseDashboard;