import React, { useState, useEffect } from "react";
import '../index.css'

const BtnTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        className="btnTop scrollTop p-6 bg-white"
        onClick={scrollToTop}
        style={styles.button}
      >
        <div className="margintop5" style={{ marginTop: "3px" }}>
          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            width="40px"
            height="40px"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <polyline points="16 48 32 32 48 48"></polyline>
              <polyline points="16 32 32 16 48 32"></polyline>
            </g>
          </svg>
        </div>
      </button>
    )
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "2px 10px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default BtnTop;
