import { LayoutDashboard, Users2, Building2, BookDown, Wallet, UserRoundPen } from "lucide-react";
import Sidebar, { SidebarItem } from "@/widgets/Sidebar";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function FrenchiseSidebar() {
  const location = useLocation(); // Get current route
  const [openItem, setOpenItem] = useState(null); // Track the currently open item

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
        active={isActiveRoute("/frenchise/dashboard")}
      >
        <li>
          <Link
            to="/frenchise/dashboard"
            className={`block px-3 py-2 rounded-md ${
              isActiveRoute("/frenchise/dashboard") ? "bg-indigo-200 text-indigo-800" : "hover:bg-indigo-50"
            }`}
          >
            Dashboard
          </Link>
        </li>
      </SidebarItem>

      <SidebarItem
        icon={<UserRoundPen />}
        text="Students"
        isOpen={openItem === "students"}
        onToggle={() => handleOpen("students")}
        active={isActiveRoute("/frenchise/view-student")}
      >
        <li>
          <Link
            to="/frenchise/add-student"
            className={`block px-3 py-2 rounded-md ${
              isActiveRoute("/frenchise/add-student") ? "bg-indigo-200 text-indigo-800" : "hover:bg-indigo-50"
            }`}
          >
            Add Student
          </Link>
        </li>
        <li>
          <Link
            to="/frenchise/view-student"
            className={`block px-3 py-2 rounded-md ${
              isActiveRoute("/frenchise/view-student") ? "bg-indigo-200 text-indigo-800" : "hover:bg-indigo-50"
            }`}
          >
            View Student
          </Link>
        </li>
      </SidebarItem>

      <SidebarItem
        icon={<Wallet />}
        text="Wallet"
        isOpen={openItem === "wallet"}
        onToggle={() => handleOpen("wallet")}
        active={isActiveRoute("/frenchise/transaction-history")}
      >
        <li>
          <Link
            to="/frenchise/transaction-history"
            className={`block px-3 py-2 rounded-md ${
              isActiveRoute("/frenchise/transaction-history") ? "bg-indigo-200 text-indigo-800" : "hover:bg-indigo-50"
            }`}
          >
            Transaction History
          </Link>
        </li>
      </SidebarItem>
    </Sidebar>
  );
}

export default FrenchiseSidebar;