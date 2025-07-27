import React from "react";
import bgImage from "../assets/imgs/546508.jpg";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "80px",
    color: "#fff",
    textShadow: "1px 1px 3px #000",
  };

  return (
    <div style={backgroundStyle}>
      <h1 className="display-4 fw-bold mb-4">Swiss Luxury Time</h1>

      
      <div className="gear-icon mb-4">
        <i className="fas fa-cog"></i>
      </div>

      <p className="fs-5 text-center" style={{ maxWidth: "600px" }}>
        Experience the precision and craftsmanship of Swiss-made timepieces that stand the test of time.
      </p>

      <style>{`
        .gear-icon {
          font-size: 80px;
          color: #f1c40f;
          animation: spin 5s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;
