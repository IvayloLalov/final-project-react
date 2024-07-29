import { WorkoutType } from "../../../types/WorkoutType";

export default function WorkListItem({
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
          <p className="card-meal-type">{type}</p>
          <h2 className="card-title">{duration}</h2>
          <p className="card-body">{difficulty}</p>
        </div>
        <div className="card-price">{duration}</div>
      </div>
    </>
  );
}
