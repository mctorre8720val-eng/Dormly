import Welcome from "../components/Welcome";
import Subheader from "../components/Subheader";
import DormList from "../components/DormList";
import Footer from "../components/Footer";
import FeaturedDorms from "../components/FeaturedDorms";
import { FaSearch } from "react-icons/fa";
import "./Dorms.css";

function Dorms() {
    return (
        <div className="dorms-page">

            {/* WELCOME */}
            <div className="dorms-header">
                <Welcome
                    welcomeTitle={
                        <>
                            Browse <span style={{ color: "#2563eb" }}>Dormly</span>
                        </>
                    }
                    welcomeSubtitle="Find the perfect dorm for your needs and budget"
                />
            </div>


            {/* SEARCH BAR */}
            <div className="search-wrapper">

                <FaSearch className="search-icon" />

                <input
                    type="text"
                    placeholder="Search dorms (e.g. Katipunan, UP, budget...)"
                />

            </div>

            <div className="featured">
                <Subheader
                Header = "Featured Dorms"
                Subheader = "Top picks near you"
                >
                
                </Subheader>
            <FeaturedDorms />
            </div>


            <div className="featured">
                <Subheader
                Header = "Dorm List"
                Subheader = "Check for more information"
                >
                
                </Subheader>
            <DormList />
            </div>
            <Footer />
        </div>
    );
}

export default Dorms;