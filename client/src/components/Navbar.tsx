import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#2563eb",
        color: "#fff",
      }}
    >
      <h2>CodeMentor</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff" }}>
          Home
        </Link>

        <Link to="/login" style={{ color: "#fff" }}>
          Login
        </Link>

        <Link to="/register" style={{ color: "#fff" }}>
          Register
        </Link>

        <Link to="/dashboard" style={{ color: "#fff" }}>
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
