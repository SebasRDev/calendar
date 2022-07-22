import React, { useEffect } from "react";
import { Button, Link, TextField } from "@mui/material";

import { FormWrapper, Title } from "./style";
import { useAuthStore, useForm } from "../../hooks";
import { useSnackbar } from "notistack";

const registerFormFields = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

export const RegisterForm = ({ setIsRegistered }) => {
  const [{ name, email, password, password2 }, handleInputChange] =
    useForm(registerFormFields);
  const {startRegister, errorMessage} = useAuthStore();
  const { enqueueSnackbar } = useSnackbar();

  const registerSubmit = (e) => {
    e.preventDefault();
    if(password !== password2){
      enqueueSnackbar('Las contraseñas deben ser iguales',{
        variant: 'error',
        autoHideDuration: 3000,
        anchorOrigin:{
          vertical: 'top',
          horizontal: 'center'
        },
        preventDuplicate: true
      });
    }
    startRegister({ name, email, password });
  }

  useEffect(()=>{
    if(errorMessage !== undefined){
      enqueueSnackbar(errorMessage,{
        variant: 'error',
        autoHideDuration: 3000,
        anchorOrigin:{
          vertical: 'top',
          horizontal: 'center'
        },
        preventDuplicate: true
      });
    }
  },[errorMessage])

  return (
    <FormWrapper onSubmit={registerSubmit}>
      <Title>Register</Title>
      <TextField
        label="Name"
        variant="standard"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <TextField
        label="Email"
        variant="standard"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <TextField
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        name="password"
        value={password}
        onChange={handleInputChange}
      />
      <TextField
        label="Confirm Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        name="password2"
        value={password2}
        onChange={handleInputChange}
      />
      <Button variant="contained" type="submit">
        Registrarse
      </Button>
      <Link
        component="button"
        variant="body2"
        color="#fff"
        onClick={() => setIsRegistered(true)}
      >
        Ya tengo una cuenta
      </Link>
    </FormWrapper>
  );
};
