import { useParams } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function GalleryItem() {
  const { id } = useParams();

  const galleryImages = {
    1: [10, 11, 12, 13, 14, 15, 16, 17, 18],
    2: [22, 23, 24, 25, 26, 27, 28, 29, 30],
    3: [35, 36, 37, 38, 39, 40, 41, 42, 43],
  };

  const images = galleryImages[id] || [];

  return (
    <div className="mt-5">
      <h3 className="text-center mb-4">Gallery #{id}</h3>
      <div className="row g-3">
        {images.map((imgId) => (
          <div key={imgId} className="col-sm-6 col-md-4">
            <div className="position-relative overflow-hidden image-wrapper rounded shadow-sm">
              <img
                src={`https://picsum.photos/id/${imgId}/400/300`}
                alt={`Gallery ${id} - Image ${imgId}`}
                className="img-fluid gallery-img"
              />
              <div className="overlay d-flex justify-content-center align-items-center">
                <a href="#" className="icon-link me-3 text-facebook"><FaFacebookF /></a>
                <a href="#" className="icon-link me-3 text-instagram"><FaInstagram /></a>
                <a href="#" className="icon-link text-whatsapp"><FaWhatsapp /></a>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <style>{`
        .image-wrapper {
          transition: transform 0.4s ease, box-shadow 0.3s ease;
        }
.gallery-img {
  transition: transform 0.8s ease, box-shadow 0.8s ease;
}

.image-wrapper:hover .gallery-img {
  transform: scale(1.12) translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
}




        .overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.4s ease;
          color: white;
          font-size: 1.5rem;
        }

        .image-wrapper:hover .overlay {
          opacity: 1;
        }

        .icon-link {
          color: white;
          transition: color 0.3s ease;
          font-size: 1.5rem;
        }

        .text-facebook:hover {
          color: #3b5998;
        }

        .text-instagram:hover {
          color: #e4405f;
        }

        .text-whatsapp:hover {
          color: #25d366;
        }
      `}</style>
    </div>
  );
}
