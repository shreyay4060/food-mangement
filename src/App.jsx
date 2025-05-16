import { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import FoodList from "./components/FoodList";
import OrderModal from "./components/OrderModal";
import Login from "./components/Login";
import { auth, signOut } from "./firebase";

function App() {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [user, setUser] = useState(auth.currentUser);

  // Handle login
  const handleLogin = (user) => setUser(user);

  // Handle logout
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // Handle order button click
  const handleOrderClick = (food) => {
    setSelectedFood(food);
    setShowModal(true);
  };

  // Handle order form submit
  const handleOrderSubmit = (orderData) => {
    setOrder(orderData);
    setShowModal(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "linear-gradient(120deg, #fff 60%, #ffe0f7 100%)",
        boxSizing: "border-box",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "5px", // Responsive padding
      }}
    >
      <Navbar search={search} setSearch={setSearch} onLogout={handleLogout} />
      <div style={{ height: "80px" }} /> {/* Spacer for navbar */}
      <Carousel />
      <FoodList search={search} onOrder={handleOrderClick} />
      {showModal && (
        <OrderModal
          food={selectedFood}
          onClose={() => setShowModal(false)}
          onSubmit={handleOrderSubmit}
        />
      )}
      {order && (
        <div
          style={{
            margin: "0px auto 1rem auto",
            maxWidth: "600px",
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 8px 32px rgba(221,36,118,0.10)",
            padding: "2rem",
            textAlign: "center",
            color: "#dd2476",
            fontWeight: 600,
            fontSize: "1.2rem",
            letterSpacing: "1px",
          }}
        >
          <h2 style={{ color: "#ff512f" }}>Your Order:</h2>
          <div>
            <strong>Food:</strong> {order.food.strMeal} <br />
            <strong>Price:</strong> ₹{order.food.price} <br />
            <strong>Name:</strong> {order.name} <br />
            <strong>Address:</strong> {order.address} <br />
            <strong>Phone:</strong> {order.phone}
          </div>
        </div>
      )}
      <footer
        style={{
          textAlign: "center",
          padding: "1.5rem 0 1rem 0",
          color: "#dd2476",
          fontWeight: 500,
          fontSize: "1.1rem",
          letterSpacing: "1px",
          background: "transparent",
        }}
      >
        Made with <span style={{ color: "#ff512f" }}>♥</span> by Foodie App
      </footer>
    </div>
  );
}

export default App;
