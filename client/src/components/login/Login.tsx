export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post">
        <input type="text" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Let me in.
        </button>
      </form>
    </div>
  );
}
