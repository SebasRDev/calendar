import React from "react";
import { Button, Link, TextField } from "@mui/material";

import { FormWrapper, Title } from "./style";
import { useForm } from "../../hooks";

const loginFormFields = {
  email: "",
  password: "",
};

export const LoginForm = ({setIsRegistered}) => {
  const [{ email, password }, handleInputChange] = useForm(loginFormFields);

  const loginSubmit = (e) => {
    e.preventDefault();
    console.table({email, password});
  }


  return (
    <FormWrapper onSubmit={loginSubmit}>
      <Title>Login</Title>
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        name="password"
        value={password}
        onChange={handleInputChange}
      />
      <Button variant="contained" type="submit">Ingresar</Button>
      <Link
        component="button"
        variant="body2"
        color="#fff"
        onClick={() => setIsRegistered(false)}
      >
        No tengo una cuenta, Registrame
      </Link>
    </FormWrapper>
  );
};
