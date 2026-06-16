import FeaturedDorms from "../components/FeaturedDorms";
import Welcome from "../components/Welcome";
import { FaSearch } from "react-icons/fa";

function Dorms() {
    return (
        <div>

            {/* WELCOME (directly under navbar) */}
            <div style={{paddingTop: "2rem", textAlign: "center" }}>
            <Welcome
                welcomeTitle={<>Browse <span style={{ color: "#2563eb" }}>Dormly</span></>}
                welcomeSubtitle="Find the perfect dorm for your needs and budget"
            />
            </div>

            {/* SEARCH BAR (below welcome) */}
            <div style={{
                paddingLeft: "12rem",
                marginTop: "2rem"
            }}>
                <div style={{ position: "relative", width: "fit-content"}}>

                    <FaSearch style={{
                        position: "absolute",
                        top: "50%",
                        left: "12px",
                        transform: "translateY(-50%)",
                        color: "#888"
                    }} />

                    <input
                        type="text"
                        placeholder="Search dorms (e.g. Katipunan, UP, budget...)"
                        style={{
                            width: "450px",
                            padding: "12px 15px 12px 38px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            outline: "none",
                            fontSize: "16px",
                        }}
                    />
                </div>
            </div>

            {/* FEATURED DORMS */}
            <FeaturedDorms
                title="All Dorms"
                subtitle="Browse our complete list of dormitories"
            />

        </div>
    );
}

export default Dorms;