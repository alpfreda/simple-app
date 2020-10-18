import React from 'react'
import styled from 'styled-components'
import PostsBreadcrumb from '../../components/posts/breadcrumb'
import Posts from '../../components/posts/posts'

const Container = styled.div`
  margin: auto;
  max-width:70rem
`

const Index = ({ match }) => {
  const userId = match.params.userId || null
  
  return <>
    <PostsBreadcrumb />
    <Posts userId={userId} />
  </>
}

export default Index
