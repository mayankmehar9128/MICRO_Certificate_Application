import { useContext, createContext, useState } from "react";
import { MoreVertical, ChevronLast, ChevronFirst, ChevronDown } from "lucide-react";
import { AuthContext, useAuth } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "@/Util";
import { motion } from "framer-motion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { Link } from "react-router-dom";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  const authDetails = useContext(AuthContext);
  const { logout } = useAuth();
  const navigate = useNavigate(); // For navigation


    const handleLogout = () => {
      logout(); // Clear authentication state
      handleSuccess('User Loggedout');
      setTimeout(function () {
        navigate('/home');
      }, 1000)
    };

    const handleViewProfile = () => {
      navigate("/admin-profile"); // Redirect to the profile page
    };

  return (
    <aside
      className={`h-screen transition-all duration-300 ${expanded ? "w-64" : "w-16"} relative`}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="Avatar"
            className="w-14 h-14 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            	<div className="leading-4">
              {/* Dynamically display name and email */}
              <h4 className="font-semibold">{authDetails.LogedInUsername || "Guest"}</h4>
              <span 
                  className="text-xs text-wrap text-gray-600 truncate w-36 block" 
                  title={authDetails.LogedInEmail || "Admin@example.com"} // Tooltip
                >
                {authDetails.LogedInEmail || "Admin@example.com"}
              </span>
            </div>
            {/* <MoreVertical onClick={handleLogout} size={20} className="cursor-pointer" /> */}

            {/* Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MoreVertical size={20} className="cursor-pointer hover:bg-indigo-200 hover:transition duration-300 rounded" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleViewProfile}>
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, children, isOpen, onToggle, active }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li className="relative">
      {/* Parent Menu */}
      <div
        className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
        onClick={onToggle}
      >
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
        {children && expanded && <ChevronDown className={`ml-auto ${isOpen && "rotate-180"}`} />}
      </div>

      {/* Submenu */}
      	{children && expanded && isOpen && (
        <motion.ul
          className="ml-6 mt-1 bg-gray-50 border-l rounded shadow-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {children}
        </motion.ul>
      )}
    </li>
  );
}