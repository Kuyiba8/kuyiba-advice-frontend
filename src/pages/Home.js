import Advice from "../pages/Advice.js";

const Home = () => {
  return (
    <div>
      <Advice />
    </div>
  );
};

export default Home;

// import { useEffect } from "react";
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
// import { useAuthContext } from "../hooks/useAthContext";

// // components
// import WorkoutDetails from "../components/WorkoutDetails";
// import WorkoutForm from "../components/WorkoutForm";

// const Home = () => {
//   const { workouts, dispatch } = useWorkoutsContext();
//   const { user } = useAuthContext();

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       const response = await fetch("/api/workouts", {
//         headers: { Authorization: `Bearer ${user.token}` },
//       });
//       const json = await response.json();

//       if (response.ok) {
//         dispatch({ type: "SET_WORKOUTS", payload: json });
//       }
//     };

//     if (user) {
//       fetchWorkouts();
//     }
//   }, [dispatch, user]);

//   return (
//     <div className="">
//       <div className="workouts">
//         {workouts &&
//           workouts.map((workout) => (
//             <WorkoutDetails key={workout._id} workout={workout} />
//           ))}
//       </div>
//       <WorkoutForm />
//     </div>
//   );
// };

// export default Home;