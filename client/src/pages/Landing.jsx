import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Welcome to Fluent-ish </h1>
      <h2>Sign in or register for a new account </h2>
      <Link to="login">
        <Button>Sign in</Button>
      </Link>
      <Link to="signup">
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default Landing;
