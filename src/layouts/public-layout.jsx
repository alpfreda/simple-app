import React from 'react'
import Routes from '../routes'
import styled from 'styled-components'
import Clock from '../components/common/clock'

const Container = styled.div`
  margin: auto;
  max-width:80rem;
  display:flex;
`

const Main = styled.div`
  width:70%
`

const Sidebar = styled.div`
  width:30%
`

const PublicLayout = () => {
  return (
    <Container>
      <Main>
        <Routes />
      </Main>
      <Sidebar>
        <Clock />
      </Sidebar>
    </Container>
  )
}

export default PublicLayout
