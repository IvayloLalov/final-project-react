import { User } from "../types/User";

import * as request from "../lib/request";

const baseUrl: string = "http://localhost:3030/users";

export const login = async (email: string, password: string): Promise<User> => {
  const result = await request.post(`${baseUrl}/login`, {
    email,
    password,
  });

  return result;
};

export const register = async (
  email: string,
  username: string,
  password: string
): Promise<User> => {
  const result = await request.post(`${baseUrl}/register`, {
    email,
    username,
    password,
  });
  return result;
};

export const logout = () => request.get(`${baseUrl}/logout`);
