import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    email: "",
    password: "",
  });

  return (
    <div className="login-register">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="example@abv.bg"
          onChange={onChange}
          value={values.email}
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
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Let me in.
        </button>
      </form>
    </div>
  );
}
