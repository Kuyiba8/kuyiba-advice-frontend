import { useState } from "react";
import { useAuthContext } from "../hooks/useAthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate(); // Get the navigate function

  const signup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://kuyiba-advice-api.onrender.com/api/user/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
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
        navigate("/login");

        setIsLoading(false);
      }
    } catch (error) {
      // Handle any unexpected errors here
      console.error("Signup error:", error);
      setIsLoading(false);
      setError("An error occurred during signup.");
    }
  };

  return { signup, isLoading, error };
};

// import { useState } from "react";
// import { useAuthContext } from "../hooks/useAthContext";

// export const useSignup = () => {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(null);
//   const { dispatch } = useAuthContext();

//   const signup = async (email, password) => {
//     setIsLoading(true);
//     setError(null);

//     const response = await fetch("/api/user/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });
//     const json = await response.json();

//     if (!response.ok) {
//       setIsLoading(false);
//       setError(json.error);
//     }
//     if (response.ok) {
//       // save the user to local storage
//       localStorage.setItem("user", JSON.stringify(json));

//       // update the auth context
//       dispatch({ type: "LOGIN", payload: json });

//       // update loading state
//       setIsLoading(false);
//     }
//   };

//   return { signup, isLoading, error };
// };
