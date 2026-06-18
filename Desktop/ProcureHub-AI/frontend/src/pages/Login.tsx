import Navbar from "../components/layout/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#0f172a",
        }}
      >
        <div
          style={{
            width: "400px",
            background: "white",
            padding: "40px",
            borderRadius: "15px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
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
          onClick={()  => { 
          window.location.href = "/buyer";
          }}
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
            Login
          </button>
          <p style={{ marginTop: "15px", textAlign: "center" }}>
  Don't have an account?
  <a
    href="/register"
    style={{
      marginLeft: "5px",
      color: "#2563eb",
      fontWeight: "bold",
    }}
  >
    Sign Up
  </a>
</p>
        </div>
      </div>
    </>
  );
}