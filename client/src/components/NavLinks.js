import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="navLinks">
      <NavLink to="/register" className="nav-link">
        Register/Login
      </NavLink>
    </div>
  );
};

export default NavLinks;
