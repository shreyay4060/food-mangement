import { useState } from "react";

const OrderModal = ({ food, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !phone) return;
    onSubmit({ food, name, address, phone });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 8px 32px rgba(221,36,118,0.18)",
          padding: "1.5rem 1rem",
          minWidth: "220px",
          maxWidth: "95vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "18px",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            color: "#ff512f",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          ×
        </button>
        <h2 style={{ color: "#dd2476", marginBottom: "1rem" }}>
          Order: {food.strMeal}
        </h2>
        <div style={{ color: "#ff512f", marginBottom: "1rem" }}>
          Price: ₹{food.price}
        </div>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{
            margin: "0.5rem 0",
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ffb6d5",
            width: "100%",
            fontSize: "1rem",
          }}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          style={{
            margin: "0.5rem 0",
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ffb6d5",
            width: "100%",
            fontSize: "1rem",
          }}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          style={{
            margin: "0.5rem 0 1rem 0",
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ffb6d5",
            width: "100%",
            fontSize: "1rem",
          }}
          required
        />
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
            padding: "0.7rem 2rem",
            fontWeight: 600,
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(221,36,118,0.10)",
            marginTop: "1rem",
            transition: "background 0.3s",
          }}
        >
          Place Order
        </button>
        <style>{`
          @media (max-width: 600px) {
            form {
              min-width: 90vw !important;
              padding: 1rem !important;
            }
          }
        `}</style>
      </form>
    </div>
  );
};

export default OrderModal;