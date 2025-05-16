import { useEffect, useState, useRef, useCallback } from "react";
import FoodCard from "./FoodCard";
import Loader from "./Loader";

// Helper to get random price
function getRandomPrice() {
  return (Math.random() * 200 + 100).toFixed(0);
}

const PAGE_SIZE = 9; // 3 rows of 3

const FoodList = ({ search, onOrder }) => {
  const [foods, setFoods] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const page = useRef(1);

  // Fetch Indian foods only
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`
    )
      .then((res) => res.json())
      .then((data) => {
        let meals = data.meals || [];
        // Add random price
        meals = meals.map((meal) => ({
          ...meal,
          price: getRandomPrice(),
        }));
        // Filter by search
        if (search) {
          meals = meals.filter((meal) =>
            meal.strMeal.toLowerCase().includes(search.toLowerCase())
          );
        }
        setFoods(meals);
        setDisplayed(meals.slice(0, PAGE_SIZE));
        setHasMore(meals.length > PAGE_SIZE);
        page.current = 1;
        setLoading(false);
      });
  }, [search]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      hasMore &&
      !loading
    ) {
      setLoading(true);
      setTimeout(() => {
        const nextPage = page.current + 1;
        const nextItems = foods.slice(0, nextPage * PAGE_SIZE);
        setDisplayed(nextItems);
        setHasMore(nextItems.length < foods.length);
        page.current = nextPage;
        setLoading(false);
      }, 700); // Simulate loading
    }
  }, [foods, hasMore, loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      style={{
        width: "100%",
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2.5rem",
        justifyItems: "center",
        alignItems: "flex-start",
        padding: "2.5rem 2vw",
        minHeight: "60vh",
        background: "transparent",
        transition: "background 0.5s",
      }}
    >
      {displayed.length === 0 && !loading && (
        <p style={{ color: "#ff512f", fontWeight: 600, fontSize: "1.2rem" }}>
          No Indian foods found.
        </p>
      )}
      {displayed.map((food) => (
        <FoodCard key={food.idMeal} food={food} onOrder={onOrder} />
      ))}
      {loading && <Loader />}
    </div>
  );
};

export default FoodList;