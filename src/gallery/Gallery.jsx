import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Gallery() {
  const location = useLocation();
  const isGalleryItem = location.pathname !== "/gallery";

  const [mainGalleryImages] = useState([101, 102, 103, 104, 110, 106, 107, 108, 109]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container py-5 mt-5" style={{ minHeight: "80vh" }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold">Gallery</h2>
        <p className="text-muted">Explore our unique collections</p>
      </div>

      
      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        <Link to="/gallery/1" className="btn btn-outline-dark">Gallery 1</Link>
        <Link to="/gallery/2" className="btn btn-outline-dark">Gallery 2</Link>
        <Link to="/gallery/3" className="btn btn-outline-dark">Gallery 3</Link>
      </div>

      
      {!isGalleryItem && (
        <div className="row g-3 mb-5">
          {mainGalleryImages.map((imgId) => (
            <div key={imgId} className="col-sm-6 col-md-4">
              <div className="image-wrapper rounded-4 shadow-sm overflow-hidden">
                <img
                  src={`https://picsum.photos/id/${imgId}/400/300`}
                  alt={`Main Gallery - Image ${imgId}`}
                  className="img-fluid gallery-img"
                />
              </div>
            </div>
          ))}
        </div>
      )}

     
      <Outlet />

      
      <style>{`
        .gallery-img {
          transition: transform 0.6s ease;
        }

        .image-wrapper:hover .gallery-img {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
