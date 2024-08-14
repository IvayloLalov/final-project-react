import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";

import * as workoutService from "../../services/workoutService";

import AuthContext from "../../contexts/authContext";
import { WorkoutType } from "../../types/WorkoutType";

export default function EditGuard() {
  const { userId } = useContext(AuthContext);
  const { workoutId } = useParams();
  const [workout, setWorkout] = useState<WorkoutType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const result = await workoutService.getOne(workoutId);
        setWorkout(result);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch workout.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkout();
  }, [workoutId]);

  if (loading) {
    return <div>Loading...</div>; // or any loading spinner component
  }

  if (error) {
    return <div>{error}</div>; // display any error message
  }

  if (workout?._ownerId !== userId) {
    return <Navigate to={"/workouts"} />;
  }

  return <Outlet />;
}
