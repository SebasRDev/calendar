import React from 'react'
import { TextField } from '@mui/material'

import { FormWrapper, Title } from './style'

export const RegisterForm = () => {
  return (
    <FormWrapper>
      <Title>Register</Title>
      <TextField
        label="Name" 
        variant="standard" 
      />
      <TextField
        label="Email" 
        variant="standard" 
      />
      <TextField
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
      <TextField
        label="Confirm Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
    </FormWrapper>
  )
}
