import { useEffect, useState } from "react";
import { WorkoutType } from "../../types/WorkoutType";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as workoutService from "../../services/workoutService";

export default function WorkoutDetails() {
  //   const navigate = useNavigate();
  const [workout, setWorkout] = useState<WorkoutType>();
  const { workoutId } = useParams();

  useEffect(() => {
    workoutService.getOne(workoutId).then((result) => setWorkout(result));
  }, [workoutId]);
  console.log(workoutId);

  return (
    <div className="wrapper-workout-details">
      <div className="card-details">
        <div className="card-image">
          <img src={workout?.imageUrl} />
        </div>
        <div className="card-text-details">
          <p className="card-body-details">{workout?.description}</p>
        </div>
        <button className="card-price-details">
          Like
          {/* <Link className="details-description" to={`/workouts/${_id}`} >
            Description
          </Link> */}
        </button>
        <div className="buttons">
          <button className="edit-btn">
            <Link
              className="details-description"
              to={`/workouts/${workoutId}/edit`}
            >
              Edit
            </Link>
          </button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
}
