import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    email: "",
    username: "",
    password: "",
    rePassword: "",
  });

  return (
    <div className="login-register">
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={values.email}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={onChange}
          value={values.username}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={values.password}
          required
        />
        <input
          type="password"
          name="rePassword"
          placeholder="Repeat Password"
          onChange={onChange}
          value={values.rePassword}
          required
        />
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Register
        </button>
      </form>
    </div>
  );
}
