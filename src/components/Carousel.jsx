import { useState } from "react";

const images = [
  {
    url: "https://www.themealdb.com/images/media/meals/1525876468.jpg",
    caption: "Delicious Biryani",
  },
  {
    url: "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
    caption: "Butter Chicken",
  },
  {
    url: "https://www.themealdb.com/images/media/meals/1529444830.jpg",
    caption: "Chole Bhature",
  },
  {
    url: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
    caption: "Crispy Dosa",
  },
  {
    url: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    caption: "Paneer Tikka",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="carousel"
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "10px auto 0 auto",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(221,36,118,0.13)",
        position: "relative",
        background: "#fff",
        minHeight: "40px",
        padding: "5px",
        marginBottom: "3rem",
      }}
    >
      <img
        src={images[index].url}
        alt={images[index].caption}
        style={{
          width: "100%",
          height: "360px",
          objectFit: "cover",
          transition: "opacity 0.5s",
          // marginBottom: "3 rem",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          background: "rgba(255,81,47,0.7)",
          color: "#fff",
          padding: "1rem",
          fontWeight: 600,
          fontSize: "1.3rem",
          textAlign: "center",
          letterSpacing: "1px",
        }}
      >
        {images[index].caption}
      </div>
      {/* Left Arrow */}
      <button
        onClick={prev}
        style={{
          position: "absolute",
          top: "50%",
          left: "18px",
          transform: "translateY(-50%)",
          background: "rgba(221,36,118,0.7)",
          border: "none",
          borderRadius: "50%",
          width: "42px",
          height: "42px",
          color: "#fff",
          fontSize: "1.7rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(221,36,118,0.13)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s",
        }}
        aria-label="Previous"
      >
        &#8592;
      </button>
      {/* Right Arrow */}
      <button
        onClick={next}
        style={{
          position: "absolute",
          top: "50%",
          right: "18px",
          transform: "translateY(-50%)",
          background: "rgba(221,36,118,0.7)",
          border: "none",
          borderRadius: "50%",
          width: "42px",
          height: "42px",
          color: "#fff",
          fontSize: "1.7rem",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(221,36,118,0.13)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s",
        }}
        aria-label="Next"
      >
        &#8594;
      </button>
      <style>{`
        @media (max-width: 700px) {
        .carousel{
        
            width: 90vw !important;
            // height: 200px !important;
            padding: 1rem !important;
          }
          img {
            height: 150px !important;
            mtargin: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;