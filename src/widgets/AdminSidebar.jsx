import { LayoutDashboard, Users2, Building2, BookDown, Wallet } from "lucide-react";
import Sidebar, { SidebarItem } from "@/widgets/Sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function AdminSidebar() {
  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // Navigate to routes
  const [openItem, setOpenItem] = useState(null); // Track the currently open item

  // Redirect to Dashboard on page load if no specific route is set
  useEffect(() => {
    if (location.pathname === "/admin") {
      navigate("/admin/dashboard");
    }
  }, [location.pathname, navigate]);

  const handleOpen = (item) => {
    setOpenItem(openItem === item ? null : item); // Toggle the current menu
  };

  const isActiveRoute = (route) => location.pathname === route; // Check if route is active

  return (
    <Sidebar>
      <SidebarItem
        icon={<LayoutDashboard />}
        text="Dashboard"
        isOpen={openItem === "dashboard"}
        onToggle={() => handleOpen("dashboard")}
        active={isActiveRoute("/admin/dashboard")}
      >
        <li>
          <Link
            to="/admin/dashboard"
            className={`block px-3 py-2 rounded-md ${
              isActiveRoute("/admin/dashboard") ? "bg-indigo-200 text-indigo-800" : "hover:bg-indigo-50"
            }`}
          >
            Dashboard
          </Link>
        </li>
      </SidebarItem>

      <SidebarItem
        icon={<Building2 />}
        text="Center"
        isOpen={openItem === "center"}
        onToggle={() => handleOpen("center")}
        active={["/admin/add-center", "/admin/view-center"].includes(location.pathname)}
      >
        <li>
          <Link
            to="/admin/add-center"
            className={`block px-3 py-2 rounded-md ${
              isActiveRoute("/admin/add-center") ? "bg-indigo-200 text-indigo-800" : "hover:bg-indigo-50"
            }`}
          >
            Add Center
          </Link>
        </li>
        <li>
          <Link
            to="/admin/view-center"
            className={`block px-3 py-2 rounded-md ${
              isActiveRoute("/admin/view-center") ? "bg-indigo-200 text-indigo-800" : "hover:bg-indigo-50"
            }`}
          >
            View Center
          </Link>
        </li>
      </SidebarItem>

      <SidebarItem
        icon={<BookDown />}
        text="Course"
        isOpen={openItem === "course"}
        onToggle={() => handleOpen("course")}
        active={["/admin/add-course", "/admin/view-course"].includes(location.pathname)}
      >
        <li>
          <Link
            to="/admin/add-course"
            className={`block px-3 py-2 rounded-md ${
              isActiveRoute("/admin/add-course") ? "bg-indigo-200 text-indigo-800" : "hover:bg-indigo-50"
            }`}
          >
            Add Course
          </Link>
        </li>
        <li>
          <Link
            to="/admin/view-course"
            className={`block px-3 py-2 rounded-md ${
              isActiveRoute("/admin/view-course") ? "bg-indigo-200 text-indigo-800" : "hover:bg-indigo-50"
            }`}
          >
            View Course
          </Link>
        </li>
      </SidebarItem>

      <SidebarItem
        icon={<Users2 />}
        text="Students"
        isOpen={openItem === "students"}
        onToggle={() => handleOpen("students")}
        active={isActiveRoute("/admin/student-details")}
      >
        <li>
          <Link
            to="/admin/student-details"
            className={`block px-3 py-2 rounded-md ${
              isActiveRoute("/admin/student-details") ? "bg-indigo-200 text-indigo-800" : "hover:bg-indigo-50"
            }`}
          >
            Student Details
          </Link>
        </li>
      </SidebarItem>

      <SidebarItem
        icon={<Wallet />}
        text="Wallet"
        isOpen={openItem === "wallet"}
        onToggle={() => handleOpen("wallet")}
        active={isActiveRoute("/admin/transaction-history")}
      >
        <li>
          <Link
            to="/admin/transaction-history"
            className={`block px-3 py-2 rounded-md ${
              isActiveRoute("/admin/transaction-history") ? "bg-indigo-200 text-indigo-800" : "hover:bg-indigo-50"
            }`}
          >
            Transaction History
          </Link>
        </li>
      </SidebarItem>
    </Sidebar>
  );
}

export default AdminSidebar;
