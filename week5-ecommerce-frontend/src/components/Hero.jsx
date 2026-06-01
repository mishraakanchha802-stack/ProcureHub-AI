function Hero() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, blue, purple)",
        color: "white",
        textAlign: "center",
        padding: "80px",
      }}
    >

      <h1
        style={{
          fontSize: "50px"
        }}
      >
        Welcome to E-Store 🚀
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "20px"
        }}
      >
        Best Products at Amazing Prices
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          background: "white",
          color: "blue",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Shop Now
      </button>

    </div>
  );
}

export default Hero;