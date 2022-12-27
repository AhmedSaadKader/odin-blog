import { useState } from "react";
import { Logo } from "../components";
import "../assets/css/Register.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="registerPage">
      <form onSubmit={onSubmit} className="registerForm">
        <div className="formHeader">
          <Logo width="150px" />
          <h3>Login</h3>
        </div>
        <div className="formRows">
          <div className="form-row">
            <label className="form-label">Email</label>
            <input name="email" type="email" className="form-input" onChange={handleChange} />
          </div>
          <div className="form-row">
            <label className="form-label">Password</label>
            <input name="password" type="password" className="form-input" />
          </div>
          <button className="submitButton">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
