import React from "react";
import { FaCog } from "react-icons/fa"; 

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      
      <FaCog
        className="text-primary spinning-gear"
        style={{ fontSize: "4rem" }}
      />

      
      <h4 className="mt-4 text-secondary fw-semibold">Loading Everest...</h4>

      
      <style>{`
        .spinning-gear {
          animation: spin 1.8s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
