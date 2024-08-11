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

        navigate("/workouts");
      } catch (err) {
        // Error notification
        console.log(`Error: ${err}`);

        throw err;
      }
    },
    {
      type: "",
      duration: 0,
      imageUrl: "",
      difficulty: "",
      description: "",
    }
  );

  interface FormValues {
    type: string;
    duration: number;
    imageUrl: string;
    difficulty: string;
    description: string;
  }

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (values.type.length < 4) {
      errors.type = "Type must be minimum 5 characters";
    }

    if (values.difficulty.length < 3) {
      errors.difficulty = "Difficulty must be minimum 3 characters";
    }

    if (!/https?:\/\/.*.(png|jpeg|jpg)/is.test(values.imageUrl)) {
      errors.imageUrl = "Invalid image URL address";
    }

    if (values.description.length < 20) {
      errors.description = "Description must be minimum 20 characters";
    }

    return errors;
  };

  const errors = validate(values);

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
        {values.type.length > 0 && errors.type && (
          <div className="error-workout">{errors.type}</div>
        )}
        <input
          type="text"
          name="difficulty"
          placeholder="Difficulty"
          onChange={onChange}
          value={values.difficulty}
          required
        />
        {values.difficulty.length > 0 && errors.difficulty && (
          <div className="error-workout">{errors.difficulty}</div>
        )}
        <input
          type="number"
          name="duration"
          placeholder="Duration"
          onChange={onChange}
          value={values.duration}
          required
        />
        {values.duration < 0 && (
          <div className="error-workout">
            Duration should be positive number
          </div>
        )}
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          onChange={onChange}
          value={values.imageUrl}
          required
        />
        {values.imageUrl.length > 0 && errors.imageUrl && (
          <div className="error-workout">{errors.imageUrl}</div>
        )}

        <textarea
          name="description"
          id="description"
          placeholder="Description"
          onChange={onChange}
          value={values.description}
          cols={30}
          rows={7}
          required
        ></textarea>
        {values.description.length > 0 && errors.description && (
          <div className="error-workout">{errors.description}</div>
        )}

        <button type="submit" className="btn btn-primary btn-block btn-large">
          Create
        </button>
      </form>
    </div>
  );
}
