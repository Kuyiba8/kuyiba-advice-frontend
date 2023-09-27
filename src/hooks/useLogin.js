import { useState } from "react";
import { useAuthContext } from "../hooks/useAthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate(); // Get the navigate function

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://kuyiba-advice-api.onrender.com/api/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      } else {
        // save the user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        // update the auth context
        dispatch({ type: "LOGIN", payload: json });

        // Redirect to the login page using navigate
        navigate("/");

        setIsLoading(false);
      }
    } catch (error) {
      // Handle any unexpected errors here
      console.error("Signup error:", error);
      setIsLoading(false);
      setError("An error occurred during signup.");
    }
  };

  return { login, isLoading, error };
};
