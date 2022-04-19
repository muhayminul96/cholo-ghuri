import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firbase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loding from "../../Shared/Loding";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";

  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);
  const [signInWithEmailAndPassword, user3, loading3, error3] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSignINSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      alert("email problem");
    }
  };
  if (loading) {
    return <Loding></Loding>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <Form className="w-50 mx-auto my-5" onSubmit={handleSignINSubmit}>
        <h1 className="fw-bold">Login Please</h1>
        <Form.Group className="my-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
        <p> {error3? error3.massage: '' } </p>
      </Form>
      <Button
        onClick={() => signInWithGoogle()}
        className="w-25 mx-auto mb-3"
        variant="primary"
        type="submit"
      >
        Google Sign in
      </Button>
      <p>
        You have no account in Cholo Ghuri?, no tension{" "}
        <Link className="btn btn-link text-decoration-none" to="/signup">
          {" "}
          Signup
        </Link>{" "}
      </p>
      <p>
        forget password
        <button
          className="btn ms-2 btn-link text-decoration-none"
          onClick={resetPassword}
        >
          Reset password
        </button>
      </p>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
