import React from "react";
import watchVideo from "../assets/imgs/3019.mp4";
import { FaCogs, FaGem, FaRegClock } from "react-icons/fa";

const About = () => {
  return (
    <div style={{ paddingTop: "100px", backgroundColor: "#fff", color: "#2c3e50" }}>
      <div className="container py-2">
         
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">About Everest Watches</h2>
          <p className="fs-5 mt-3 mx-auto" style={{ maxWidth: "700px" }}>
            At Everest, we craft timeless pieces that embody precision, elegance, and Swiss luxury. Every watch tells a story of craftsmanship and excellence.
          </p>
        </div>

       
        <div className="row text-center mb-3">
          <div className="col-md-4 mb-4">
            <FaGem className="fs-1 mb-2 animate-icon text-danger" />
            <h5 className="fw-bold">Luxury Materials</h5>
            <p>Only the finest materials are used in every watch we build.</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaRegClock className="fs-1 mb-2 animate-icon text-primary" />
            <h5 className="fw-bold">Precision Timekeeping</h5>
            <p>Swiss mechanisms ensure accurate and reliable performance.</p>
          </div>
          <div className="col-md-4 mb-4">
            <FaCogs className="fs-1 mb-2 animate-icon text-success" />
            <h5 className="fw-bold">Craftsmanship</h5>
            <p>Every detail is hand-finished by expert watchmakers.</p>
          </div>
        </div>

      
        <div className="d-flex justify-content-center mb-5">
          <video
            src={watchVideo}
            autoPlay
            muted
            loop
            playsInline
            className="rounded shadow"
            style={{
              width: "90%",
              maxWidth: "1000px",
              height: "500px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      
      <style>
        {`
          .animate-icon {
            animation: float 2.5s ease-in-out infinite;
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default About;
