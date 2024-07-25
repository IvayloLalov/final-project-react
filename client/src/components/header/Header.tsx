export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <a href=""></a>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/restaurants">Restaurants</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <div className="div-header">
            <li>
              <a href="/add-restaurant">Add Restaurant</a>
            </li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </div>
          <div className="div-header">
            <li>
              <a href="/auth/login">Login</a>
            </li>
            <li>
              <a href="/auth/register">Register</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
