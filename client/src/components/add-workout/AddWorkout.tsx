import { useNavigate } from "react-router-dom";

import * as workoutService from "../../services/workoutService";
import { CreateWorkoutType } from "../../types/CreateWorkoutType";
import useForm from "../../hooks/useForm";

export default function AddWorkout() {
  const navigate = useNavigate();

  const { values, onChange, onSubmit } = useForm(
    async (values: CreateWorkoutType) => {
      try {
        await workoutService.create(values);

        navigate("/");
      } catch (err) {
        // Error notification
        console.log(err);
      }
    },
    {
      type: "",
      duration: "",
      imageUrl: "",
      difficulty: "",
      description: "",
    }
  );

  return (
    <div className="add-workout">
      <h1>Add Workout</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="type"
          placeholder="Type"
          onChange={onChange}
          value={values.type}
          required
        />
        <input
          type="text"
          name="difficulty"
          placeholder="Difficulty"
          onChange={onChange}
          value={values.difficulty}
          required
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration"
          onChange={onChange}
          value={values.duration}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          onChange={onChange}
          value={values.imageUrl}
          required
        />

        <textarea
          name="description"
          id="description"
          placeholder="Description"
          onChange={onChange}
          value={values.description}
          cols={30}
          rows={10}
          required
        ></textarea>

        <button type="submit" className="btn btn-primary btn-block btn-large">
          Create
        </button>
      </form>
    </div>
  );
}
