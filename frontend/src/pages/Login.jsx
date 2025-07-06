import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import '../assets/todo.css';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isGoogleReady, setIsGoogleReady] = useState(false);

  useEffect(() => {
    // Load Google script only once
    if (!document.querySelector('script[src="https://accounts.google.com/gsi/client"]')) {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setIsGoogleReady(true);
      };
      document.head.appendChild(script);
    } else {
      setIsGoogleReady(true);
    }
  }, []);

  const handleGoogleLogin = () => {
    if (!window.google) {
      console.error("Google Sign-In not loaded");
      return;
    }

    window.google.accounts.id.initialize({
      client_id: "318395185285-t2u8mg4jsn8v55v7qkflthq8tsrss6uq.apps.googleusercontent.com",
      callback: handleGoogleResponse,
    });

    window.google.accounts.id.prompt(); // Show the One Tap dialog
  };

  const handleGoogleResponse = async (res) => {
    console.log("Google credential:", res.credential);

    try {
      const { data } = await API.post("/auth/google", {
        token: res.credential,
      });

      localStorage.setItem("user", JSON.stringify(data.user));
      showToast("Google login successful");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      console.error("Google login error:", err);
      showToast("Google login failed: " + (err.response?.data?.msg || "Try again"));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", form, { withCredentials: true });
      localStorage.setItem("user", JSON.stringify(data.user));
      showToast("Logged in successfully");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      console.error("Login error:", err);
      showToast("Login failed: " + (err.response?.data?.msg || "Try again"));
    }
  };

  const showToast = (msg) => {
    const toast = document.getElementById("toast");
    if (toast) {
      toast.textContent = msg;
      toast.classList.remove("d-none");
      setTimeout(() => toast.classList.add("d-none"), 3000);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-5 shadow-lg auth-card w-100" style={{ maxWidth: "450px" }}>
        <h2 className="text-center mb-4 auth-heading">Login to Task Manager</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <div className="text-center my-3">or</div>
        <div className="d-flex justify-content-center mb-3">
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={!isGoogleReady}
            className="btn btn-outline-primary d-flex align-items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
              <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2.04a4.8 4.8 0 0 1-7.18-2.53H1.83v2.07A8 8 0 0 0 8.98 17z"/>
              <path fill="#FBBC05" d="M4.5 10.49a4.8 4.8 0 0 1 0-3.07V5.35H1.83a8 8 0 0 0 0 7.28l2.67-2.14z"/>
              <path fill="#EA4335" d="M8.98 4.72c1.16 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.35L4.5 7.42a4.77 4.77 0 0 1 4.48-2.7z"/>
            </svg>
            {isGoogleReady ? 'Sign in with Google' : 'Loading...'}
          </button>
        </div>

        <p className="text-center">
          Don't have an account?{" "}
          <button className="btn btn-link auth-link p-0" onClick={() => navigate("/signup")}>
            Create Account
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

export default Login;