import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        alert("Login successful!");
      } catch (error) {
        alert(error.message);
      }
    };
  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>
          Dorm<span>ly</span>
        </h1>

        <h2>Welcome Back</h2>
        <p>Login to find your perfect dorm.</p>


        <form onSubmit={handleLogin}>

          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />


          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <button type="submit">
            Login
          </button>

        </form>


        <div className="auth-footer">
          Don't have an account?
          <Link to="/register">
            Register
          </Link>
        </div>


      </div>

    </div>
  );
}

export default Login;