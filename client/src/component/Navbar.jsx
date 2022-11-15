import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar  navbar-light bg-success p-1">
        <Link className="navbar-brand  text-white " to="/dashboard">
          Fluent-ish
        </Link>

        {location.pathname === "/dashboard" ? (
          <Link to="/account">
            <Button className="btn-dark">Account</Button>
          </Link>
        ) : null}
        {location.pathname === "/account" ? (
          <Link to="/dashboard">
            <Button className="btn btn-dark">Dashboard</Button>
          </Link>
        ) : null}
        {location.pathname === "/login" || "/signup" ? null : (
          <Link to="/login">
            <Button className="btn btn-dark">Login</Button>
          </Link>
        )}

        {location.pathname === "/signup" || "/login" ? null : (
          <Link to="/signup">
            <Button className="btn btn-dark">Signup</Button>
          </Link>
        )}

        <ul></ul>
      </nav>
    </div>
  );
};

export default Navbar;
