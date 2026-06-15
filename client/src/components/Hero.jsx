import "./hero.css";

function Hero() {
  return (
    <>
      <div className="toptitle">Join Dormly</div>
      <p className="subtitle">
        Find the best dorms near you and share your reviews
      </p>

      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 style={{ color: "white" }}>Find the best dorm near you</h1>
            <button className="cta-btn">Get started</button>
          </div>

          <div className="hero-map">
            <img src="/map.png" alt="map" />
            <p>See available dorms in your area instantly</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;