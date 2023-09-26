import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import "../pages/Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="signup-form">
        <label>Email address:</label>
        <input
          className="signup-input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="signup-form">
        <label>Password:</label>
        <input
          className="signup-input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="btn-div">
        <button className="signup-btn" disabled={isLoading}>
          Sign up
        </button>
      </div>
      <span className="signup-subtext">
        Already have an account? <Link to="/login">Login</Link>
      </span>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
