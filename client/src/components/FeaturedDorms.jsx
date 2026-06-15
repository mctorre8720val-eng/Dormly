import "./FeaturedDorms.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const dorms = [
  {
    id: 1,
    name: "Sunrise Dormitory",
    location: "Near UP Diliman",
    rating: 4.8,
    price: "₱3,500 - ₱5,000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "City Stay Dorm",
    location: "Katipunan Ave",
    rating: 4.6,
    price: "₱4,000 - ₱6,000",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "Budget Nest",
    location: "Taft Avenue / University Belt",
    rating: 4.4,
    price: "₱2,500 - ₱4,000",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
  },
];

function FeaturedDorms() {
  return (
    <section className="featured-section">
      <h2>Featured Dorms</h2>
      <p>Top picks near you</p>

      <div className="dorm-grid">
        {dorms.map((dorm) => (
          <div key={dorm.id} className="dorm-card">
            <img src={dorm.image} alt={dorm.name} />

            <div className="dorm-info">
              <h3>{dorm.name}

              </h3>

              <p className="location">
                <FaMapMarkerAlt className="location-icon" />
                {dorm.location}
              </p>

              <div className="bottom">
                <span className="rating">⭐ {dorm.rating}</span>
                <span className="price">{dorm.price}</span>
              </div>

              <button className="view-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDorms;