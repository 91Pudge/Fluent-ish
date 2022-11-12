import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard(Protected)</Link>
        </li>
        <li>
          <Link to="/Account">Account(Protected)</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
