import React from 'react'
import styled from 'styled-components'
import List from '../../components/users/list'
import UsersBreadcrumb from '../../components/users/breadcrumb'

const Container = styled.div`
  margin: auto;
  max-width:70rem
`

const Index = () => {
  return <>
    <UsersBreadcrumb />
    <List />
  </>
}

export default Index
