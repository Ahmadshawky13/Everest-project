import React from "react";

const Contact = () => {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.1518477998716!2d31.327912975552133!3d30.092932517450267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fcfa9eb89b9%3A0x45a68fa14f36a74c!2zOCBFbCBQb3N0YSwgRXwgTG9yYmEgSGVsaW9wb2xpcyBXYWxreSwgTmFzciBIZWxpb3BvbGlzLCBDYWlybyBHb3Zlcm5vcmF0ZSwgRWd5cHQ!5e0!3m2!1sen!2seg!4v1721917029123";

  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center bg-light"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      <div className="container">
        <h2 className="text-center mb-5 text-primary fw-bold">Contact Us</h2>

        <div className="row text-center mb-5">
          <div className="col-md-4 mb-3">
            <i className="fas fa-phone fa-2x text-primary mb-2"></i>
            <p className="mb-0">+20 123 456 789</p>
          </div>
          <div className="col-md-4 mb-3">
            <i className="fas fa-envelope fa-2x text-primary mb-2"></i>
            <p className="mb-0">info@example.com</p>
          </div>
          <div className="col-md-4 mb-3">
            <i className="fas fa-map-marker-alt fa-2x text-primary mb-2"></i>
            <p className="mb-0">8 شارع البوسطة - الكوربة - مصر الجديدة</p>
          </div>
        </div>

        <div className="text-center mb-5">
          {["facebook", "twitter", "instagram", "linkedin"].map((network) => (
            <a
              key={network}
              href="#"
              className="mx-2"
              style={{
                color: "#333",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0d6efd")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            >
              <i className={`fab fa-${network} fa-2x`}></i>
            </a>
          ))}
        </div>

        {/* خريطة بحجم أصغر */}
        <div className="rounded-4 shadow overflow-hidden mb-5" style={{ width: "100%", height: "300px" }}>
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map to location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
