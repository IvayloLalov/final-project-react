import { Link } from "react-router-dom";
import { WorkoutType } from "../../../types/WorkoutType";

export default function WorkListItem({
  _id,
  type,
  imageUrl,
  duration,
  difficulty,
}: WorkoutType) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={imageUrl} />
        </div>
        <div className="card-text">
          <p className="card-meal-type">{type.toUpperCase()}</p>
          <h2 className="card-title">{duration} minutes</h2>
          <p className="card-body">{difficulty.toLowerCase()}</p>
        </div>
        <button className="card-price">
          <Link className="details-description" to={`/workouts/${_id}`}>
            Description
          </Link>
        </button>
      </div>
    </>
  );
}
