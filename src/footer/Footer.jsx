import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer
        className="text-white py-4"
        style={{
          backgroundColor: "#11252c", 
        }}
      >
        <div className="container text-center">
         
          <div className="d-flex justify-content-center gap-4 mb-3">
            <a href="#" className="social-link">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="social-link">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="social-link">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="social-link">
              <FaWhatsapp size={24} />
            </a>
          </div>

          
          <p className="mb-0" style={{ fontSize: "0.9rem", opacity: 0.9 }}>
            &copy; {new Date().getFullYear()} Everest Watches. All rights reserved.
          </p>
        </div>
      </footer>

      <style>
        {`
          .social-link {
            color: #fff;
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .social-link:hover {
            color: #3498db;
            transform: scale(1.2);
          }
        `}
      </style>
    </>
  );
}

export default Footer;
