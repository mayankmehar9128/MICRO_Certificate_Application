import { useState } from "react";
import Sidebar, { SidebarItem } from "@/widgets/Sidebar";
import { LayoutDashboard, Users2, Building2, BookDown, Wallet, UserRoundCog } from "lucide-react";
import FrenchiseDetail from "../Admin/FrenchiseDetils";
import AddStudent from "@/widgets/AddStudentForm";
import { FrenchiseStudentsDatatable } from "@/reUsableComponents/FrenchiseAddStudent";

function FrenchiseLanding() {
  const [activeContent, setActiveContent] = useState("Dashboard"); // State for active content

  return (
    <main className="flex h-screen">
        <Sidebar onSubmenuSelect={(submenu) => setActiveContent(submenu)}>
          {/* Add explicit onClick handler for top-level menus */}
          <SidebarItem
            icon={<LayoutDashboard />}
            text="Dashboard"
            active={activeContent === "Dashboard"}
            onClick={() => setActiveContent("Dashboard")}
          />
          <SidebarItem
            icon={<Building2 />}
            text="Manage Student"
            submenus={["Add Student", "View Student"]}
            active={["Add Student", "View Student"].includes(activeContent) ? activeContent : null}
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
            {activeContent === "Add Student" && <div><AddStudent /></div>}
            {activeContent === "View Student" && <div><FrenchiseStudentsDatatable /></div>}
            {activeContent === "View Transaction History" && (
              <p>View Transaction History Content</p>
            )}
            {activeContent === "Dashboard" && <p>Dashboard Content</p>}
          </div>
        </main>
    </main>
  )
}

export default FrenchiseLanding