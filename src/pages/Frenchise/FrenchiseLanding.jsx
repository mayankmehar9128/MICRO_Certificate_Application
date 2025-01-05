import { Routes, Route } from "react-router-dom";
import AddStudent from "@/widgets/AddStudentForm";
import FrenchiseSidebar from "@/widgets/FrenchiseSidebar";
import { FrenchiseStudentsDatatable } from "@/reUsableComponents/FrenchiseAddStudent";

function FrenchiseDashboard() {
  return (
    <div className="flex h-screen">
      <FrenchiseSidebar />
      <main className="flex-1 w-full p-4 bg-gray-100 overflow-auto">
        <Routes>
          <Route path="/dashboard" element={<p>View Deshbord Content</p>} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/view-student" element={<FrenchiseStudentsDatatable />} />
          <Route path="/transaction-history" element={<p>View Transaction History Content</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default FrenchiseDashboard;