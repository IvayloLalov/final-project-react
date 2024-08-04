import { useEffect, useState } from "react";
import { WorkoutType } from "../../types/WorkoutType";
import { useNavigate, useParams } from "react-router-dom";

import * as workoutService from "../../services/workoutService";

export default function WorkoutDetails() {
  const navigate = useNavigate();
  const [workout, setWorkout] = useState<WorkoutType>();
  const { workoutId } = useParams();

  useEffect(() => {
    workoutService.getOne(workoutId).then((result) => setWorkout(result));
  }, [workoutId]);

  return (
    <div className="wrapper-workout-details">
      <div className="card">
        <div className="card-image">
          <img src={workout?.imageUrl} />
        </div>
        <div className="card-text">
          <p className="card-meal-type">{workout?.type.toUpperCase()}</p>
          <h2 className="card-title">{workout?.duration} minutes</h2>
          <p className="card-body">{workout?.difficulty.toLowerCase()}</p>
        </div>
        <div className="card-price">
          {/* <Link className="details-description" to={`/workouts/${_id}`} >
            Description
          </Link> */}
        </div>
      </div>
    </div>
  );
}
