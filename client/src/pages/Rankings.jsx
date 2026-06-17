import { FaStar } from "react-icons/fa";
import "./RankingsPage.css";
import Footer from "../components/Footer";

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
  {
    rank: 4,
    name: "Blue Haven Dorm",
    location: "Diliman",
    rating: 4.6,
    reviews: 70,
  },
];


function Rankings() {
  return (
    <>
    <div className="rankings-page">

      <h1>Dorm Rankings</h1>
      <p className="subtitle">
        Top dormitories based on student reviews
      </p>


      <div className="full-ranking-list">

        {rankings.map((dorm) => (
          <div className="full-ranking-card" key={dorm.rank}>

            <div className="rank">
              #{dorm.rank}
            </div>


            <div>
              <h2>{dorm.name}</h2>
              <p>{dorm.location}</p>

              <div className="rating">
                <FaStar />
                <span>{dorm.rating}</span>
                <small>
                  ({dorm.reviews} reviews)
                </small>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Rankings;