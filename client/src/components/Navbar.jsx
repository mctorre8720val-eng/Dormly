import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <nav className="navbar">

      <div className="nav-container">

        <div className="logo">
          Dormly<span style={{ color: "#2563eb" }}>PH</span>
        </div>


        <ul className={open ? "nav-links active" : "nav-links"}>

          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/dorms">Dorms</a>
          </li>

          <li>
            <a href="/rankings">Rankings</a>
          </li>

          <li>
            <a href="/about">About</a>
          </li>

        </ul>


        <div className="auth-buttons">

          {user ? (
            <>
              <span>
                Welcome
              </span>

              <button onClick={handleLogout}>
                Logout
              </button>
            </>

          ) : (

            <>
              <a 
                className="login" 
                href="/login"
              >
                Log in
              </a>

              <a 
                className="signup" 
                href="/register"
              >
                Join Dormly
              </a>
            </>

          )}

        </div>


        <div 
          className="menu-icon" 
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>


      </div>

    </nav>
  );
}

export default Navbar;