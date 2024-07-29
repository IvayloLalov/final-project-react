import { CreateWorkoutType } from "../types/CreateWorkoutType";
import { WorkoutType } from "../types/WorkoutType";

const baseUrl: string = "http://localhost:3030/data/workouts";
const token: string | null = localStorage.getItem("accessToken");
let options: any = {
  "Content-Type": "application/json",
  "X-Authorization": null,
};
if (token) {
  options["X-Authorization"] = token;
}

export const create = async (
  workoutData: CreateWorkoutType
): Promise<WorkoutType> => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: options,
    body: JSON.stringify(workoutData),
  });

  const result = response.json();

  return result;
};
