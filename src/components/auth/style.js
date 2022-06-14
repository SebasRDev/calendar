import styled from 'styled-components';
import { ContainerWrapper } from '../shared/container/style';


export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  justify-content: center;
  margin: auto;
  max-width: 450px;
  position: relative;
  z-index: 10;
`

export const Title = styled.h2`
  font-family: Roboto;
  margin: 0;
  font-size: 32px;
  color: white;
`

export const LoginContainer = styled(ContainerWrapper)`
  max-width: none;
  background-position: center;
  background-size: cover;

  &::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgb(0,0,0);
    opacity: 0.75;
    z-index: 0;
  }
`