import Hero from "../components/Hero";
import FeaturedDorms from "../components/FeaturedDorms";
import About from "../components/About";
import Welcome from "../components/Welcome";

function Home() {
    return (
        <>
            <Hero />
            <FeaturedDorms
            title="Featured Dorms"
            subtitle="Top picks near you" />
            <About />
        </>
    );
}

export default Home;