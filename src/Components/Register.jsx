import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "", cart: [] });
//   const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:4000/users?email=${user.email}");
      if (res.data.length > 0) { 
        alert("User already exists!");
      } else {
        await axios.post("http://localhost:4000/users", user);
        alert("Registration successful!");
        // navigate("/login");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} required />
        <button onClick={()=>alert("User Registed Successfully ")}className="btn1" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;