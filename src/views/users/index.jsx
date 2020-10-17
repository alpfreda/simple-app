import React from 'react'
import styled from 'styled-components'
import List from '../../components/users/list'
import UserBreadcrumb from '../../components/users/breadcrumb'

const Container = styled.div`
  margin: auto;
  max-width:70rem
`

const Index = () => {
  return <>
    <UserBreadcrumb />
    <List />
  </>
}

export default Index
