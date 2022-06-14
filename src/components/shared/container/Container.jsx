import React from 'react'

import { ContainerWrapper } from './style';

export const Container = ({children}) => {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  )
}
