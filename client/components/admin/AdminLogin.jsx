// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5800/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
   
      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-sm bg-white/20 p-10 rounded-2xl shadow-2xl w-96 flex flex-col gap-6 border border-white/30"
      >
        <h2 className="text-3xl font-extrabold text-white text-center mb-4 drop-shadow-lg">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-white/50 rounded-xl px-4 py-3 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-white/50 rounded-xl px-4 py-3 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition"
          required
        />

        <button
          type="submit"
          className={`bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 hover:scale-105 transition-transform duration-200 shadow-lg ${
            loading ? "cursor-not-allowed opacity-70" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p className="text-red-300 text-sm text-center animate-pulse">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default AdminLogin;
