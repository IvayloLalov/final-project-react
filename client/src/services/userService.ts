import { useNavigate } from "react-router-dom";
import { User } from "../types/User";

const baseUrl: string = "http://localhost:3030/users";

export const login = async (
  email: string,
  password: string
): Promise<User | undefined> => {
  const navigate = useNavigate();

  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = response.json();

    return result;
  } catch (error) {
    if (error) {
      navigate("/");
    }
  }
};
