import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

// import * as Yup from "yup";

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    email: "",
    password: "",
  });

  interface FormValues {
    email: string;
    password: string;
  }

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (values.password.length < 5) {
      errors.password = "Password must be minimum 5 characters";
    }

    return errors;
  };

  const errors = validate(values);

  return (
    <div className="login-register">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email"></label>
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
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Let me in.
        </button>
      </form>
    </div>
  );
}
