import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About Dormly</h2>

        <p>
          Dormly is a student-focused dorm discovery platform that helps you
          find safe, affordable, and comfortable dorms near universities in
          the Philippines.
        </p>

        <p>
          Whether you're studying in UP Diliman, Ateneo, La Salle, or within
          the University Belt, Dormly makes it easier to compare dorms based on
          price, location, and ratings.
        </p>

        <div className="about-note">
          <p>
            ⚠️ This project is a student-developed application created for
            academic purposes and portfolio demonstration only.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h3>100+</h3>
            <p>Listed Dorms</p>
          </div>

          <div className="stat">
            <h3>4.5★</h3>
            <p>Average Rating</p>
          </div>

          <div className="stat">
            <h3>24/7</h3>
            <p>Access Anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;