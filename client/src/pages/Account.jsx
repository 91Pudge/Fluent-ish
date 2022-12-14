import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Account = () => {
  const { logOut, user } = useUserAuth();
  console.log(user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="p-4 m-auto w-50">
      <div className="p-4 text-center">
        This your account <br />
        {user && user.displayName}
      </div>
      <div className="d-grid gap-2 p-2">
        <Button className="btn-dark" variant="primary" onClick={handleLogout}>
          Log
        </Button>
      </div>
    </div>
  );
};

export default Account;
