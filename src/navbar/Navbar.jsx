import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className="navbar px-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(6px)",
          position: "absolute",
          width: "100%",
          top: 0,
          zIndex: 10,
        }}
      >
        <div className="container d-flex justify-content-between align-items-center py-2">
          
          <NavLink
            to="/"
            className="navbar-brand fw-bold fs-3 text-white text-decoration-none"
          >
            Everest
          </NavLink>

          
          <button
            className="btn btn-outline-light d-lg-none"
            onClick={toggleMenu}
          >
            ☰
          </button>

         
          <div
            className={`navbar-nav gap-3 d-lg-flex flex-column flex-lg-row ${
              isOpen ? "d-flex mt-3" : "d-none"
            }`}
          >
            {["about", "gallery", "contact"].map((page) => (
              <NavLink
                key={page}
                to={`/${page}`}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-white fw-bold fs-5 active-link"
                    : "nav-link text-white fs-5 normal-link"
                }
                onClick={() => setIsOpen(false)} // close on click
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <style>
        {`
          .active-link {
            border: 2px solid #5dade2;
            border-radius: 6px;
            padding: 4px 12px;
            transition: all 0.3s ease;
            background-color: rgba(93, 173, 226, 0.2);
          }

          .normal-link {
            padding: 4px 12px;
            border-radius: 6px;
            transition: all 0.3s ease;
          }

          .normal-link:hover {
            background-color: rgba(93, 173, 226, 0.3);
            transform: translateY(-2px);
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
