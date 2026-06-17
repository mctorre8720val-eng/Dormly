import "./Rankings.css";
import { FaStar } from "react-icons/fa";

const rankings = [
  {
    rank: 1,
    name: "Sunrise Dormitory",
    location: "Near UP Diliman",
    rating: 4.9,
    reviews: 120,
  },
  {
    rank: 2,
    name: "Campus View Residence",
    location: "Quezon City",
    rating: 4.8,
    reviews: 98,
  },
  {
    rank: 3,
    name: "Green Homes Dorm",
    location: "Katipunan",
    rating: 4.7,
    reviews: 85,
  },
];

function Rankings() {
  return (
    <section className="rankings">

      <div className="ranking-header">
        <h2>Top Ranked Dorms</h2>
        <p>Based on student ratings and reviews</p>
      </div>


      <div className="ranking-list">

        {rankings.map((dorm) => (
          <div className="ranking-card" key={dorm.rank}>

            <div className="rank-number">
              #{dorm.rank}
            </div>


            <div className="rank-info">
              <h3>{dorm.name}</h3>
              <p>{dorm.location}</p>

              <div className="rating">
                <FaStar />
                <span>{dorm.rating}</span>
                <small>({dorm.reviews} reviews)</small>
              </div>
              

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Rankings;