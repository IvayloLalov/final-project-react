import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from "../services/userService";
import usePersistedState from "../hooks/usePersistedState";
import { AuthType } from "../types/AuthType";

const AuthContext = createContext<AuthType>({
  loginSubmitHandler: Function,
  registerSubmitHandler: Function,
  logoutHandler: Function,
  username: "",
  email: "",
  userId: "",
  accessToken: "",
  isAuthenticated: false,
});

type ContextProviderProps = {
  children?: ReactNode;
};

export const AuthProvider = ({ children }: ContextProviderProps) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const loginSubmitHandler = async (values: any) => {
    const result = await userService.login(values.email, values.password);
    setAuth(result);
    console.log("result", result);

    localStorage.setItem("accessToken", result?.accessToken);

    navigate("/");
  };

  const registerSubmitHandler = async (values: any) => {
    const result = await userService.register(
      values.email,
      values.username,
      values.password
    );

    setAuth(result);
    console.log("username", values.username);
    console.log("result", result);

    localStorage.setItem("accessToken", result?.accessToken);

    navigate("/");
  };
  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    setAuth({});
  };

  const values: AuthType = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    userId: auth._id,
    accessToken: auth.accessToken,
    isAuthenticated: !!auth.accessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
