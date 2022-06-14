import React from 'react'

import { FullHeight } from '../shared/fullHeight/FullHeight'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { LoginContainer } from './style'

import bg from '../../assets/bg_login.jpeg'

export const LoginScreen = () => {

  const logged = true;


  return (
    <FullHeight>
      <LoginContainer style={{backgroundImage: `url(${bg})` }}>
        {
          logged
            ? <LoginForm />
            : <RegisterForm />
        }
      </LoginContainer>
    </FullHeight>
  )
}

