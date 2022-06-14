import React from 'react'
import { TextField } from '@mui/material'

import { FormWrapper, Title } from './style'

export const LoginForm = () => {
  return (
    <FormWrapper>
      <Title>Login</Title>
      <TextField 
        id="standard-basic" 
        label="Email" 
        variant="standard" 
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
    </FormWrapper>
  )
}
