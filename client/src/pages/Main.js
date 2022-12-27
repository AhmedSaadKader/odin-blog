import { Navbar, BigSidebar } from "../components";
import { useState } from "react";

export default function Main() {
  const [sidebarActive, setSidebarActive] = useState(true);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <BigSidebar sidebarActive={sidebarActive} />
    </div>
  );
}
