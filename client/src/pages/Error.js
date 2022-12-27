import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";

const divStyle = {
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const imgStyle = {
  width: "50%",
};

const Error = () => {
  return (
    <div style={divStyle}>
      <img src={img} alt="Page not found" style={imgStyle} />
      <h3>Ohh! page not found</h3>
      <p>We can't seem to find the page you're looking for.</p>
      <Link to={"/"}>back home</Link>
    </div>
  );
};

export default Error;
