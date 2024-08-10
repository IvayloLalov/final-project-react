import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as workoutService from "../../services/workoutService";
import { CreateWorkoutType } from "../../types/CreateWorkoutType";

export default function WorkoutEdit() {
  const navigate = useNavigate();
  const { workoutId } = useParams();
  const [workout, setWorkout] = useState<CreateWorkoutType>({
    type: "",
    difficulty: "",
    duration: "",
    imageUrl: "",
    description: "",
  });

  useEffect(() => {
    workoutService
      .getOne(workoutId)
      .then((result) => setWorkout(result))
      .catch((err) => {
        alert(`${err} occurred while fetching data.`);
      });
  }, [workoutId]);

  const editGameSubmitHandler = async (e: any) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await workoutService.edit(workoutId, values);

      navigate("/workouts");
    } catch (err) {
      // Error notification
      console.log(`Error: ${err}`);

      throw err;
    }
  };

  const onChange = (e: any) => {
    setWorkout((state: CreateWorkoutType) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="add-workout">
      <h1>Edit Workout</h1>
      <form onSubmit={editGameSubmitHandler}>
        <input
          type="text"
          name="type"
          placeholder="Type"
          onChange={onChange}
          value={workout.type}
          required
        />
        <input
          type="text"
          name="difficulty"
          placeholder="Difficulty"
          onChange={onChange}
          value={workout.difficulty}
          required
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration"
          onChange={onChange}
          value={workout.duration}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          onChange={onChange}
          value={workout.imageUrl}
          required
        />

        <textarea
          name="description"
          id="description"
          placeholder="Description"
          onChange={onChange}
          value={workout.description}
          cols={30}
          rows={7}
          required
        ></textarea>

        <button type="submit" className="btn btn-primary btn-block btn-large">
          Edit
        </button>
      </form>
    </div>
  );
}
