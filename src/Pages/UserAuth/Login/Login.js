import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
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

    console.log(email, password);
  };
  return (
    <div>
      <h1>login</h1>
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
      </Form>
      <p>
        You have no account in Cholo Ghuri?, no tension{" "}
        <Link className="btn btn-link text-decoration-none" to="/signup">
          {" "}
          Signup
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
