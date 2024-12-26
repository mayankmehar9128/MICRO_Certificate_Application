import { useContext, createContext, useState } from "react";
import { MoreVertical, ChevronLast, ChevronFirst, ChevronDown } from "lucide-react";

const SidebarContext = createContext();

export default function Sidebar({ children, onSubmenuSelect }) {
  const [expanded, setExpanded] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track the currently open submenu

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

        <SidebarContext.Provider
          value={{
            expanded,
            openSubmenu,
            setOpenSubmenu,
            onSubmenuSelect, // Pass the submenu selection handler
          }}
        >
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="Avatar"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, submenus, active, onClick }) {
  const { expanded, openSubmenu, setOpenSubmenu, onSubmenuSelect } = useContext(SidebarContext);

  const isOpen = openSubmenu === text; // Check if the current submenu is open

  const handleToggle = () => {
    if (submenus) {
      setOpenSubmenu(isOpen ? null : text); // Toggle submenu state
    } else if (onClick) {
      onClick(); // Handle parent menu click (like Dashboard)
    }
  };

  const handleSubmenuClick = (submenuText) => {
    if (onSubmenuSelect) {
      onSubmenuSelect(submenuText); // Notify parent of submenu selection
    }
  };

  return (
    <li className="relative">
      {/* Parent Menu */}
      <div
        className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
        onClick={handleToggle}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
        >
          {text}
        </span>
        {submenus && expanded && <ChevronDown className="ml-auto" />}
      </div>

      {/* Submenu */}
      {submenus && expanded && isOpen && ( // Ensure submenu is only shown when sidebar is expanded
        <ul
          className={`ml-3 mt-1 bg-gray-50 border rounded shadow-sm overflow-hidden transition-all ${
            expanded ? "max-w-full" : "absolute left-full top-0 w-48"
          }`}
        >
          {submenus.map((submenu, index) => (
            <li
              key={index}
              className={`px-3 py-2 cursor-pointer text-gray-600 hover:bg-indigo-50 rounded-md ${
                active === submenu ? "bg-indigo-100 text-indigo-800 font-medium" : ""
              }`}
              onClick={() => handleSubmenuClick(submenu)} // Trigger submenu selection
            >
              {submenu}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}







// export default function Sidebar({ children, navigate }) {
//   const [expanded, setExpanded] = useState(true);
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   return (
//     <aside
//       className={`h-screen transition-all duration-300 ${expanded ? "w-64" : "w-16"} relative`}
//     >
//       <nav className="h-full flex flex-col bg-white border-r shadow-sm">
//         <div className="p-4 pb-2 flex justify-between items-center">
//           <img
//             src="https://img.logoipsum.com/243.svg"
//             className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
//             alt="Logo"
//           />
//           <button
//             onClick={() => setExpanded((curr) => !curr)}
//             className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
//           >
//             {expanded ? <ChevronFirst /> : <ChevronLast />}
//           </button>
//         </div>

//         <SidebarContext.Provider
//           value={{
//             expanded,
//             openSubmenu,
//             setOpenSubmenu,
//             navigate, // Pass navigation function
//           }}
//         >
//           <ul className="flex-1 px-3">{children}</ul>
//         </SidebarContext.Provider>

//         <div className="border-t flex p-3">
//           <img
//             src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
//             alt="Avatar"
//             className="w-10 h-10 rounded-md"
//           />
//           <div
//             className={`flex justify-between items-center overflow-hidden transition-all ${
//               expanded ? "w-52 ml-3" : "w-0"
//             }`}
//           >
//             <div className="leading-4">
//               <h4 className="font-semibold">John Doe</h4>
//               <span className="text-xs text-gray-600">johndoe@gmail.com</span>
//             </div>
//             <MoreVertical size={20} />
//           </div>
//         </div>
//       </nav>
//     </aside>
//   );
// }

// export function SidebarItem({ icon, text, submenus, route }) {
//   const { expanded, openSubmenu, setOpenSubmenu, navigate } = useContext(SidebarContext);

//   const isOpen = openSubmenu === text;

//   const handleToggle = () => {
//     if (submenus) {
//       setOpenSubmenu(isOpen ? null : text);
//     } else if (route) {
//       navigate(route); // Navigate to the selected route
//     }
//   };

//   return (
//     <li className="relative">
//       <div
//         className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
//           isOpen ? "bg-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"
//         }`}
//         onClick={handleToggle}
//       >
//         {icon}
//         <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
//           {text}
//         </span>
//       </div>

//       {submenus && expanded && isOpen && (
//         <ul className="ml-3 mt-1">
//           {submenus.map((submenu, index) => (
//             <li
//               key={index}
//               className="px-3 py-2 cursor-pointer text-gray-600 hover:bg-indigo-50 rounded-md"
//               onClick={() => navigate(submenu.route)} // Navigate to submenu route
//             >
//               {submenu.text}
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// }








// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";

// export default function AdminDeshbordLanding({ children }) {
//   return (
//     <SidebarProvider>
//       <div className="flex">
//         {/* Sidebar */}
//         <AppSidebar />
//         {/* Main Content */}
//         <main className="flex-1">
//           <header className="flex items-center p-4 border-b">
//             <SidebarTrigger className="mr-4" />
//             <h1 className="text-lg font-semibold">Dashboard</h1>
//           </header>
//           <div className="p-4">{children}</div>
//         </main>
//       </div>
//     </SidebarProvider>
//   );
// }