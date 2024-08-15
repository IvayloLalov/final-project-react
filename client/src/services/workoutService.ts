import { CreateWorkoutType } from "../types/CreateWorkoutType";
import { WorkoutType } from "../types/WorkoutType";

import * as request from "../lib/request";

const baseUrl: string = "http://localhost:3030/data/workouts/";

export const create = async (
  workoutData: CreateWorkoutType
): Promise<WorkoutType> => {
  const result = await request.post(baseUrl, workoutData);

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

export const getAllBySearch = async (
  search: string
): Promise<WorkoutType[]> => {
  const response = await fetch(`${baseUrl}?where=type%3D%22${search}%22`);
  const result = response.json();

  return result;
};

export const edit = async (
  workoutId: string | undefined,
  workoutData: any
): Promise<WorkoutType> => {
  const result = await request.put(`${baseUrl}${workoutId}`, workoutData);

  return result;
};

export const remove = async (workoutId: string | undefined) => {
  request.remove(`${baseUrl}/${workoutId}`);
};
