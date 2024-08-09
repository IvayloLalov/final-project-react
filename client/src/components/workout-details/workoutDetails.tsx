import { useContext, useEffect, useState } from "react";
import { WorkoutType } from "../../types/WorkoutType";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as workoutService from "../../services/workoutService";
import * as likeService from "../../services/likesService";

import AuthContext from "../../contexts/authContext";
import { LikeType } from "../../types/LikeType";

export default function WorkoutDetails() {
  const navigate = useNavigate();
  const [workout, setWorkout] = useState<WorkoutType>();
  const [likes, setLikes] = useState<LikeType[]>([]);
  const { workoutId } = useParams();
  const { userId } = useContext(AuthContext);
  const [isAlreadyLiked, setIsAlreadyLiked] = useState<boolean>();

  useEffect(() => {
    workoutService.getOne(workoutId).then((result) => setWorkout(result));

    likeService.getAll(workoutId).then((data) => {
      setLikes(data);
      console.log(data, "data");

      console.log(data.some((like) => like._ownerId === userId));

      setIsAlreadyLiked(data.some((like) => like._ownerId === userId));
    });
  }, [workoutId]);

  // console.log(userId, "useerID");
  // console.log(workout?._ownerId, "ownerID");
  // console.log(likes, "likes");
  // setIsAlreadyLiked(likes.some((like) => like._ownerId === userId));

  console.log(isAlreadyLiked, "before click");

  const likeButtonClickHandler = async () => {
    const result = await likeService.create(workoutId);

    // console.log(result, "like result");
    setIsAlreadyLiked(true);
    likes.length++;
    // console.log(isAlreadyLiked, "after click");
    navigate(`/workouts/${workoutId}`);
    return result;
  };

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
        {!isAlreadyLiked && !(userId === workout?._ownerId) && (
          <button
            className="card-price-details"
            onClick={likeButtonClickHandler}
          >
            Like
          </button>
        )}
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
        <p className="likes">Likes: {likes.length}</p>
      </div>
    </div>
  );
}
