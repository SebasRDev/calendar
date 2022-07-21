import React, { useState } from "react";

import { FullHeight } from "../shared/fullHeight/FullHeight";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { LoginContainer } from "./style";

import bg from "../../assets/bg_login.jpeg";

export const LoginScreen = () => {
  const [isRegistered, setIsRegistered] = useState(true)

  return (
    <FullHeight>
      <LoginContainer style={{ backgroundImage: `url(${bg})` }}>
        {isRegistered ? <LoginForm isRegistered={isRegistered} setIsRegistered={setIsRegistered}/> : <RegisterForm isRegistered={isRegistered} setIsRegistered={setIsRegistered}/>}
      </LoginContainer>
    </FullHeight>
  );
};
