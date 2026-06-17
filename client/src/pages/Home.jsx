import Hero from "../components/Hero";
import FeaturedDorms from "../components/FeaturedDorms";
import About from "../components/About";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Rankings from "../components/Rankings"
function Home() {
    return (
        <>
            <Hero />
            <FeaturedDorms
            title="Featured Dorms"
            subtitle="Top picks near you" />
            <Rankings />
            <About />
            <Footer />
            
        </>
    );
}

export default Home;