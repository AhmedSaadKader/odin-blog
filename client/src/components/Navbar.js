import { FaAlignLeft, FaUserCircle } from "react-icons/fa";
import { Logo } from "./index";
import "../assets/css/Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navBar">
      <button className="toggleButton" onClick={toggleSidebar}>
        <FaAlignLeft />
      </button>
      <Logo width="90px" />
      <FaUserCircle className="userCircle" />
    </nav>
  );
};

export default Navbar;
