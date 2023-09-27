import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import "../pages/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <div className="login-form">
        <label>Email address:</label>
        <input
          className="login-input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="login-form">
        <label>Password:</label>
        <input
          className="login-input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className="login-btn-div">
        <button className="login-btn" disabled={isLoading}>
          Log in
        </button>
      </div>
      <span className="login-subtext">
        Don't have an account?{" "}
        <Link className="underline text-green-700" to="/signup">
          Signup
        </Link>
      </span>
      {error && <div className="error text-red-600">{error}</div>}
    </form>
  );
};

export default Login;
