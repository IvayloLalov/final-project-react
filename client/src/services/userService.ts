import { User } from "../types/User";

const baseUrl: string = "http://localhost:3030/users";

export const login = async (email: string, password: string): Promise<User> => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = response.json();

  return result;
};

export const register = async (
  email: string,
  username: string,
  password: string
): Promise<User> => {
  const response = fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username, password }),
  });

  const result = (await response).json();
  console.log("result from service", result);

  return result;
};

export const logout = () => fetch(`${baseUrl}/logout`);
