import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../assets/todo.css";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      showToast("Passwords do not match!");
      return;
    }
    try {
      const { data } = await API.post("/auth/signup", form); // Token will be stored in cookies
      localStorage.setItem("user", JSON.stringify(data.user)); // ✅ Only store non-sensitive user data
      showToast("Signup successful!");
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      console.error(err);
      showToast(err.response?.data?.msg || "Signup failed");
    }
  };

  const showToast = (msg) => {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.remove("d-none");
    setTimeout(() => toast.classList.add("d-none"), 3000);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-5 shadow-lg auth-card w-100" style={{ maxWidth: "450px" }}>
        <h2 className="text-center mb-4 auth-heading">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="form-control" required />
          </div>
          <button type="submit" className="btn btn-warning w-100">Sign Up</button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <button className="btn btn-link auth-link p-0" onClick={() => navigate("/")}>
            Login
          </button>
        </p>
      </div>
      <div
        id="toast"
        className="position-fixed bottom-0 start-50 translate-middle-x bg-success text-white px-4 py-2 rounded mt-3 d-none"
        style={{ zIndex: 9999 }}
      >
        Toast Message
      </div>
    </div>
  );
};

export default Signup;
