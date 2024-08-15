import { LikeType } from "../types/LikeType";

import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/likes";

export const getAll = async (
  workoutId: string | undefined
): Promise<LikeType[]> => {
  const query = new URLSearchParams({
    where: `workoutId="${workoutId}"`,
  });

  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};

export const create = async (workoutId: string | undefined) => {
  const newLike = await request.post(baseUrl, {
    workoutId,
  });

  return newLike;
};
