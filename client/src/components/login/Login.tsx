export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post">
        <input type="text" name="u" placeholder="Username" required />
        <input type="password" name="p" placeholder="Password" required />
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Let me in.
        </button>
      </form>
    </div>
  );
}
