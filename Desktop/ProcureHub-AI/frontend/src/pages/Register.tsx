import Navbar from "../components/layout/Navbar";

export default function Register() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#111827",
        }}
      >
        <div
          style={{
            width: "450px",
            background: "white",
            padding: "40px",
            borderRadius: "15px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            Create Account
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
            }}
          />

          <input
            type="email"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "15px",
            }}
          />

          <button
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}