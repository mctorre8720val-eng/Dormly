import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import "./Register.css";





function Register() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        role: "student",
        createdAt: new Date()
      });

      alert("Account created successfully!");

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


        <h2>Create Account</h2>

        <p>Join Dormly today.</p>


        <form onSubmit={handleRegister}>


          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />


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


          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}            
          />


          <button type="submit">
            Register
          </button>


        </form>


        <div className="auth-footer">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </div>


      </div>

    </div>

  );

}


export default Register;