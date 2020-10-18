import React from 'react'
import Routes from '../routes'
import styled from 'styled-components'
import Clock from '../components/common/clock'
import ViewedUsers from './../components/common/viewed-users';

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
        <ViewedUsers />
      </Sidebar>
    </Container>
  )
}

export default PublicLayout
