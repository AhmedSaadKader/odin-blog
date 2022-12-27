import "../assets/css/BigSidebar.css";
import NavLinks from "./NavLinks";

const BigSidebar = ({ sidebarActive }) => {
  return (
    <div className={sidebarActive ? "bigSideBar active" : "bigSideBar"}>
      <NavLinks />
    </div>
  );
};

export default BigSidebar;
