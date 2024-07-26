export default function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
      <form method="post">
        <input type="text" name="email" placeholder="Email" required />
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="paswword"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="rePassword"
          placeholder="Repeat Password"
          required
        />
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Register
        </button>
      </form>
    </div>
  );
}
