const Navbar = ({ search, setSearch }) => (
  <nav
    style={{
      position: "fixed",
      top: 0,
      width: "100%",
      background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
      color: "#fff",
      padding: "1.2rem 2.5rem",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 4px 24px rgba(221,36,118,0.15)",
      letterSpacing: "1px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <span style={{ fontSize: "2rem", fontWeight: "bold", color: "#fff", textShadow: "0 2px 8px #dd2476", marginRight: "0.5rem" }}>🍽️</span>
      <h1 style={{ margin: 0, fontFamily: "'Pacifico', cursive", fontWeight: 700, fontSize: "2rem", letterSpacing: "2px", color: "#fff" }}>
        Foodie Menu
      </h1>
    </div>
    <input
      type="text"
      placeholder="Search Indian food..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "0.7rem 1.5rem",
        borderRadius: "30px",
        border: "none",
        fontSize: "1.1rem",
        outline: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        width: "270px",
        transition: "box-shadow 0.3s",
      }}
    />
  </nav>
);

export default Navbar;