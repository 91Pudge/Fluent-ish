import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";

const Landing = () => {
  return (
    <div className="p-2 text-center">
      <h1>Welcome to Fluent-ish </h1>
      <h2>The place to store and learn interesting words</h2>
      <p>Sign in</p>
      <div>
        <Link to="login">
          <Button className="btn-dark">Sign in</Button>
        </Link>
      </div>
      <p>Register for a new account</p>
      <div>
        <Link to="signup">
          <Button className="btn-dark">Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
