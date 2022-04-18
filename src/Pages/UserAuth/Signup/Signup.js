import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firbase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loding from "../../Shared/Loding";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    if(user){
        navigate('/home')
    }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  if(loading){
      return <Loding></Loding>
  }
  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password not match");
    } else {
      createUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <div>
      <Form className="w-50 mx-auto my-5" onSubmit={handleSignupSubmit}>
        <h1 className="fw-bold">Signup Please</h1>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
            required
          />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <p>
        You have account in cholo Ghuri? you can{" "}
        <Link className="btn btn-link text-decoration-none" to="/login">
          {" "}
          Login
        </Link>{" "}
      </p>
      
    </div>
  );
};

export default Signup;
