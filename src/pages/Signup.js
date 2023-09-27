import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import "../pages/Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name, email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="signup-form">
        <label htmlFor="name">Fullname:</label>
        <input
          className="signup-input"
          type="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="name"
          autoComplete="on"
        />
      </div>
      <div className="signup-form">
        <label htmlFor="email">Email address:</label>
        <input
          className="signup-input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          autoComplete="on"
        />
      </div>
      <div className="signup-form">
        <label htmlFor="password">Password:</label>
        <input
          className="signup-input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          autoComplete="on"
        />
      </div>
      <div className="btn-div">
        <button className="signup-btn" disabled={isLoading}>
          Sign up
        </button>
      </div>
      <span className="signup-subtext">
        Already have an account?{" "}
        <Link className="underline text-green-700" to="/login">
          Login
        </Link>
      </span>
      {error && <div className="error text-red-500">{error}</div>}
    </form>
  );
};

export default Signup;
