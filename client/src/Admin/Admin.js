import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Admin = () => {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();



  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   await login(inputs)
    const res = await axios.post("/admin/login", inputs);
    localStorage.setItem("admin", JSON.stringify(res));
      navigate("/adminviewpost");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>Admin's Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Admin Name"
          name="name"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
      </form>
    </div>
  );
};

export default Admin;