import { useState, useEffect, useRef } from "react";
import {
  Sidebar as FlowSidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
} from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiArrowSmRight,
} from "react-icons/hi";
import logo from "../../assets/favicon.ico";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="m-2 p-3 bg-blue-500 text-white rounded sm:hidden"
      >
        ☰
      </button>

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-white border-r border-gray-200 transition-transform sm:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FlowSidebar aria-label="Sidebar with logo branding example">
          <SidebarLogo href="#" img={logo} imgAlt="logo">
            Grocery
          </SidebarLogo>
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
              <SidebarItem href="#" icon={HiViewBoards}>
                Kanban
              </SidebarItem>
              <SidebarItem href="#" icon={HiInbox}>
                Inbox
              </SidebarItem>
              <SidebarItem href="#" icon={HiUser}>
                Users
              </SidebarItem>
              <SidebarItem href="#" icon={HiShoppingBag}>
                Products
              </SidebarItem>
              <SidebarItem href="#" icon={HiArrowSmRight}>
                Sign In
              </SidebarItem>
              <SidebarItem href="#" icon={HiTable}>
                Sign Up
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </FlowSidebar>
      </div>
    </>
  );
}
