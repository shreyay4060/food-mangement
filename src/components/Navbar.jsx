const Navbar = ({ search, setSearch, onLogout }) => (
  <nav
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
      color: "#fff",
      padding: "5px",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 4px 24px rgba(221,36,118,0.15)",
      letterSpacing: "1px",
      flexWrap: "wrap",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <span style={{ fontSize: "2rem", fontWeight: "bold", color: "#fff", textShadow: "0 2px 8px #dd2476", marginRight: "0.5rem" }}>🍽️</span>
      <h1 style={{ margin: 0, fontFamily: "'Pacifico', cursive", fontWeight: 700, fontSize: "2rem", letterSpacing: "2px", color: "#fff" }}>
        Foodie Menu
      </h1>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.7rem 1rem",
          height: "33px",
          borderRadius: "30px",
          // border: "none",
          fontSize: "1.1rem",
          color: "white",
          outline: "none",
          border:"1px solid #faf8f9",
          boxShadow: "0 2px 8px rgba(0,0,0,0.9)",
          width: "150px",
          backgroundColor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
        }}
      />
      <button
        onClick={onLogout}
        style={{
          background: "#fff",
          color: "#dd2476",
          border: "1px solid #ffb6d5",
          borderRadius: "18px",
          padding: "0.5rem 1.2rem",
          fontWeight: 600,
          fontSize: "1rem",
          marginRight: "1rem",
          width: "90px",
          textAlign: "center",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(221,36,118,0.10)",
          transition: "background 0.3s",
        }}
      >
        Logout
      </button>
    </div>
    <style>{`
      @media (max-width: 600px) {
        nav {
          flex-direction: column !important;
          align-items: flex-start !important;
        }
        nav input {
          width: 100px !important;
          font-size: 0.9rem !important;
          margin-top: 1rem !important;
        }
        nav h1 {
          font-size: 1.2rem !important;
        }
        nav button {
          width: 80px !important;
          font-size: 0.9rem !important;
          margin-top: 1rem !important;
        }
      }
    `}</style>
  </nav>
);

export default Navbar;