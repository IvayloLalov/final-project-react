import { useEffect, useState } from "react";

import * as workoutService from "../../services/workoutService";
import { WorkoutType } from "../../types/WorkoutType";
import WorkListItem from "./workoutListItem/WorkoutListItem";

export default function WorkoutList() {
  const [workouts, setWorkouts] = useState<WorkoutType[]>([]);

  useEffect(() => {
    workoutService
      .getAll()
      .then((result) => setWorkouts(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(workouts);

  return (
    <div id="worklist-page">
      {workouts.map((workout) => (
        <WorkListItem key={workout._id} {...workout} />
      ))}

      {workouts.length === 0 && (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </div>
  );
}
