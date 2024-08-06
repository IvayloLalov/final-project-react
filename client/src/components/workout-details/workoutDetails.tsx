import { useContext, useEffect, useState } from "react";
import { WorkoutType } from "../../types/WorkoutType";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as workoutService from "../../services/workoutService";
import AuthContext from "../../contexts/authContext";

export default function WorkoutDetails() {
  const navigate = useNavigate();
  const [workout, setWorkout] = useState<WorkoutType>();
  const { workoutId } = useParams();
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    workoutService.getOne(workoutId).then((result) => setWorkout(result));
  }, [workoutId]);
  console.log(userId, "useerID");
  console.log(workout?._ownerId, "ownerID");

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete practice for ${workout?.type} with ${workout?.duration} minutes duration?`
    );

    if (hasConfirmed) {
      await workoutService.remove(workoutId);

      navigate("/workouts");
    }
  };

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
        {userId === workout?._ownerId && (
          <div className="buttons">
            <button className="edit-btn">
              <Link
                className="details-description"
                to={`/workouts/${workoutId}/edit`}
              >
                Edit
              </Link>
            </button>
            <button className="delete-btn" onClick={deleteButtonClickHandler}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
