import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";

import * as workoutService from "../../services/workoutService";
import { WorkoutType } from "../../types/WorkoutType";
import AuthContext from "../../contexts/authContext";

export default function EditGuard() {
  const { workoutId } = useParams();
  const [workout, setWorkout] = useState<WorkoutType>();
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    workoutService.getOne(workoutId).then((result) => setWorkout(result));
  }, [workoutId]);

  if (workout?._ownerId !== userId) {
    return <Navigate to={"/workouts"} />;
  }
  return <Outlet />;
}
