import { useState } from "react";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#0f172a",
        color: "white",
        borderBottom: "1px solid #334155",
      }}
    >
      <h2 style={{ margin: 0 }}>
        🚀 ProcureHub AI
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>

        <a href="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>

        <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>

        <a href="/pricing" style={{ color: "white", textDecoration: "none" }}>
          Pricing
        </a>

        <button
  onClick={() => setDarkMode(!darkMode)}
  style={{
    padding: "8px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  {darkMode ? "☀️" : "🌙"}
</button>

        <a href="/login">
          <button
            style={{
              padding: "10px 18px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </a>

        <a href="/register">
          <button
            style={{
              padding: "10px 18px",
              borderRadius: "8px",
              background: "#2563eb",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </a>
      </div>
    </nav>
  );
}