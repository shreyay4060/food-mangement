import { useEffect, useState } from "react";

const FoodCard = ({ food, onOrder }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div
      className={`food-card ${show ? "show" : ""}`}
      style={{
        background: "linear-gradient(135deg, #fff 70%, #ffe0f7 100%)",
        borderRadius: "18px",
        boxShadow: "0 8px 32px rgba(221,36,118,0.10)",
        padding: "1.5rem 1rem 1.2rem 1rem",
        margin: "0",
        width: "100%",
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "transform 0.3s, box-shadow 0.3s, opacity 0.7s",
        opacity: show ? 1 : 0,
        transform: show ? "scale(1)" : "scale(0.95)",
        border: "2px solid #ffb6d5",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src={food.strMealThumb}
        alt={food.strMeal}
        style={{
          width: "100%",
          borderRadius: "14px",
          boxShadow: "0 4px 16px rgba(221,36,118,0.08)",
          marginBottom: "1rem",
          transition: "transform 0.3s",
        }}
        className="food-img"
      />
      <h3
        style={{
          margin: "0.5rem 0 0.2rem 0",
          fontWeight: 700,
          fontSize: "1.3rem",
          color: "#dd2476",
          textAlign: "center",
        }}
      >
        {food.strMeal}
      </h3>
      <p style={{ color: "#888", margin: "0.2rem 0 0.7rem 0" }}>
        {food.strArea} | {food.strCategory}
      </p>
      <div
        style={{
          fontWeight: 600,
          fontSize: "1.1rem",
          color: "#ff512f",
          marginBottom: "0.7rem",
        }}
      >
        ₹ {food.price}
      </div>
      <button
        style={{
          background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          padding: "0.5rem 1.5rem",
          fontWeight: 600,
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(221,36,118,0.10)",
          transition: "background 0.3s",
        }}
        onClick={() => onOrder(food)}
      >
        Order Now
      </button>
      <span
        style={{
          position: "absolute",
          top: "18px",
          right: "18px",
          fontSize: "1.3rem",
          color: "#ff512f",
          opacity: 0.15,
        }}
      >
        ★
      </span>
      <style>{`
        .food-card:hover {
          transform: scale(1.04) translateY(-6px) rotate(-1deg);
          box-shadow: 0 12px 32px rgba(221,36,118,0.18);
          border-color: #ff512f;
          background: linear-gradient(135deg, #ffe0f7 60%, #fff 100%);
        }
        .food-img:hover {
          transform: scale(1.05) rotate(2deg);
        }
      `}</style>
    </div>
  );
};

export default FoodCard;