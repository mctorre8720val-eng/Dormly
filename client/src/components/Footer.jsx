import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Dorm<span>ly</span></h2>
          <p>
            Find your perfect dorm near your campus.
            Compare rooms, prices, and reviews easily.
          </p>
        </div>


        <div className="footer-links">
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="/dorms">Dorms</a>
          <a href="/about">About</a>
        </div>


        <div className="footer-links">
          <h3>Support</h3>
          <a href="#">Help Center</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </div>


        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📍 Philippines</p>

          <a href="https://michaelportfolio-iota.vercel.app/"> 
            ✉ dormly@email.com
          </a>

        </div>

      </div>


      <div className="footer-bottom">
        <p>© 2026 Dormly. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;