import React, { useEffect } from "react";
import { Button, Link, TextField } from "@mui/material";
import { useSnackbar } from "notistack";

import { FormWrapper, Title } from "./style";
import { useAuthStore, useForm } from "../../hooks";

const loginFormFields = {
  email: "",
  password: "",
};

export const LoginForm = ({ setIsRegistered }) => {
  const { startLogin, errorMessage } = useAuthStore();
  const { enqueueSnackbar } = useSnackbar();

  const [{ email, password }, handleInputChange] = useForm(loginFormFields);

  const loginSubmit = (e) => {
    e.preventDefault();
    startLogin({ email, password });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      enqueueSnackbar(errorMessage, {
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        preventDuplicate: true,
      });
    }
  }, [errorMessage]);


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
      <Button 
        variant="contained" 
        type="submit"
      >
        Ingresar
      </Button>
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
