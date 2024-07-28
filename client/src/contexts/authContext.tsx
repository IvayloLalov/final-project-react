import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from "../services/userService";
import usePersistedState from "../hooks/usePersistedState";
import { AuthType } from "../types/AuthType";

const AuthContext = createContext({});

type ContextProviderProps = {
  children?: ReactNode;
};

export const AuthProvider = ({ children }: ContextProviderProps) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const loginSubmitHandler = async (values: any) => {
    const result = await userService.login(values.email, values.password);
    setAuth(result);

    localStorage.setItem("accessToken", result?.accessToken);

    navigate("/");
  };

  const registerSubmitHandler = () => {};

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const values: AuthType = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
