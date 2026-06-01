import { Link } from "react-router-dom";

function Navbar({
  cartCount,
  search,
  setSearch,
  darkMode,
  setDarkMode
}) {

  return (

    <nav
      style={{
        background: darkMode ? "#111" : "black",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >

      <h1>E-Store</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }}
      >

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "none"
          }}
        />

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "8px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {darkMode ? "Light ☀️" : "Dark 🌙"}
        </button>

        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Home
        </Link>

        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Cart 🛒 {cartCount}
        </Link>

      </div>

    </nav>

  );
}

export default Navbar;