import { useState } from "react";
import Sidebar, { SidebarItem } from "@/widgets/Sidebar";
import { LayoutDashboard, Users2, Building2, BookDown, Wallet, UserRoundCog } from "lucide-react";
import AddCenter from "@/widgets/AddCenterForm";
import AddCourse from "@/widgets/AddCourse";
import AdminAddedFrenchiseDetail from "./AdminAddedFrenchiseTable";
import AdminStudentDetail from "./StudentDetails";
import FrenchiseDetail from "./FrenchiseDetils";

function AdminDeshbordLanding() {
  const [activeContent, setActiveContent] = useState("Dashboard"); // State for active content

  return (
    <div className="flex h-screen">
      <Sidebar onSubmenuSelect={(submenu) => setActiveContent(submenu)}>
        {/* Add explicit onClick handler for top-level menus */}
        <SidebarItem
          icon={<LayoutDashboard />}
          text="Dashboard"
          active={activeContent === "Dashboard"}
          onClick={() => setActiveContent("Dashboard")}
        />
        <SidebarItem
          icon={<UserRoundCog />}
          text="Frenchise"
          active={activeContent === "View Frenchise"}
          onClick={() => setActiveContent("View Frenchise")}
        />
        <SidebarItem
          icon={<Users2 />}
          text="Student"
          active={activeContent === "View Student"}
          onClick={() => setActiveContent("View Student")}
        />
        <SidebarItem
          icon={<Building2 />}
          text="Center"
          submenus={["Add Center", "View Center"]}
          active={["Add Center", "View Center"].includes(activeContent) ? activeContent : null}
          onSubmenuSelect={(submenu) => setActiveContent(submenu)}
        />
        <SidebarItem
          icon={<BookDown />}
          text="Course"
          submenus={["Add Course", "View Course"]}
          active={["Add Course", "View Course"].includes(activeContent) ? activeContent : null}
          onSubmenuSelect={(submenu) => setActiveContent(submenu)}
        />
        <SidebarItem
          icon={<Wallet />}
          text="Wallet"
          submenus={["View Transaction History"]}
          active={["View Transaction History"].includes(activeContent) ? activeContent : null}
          onSubmenuSelect={(submenu) => setActiveContent(submenu)}
        />
      </Sidebar>

      <main className="flex-1 p-4 bg-gray-100 overflow-auto">
        <div className="w-full max-w-8xl">
          {/* Render content dynamically based on activeContent */}
          {activeContent === "View Frenchise" && <div><AdminAddedFrenchiseDetail /></div>}
          {activeContent === "View Student" && <div><AdminStudentDetail /></div>}
          {activeContent === "Add Center" && <div><AddCenter /></div>}
          {activeContent === "View Center" && <div><FrenchiseDetail /></div>}
          {activeContent === "Add Course" && <div><AddCourse /></div>}
          {activeContent === "View Course" && <p>View Course Content</p>}
          {activeContent === "View Transaction History" && (
            <p>View Transaction History Content</p>
          )}
          {activeContent === "Dashboard" && <p>Dashboard Content</p>}
        </div>
      </main>
    </div>
  );
}

export default AdminDeshbordLanding;















// import { Routes, Route, useNavigate } from "react-router-dom";
// import AddCenter from "@/widgets/AddCenterForm";
// import AddCourse from "@/widgets/AddCourse";
// import Deshbord from '@/widgets/Deshbord';
// import Sidebar, { SidebarItem } from '@/widgets/Sidebar';
// import { ChevronDown, ChevronLast } from "lucide-react";

// function AdminDeshbordLanding() {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   return (
//     <div className="flex h-screen">
//       <Sidebar navigate={navigate}> {/* Pass navigate to Sidebar */}
//         <SidebarItem icon={<ChevronLast />} text="Dashboard" route="/AdminDashbord" />
//         <SidebarItem
//           icon={<ChevronDown />}
//           text="Manage"
//           submenus={[
//             { text: "Add Center", route: "/AdminDashbord/AddCenter" },
//             { text: "Add Course", route: "/AdminDashbord/AddCourse" },
//             { text: "View Center", route: "/AdminDashbord/ViewCenter" },
//           ]}
//         />
//       </Sidebar>
//       <main className="flex-1 p-4 bg-gray-100 overflow-auto">
//         <div className="w-full max-w-6xl">
//           <Routes>
//             <Route path="/AdminDashbord" element={<Deshbord />} />
//             <Route path="/AdminDashbord/AddCenter" element={<AddCenter />} />
//             <Route path="/AdminDashbord/AddCourse" element={<AddCourse />} />
//             <Route path="/AdminDashbord/ViewCenter" element={<Deshbord />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default AdminDeshbordLanding;











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