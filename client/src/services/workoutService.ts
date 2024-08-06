import { CreateWorkoutType } from "../types/CreateWorkoutType";
import { WorkoutType } from "../types/WorkoutType";

const baseUrl: string = "http://localhost:3030/data/workouts/";
const token: string | null = localStorage.getItem("accessToken");
let options: any = {
  "Content-Type": "application/json",
};
if (token) {
  console.log(token, "token");

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

export const getAll = async (): Promise<WorkoutType[]> => {
  const response = await fetch(baseUrl);
  const result = response.json();

  return result;
};

export const getOne = async (
  workoutId: string | undefined
): Promise<WorkoutType> => {
  const response = await fetch(`${baseUrl}${workoutId}`);
  const result = response.json();

  return result;
};

export const edit = async (
  workoutId: string | undefined,
  workoutData: any
): Promise<WorkoutType> => {
  const response = await fetch(`${baseUrl}${workoutId}`, {
    method: "PUT",
    headers: options,
    body: JSON.stringify(workoutData),
  });

  const result = response.json();
  return result;
};

export const remove = async (workoutId: string | undefined) => {
  const result = await fetch(`${baseUrl}${workoutId}`, {
    method: "DELETE",
    headers: options,
  });

  return result;
};
