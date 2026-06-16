import { FaMapMarkerAlt } from "react-icons/fa";
import "./DormList.css";

const dorms = [
  {
    id: 1,
    name: "Sunrise Dormitory",
    location: "Near UP Diliman",
    rating: 4.8,
    price: "₱3,500 - ₱5,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 2,
    name: "Katipunan Student House",
    location: "Katipunan Avenue",
    rating: 4.7,
    price: "₱4,500 - ₱7,000",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 3,
    name: "Campus Corner Dorm",
    location: "Near Ateneo",
    rating: 4.5,
    price: "₱3,000 - ₱5,000",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 4,
    name: "Urban Nest Residence",
    location: "Taft Avenue",
    rating: 4.6,
    price: "₱4,000 - ₱6,500",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 5,
    name: "Greenview Dorm",
    location: "Quezon City",
    rating: 4.9,
    price: "₱5,500 - ₱8,000",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  },
];


function DormList() {
  return (
    <section className="dorm-list-section">

      <div className="dorm-grid">

        {dorms.map((dorm) => (
          <div 
            key={dorm.id} 
            className="dorm-card"
          >

            <img
              src={dorm.image}
              alt={dorm.name}
            />


            <div className="dorm-info">

              <h3>
                {dorm.name}
              </h3>


              <p className="location">

                <FaMapMarkerAlt />

                {dorm.location}

              </p>


              <div className="bottom">

                <span>
                  ⭐ {dorm.rating}
                </span>


                <span>
                  {dorm.price}
                </span>

              </div>


              <button>
                View Details
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}


export default DormList;