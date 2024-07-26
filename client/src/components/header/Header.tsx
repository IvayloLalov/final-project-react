import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/workouts">Workouts</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <div className="div-header">
            <li>
              <Link to="/add-workout">Add Workout</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </div>
          <div className="div-header">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
