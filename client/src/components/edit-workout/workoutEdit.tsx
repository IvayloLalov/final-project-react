import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as workoutService from "../../services/workoutService";
import { CreateWorkoutType } from "../../types/CreateWorkoutType";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
      .catch((error) => {
        const err = Object.entries(error);
        alert(`${err} occurred while fetching data.`);
      });
  }, [workoutId]);

  const editWorkoutSubmitHandler = async (values: CreateWorkoutType) => {
    try {
      await workoutService.edit(workoutId, values);
      navigate("/workouts");
    } catch (error: any) {
      const err = Object.entries(error);
      alert(err);
    }
  };

  const initialValues: CreateWorkoutType = {
    type: workout.type,
    duration: workout.duration,
    imageUrl: workout.imageUrl,
    description: workout.description,
    difficulty: workout.difficulty,
  };

  const validationSchema = Yup.object().shape({
    type: Yup.string()
      .required("Type is required")
      .min(2, "Type must be at least 2 characters long"),
    difficulty: Yup.string()
      .required("Difficulty is required")
      .min(2, "Difficulty must be at least 2 characters long"),
    duration: Yup.number().required("Duration is required").positive(),
    imageUrl: Yup.string()
      .url("Must be a valid URL")
      .required("Image URL is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={editWorkoutSubmitHandler}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="add-workout">
            <h1>Edit Workout</h1>
            <Field type="text" name="type" placeholder="Type" />
            <ErrorMessage
              name="type"
              component="div"
              className="error-validation"
            />
            <Field type="text" name="difficulty" placeholder="Difficulty" />
            <ErrorMessage
              name="difficulty"
              component="div"
              className="error-validation"
            />
            <Field type="number" name="duration" placeholder="Duration" />
            <ErrorMessage
              name="duration"
              component="div"
              className="error-validation"
            />
            <Field type="text" name="imageUrl" placeholder="Image URL" />
            <ErrorMessage
              name="imageUrl"
              component="div"
              className="error-validation"
            />
            <Field
              as="textarea"
              name="description"
              id="description"
              placeholder="Description"
              cols={30}
              rows={7}
            />
            <ErrorMessage
              name="description"
              component="div"
              className="error-validation"
            />
            <button
              type="submit"
              className="btn btn-primary btn-block btn-large"
              disabled={isSubmitting}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-primary btn-block btn-large"
              onClick={() => navigate(`/workouts/${workoutId}`)}
            >
              Close
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
