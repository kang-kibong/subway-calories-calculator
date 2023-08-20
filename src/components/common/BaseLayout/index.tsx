import { ReactNode } from 'react'
import Header from '@components/Header'

import styled from '@emotion/styled'

interface Props {
  children: ReactNode
}

const BaseLayout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Background>
        <Header />
        {children}
      </Background>
    </LayoutContainer>
  )
}

export default BaseLayout

const LayoutContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100vh;
  background-color: #fff;
`

const Background = styled.div`
  background-color: #f6f6f6;
  height: 100vh;
`
