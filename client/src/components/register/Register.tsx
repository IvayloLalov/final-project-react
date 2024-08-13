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
    flag: false,
  });

  interface FormValues {
    email: string;
    username: string;
    password: string;
    rePassword: string;
    flag: boolean;
  }

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
      errors.flag = true;
    }

    if (values.username.length < 3) {
      errors.username = "Username must be minimum 5 characters";
      errors.flag = true;
    }

    if (values.password.length < 5) {
      errors.password = "Password must be minimum 5 characters";
      errors.flag = true;
    }

    if (values.password !== values.rePassword) {
      errors.rePassword = "Password doesn`t match";
      errors.flag = true;
    }

    return errors;
  };

  const errors = validate(values);

  return (
    <div className="login-register">
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="example@abv.bg"
          onChange={onChange}
          value={values.email}
          required
        />
        {values.email.length > 0 && errors.email && (
          <div className="error">{errors.email}</div>
        )}
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={onChange}
          value={values.username}
          required
        />
        {values.username.length > 0 && errors.username && (
          <div className="error">{errors.username}</div>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={values.password}
          required
        />
        {values.password.length > 0 && errors.password && (
          <div className="error">{errors.password}</div>
        )}
        <input
          type="password"
          name="rePassword"
          placeholder="Repeat Password"
          onChange={onChange}
          value={values.rePassword}
          required
        />{" "}
        {values.rePassword.length > 0 && errors.rePassword && (
          <div className="error">{errors.rePassword}</div>
        )}
        <button
          type="submit"
          className="btn btn-primary btn-block btn-large"
          disabled={errors.flag}
        >
          Register
        </button>
      </form>
    </div>
  );
}
