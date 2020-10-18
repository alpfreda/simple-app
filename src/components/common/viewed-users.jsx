import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const UserViewedWrapper = styled.div`
padding: 1rem 1rem 0;
border: 1px solid #ddd;
border-radius:0.3rem;
margin: 1rem;
`

const UserViewedTitle = styled.div`
margin-bottom:1rem;
text-align:center;
`

const UserItem = styled.div`
padding: 1rem;
border: 1px solid #ddd;
display: flex;
flex-direction: row;
border-radius:0.3rem;
margin-bottom:1rem;
`

const UserContent = styled.div`
margin: 4px;
flex: 0 1 calc(70% - 4px);
`

const UserButton = styled.div`
margin: 4px;
flex: 0 1 calc(30% - 4px);
border: 1px solid #ddd;
border-radius: 0.3rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 0.8rem;
`

const UserName = styled.div`
color: #3f51c3;
font-weight: 500;
margin-bottom: 0.5rem;
`

const UserEmail = styled.div`
color: #3f51c3;
font-size:0.8rem;
`

const UserGender = styled.div`
margin-top: 0.4rem;
color: #666;
`

const ViewedUsers = props => {
  const viewedUsers = useSelector(state => state.users.viewedUsers)
  return (viewedUsers || []).length > 0 && <UserViewedWrapper>
    <UserViewedTitle>Latest Viewed Users </UserViewedTitle>
    {
      viewedUsers.map(user => {
        return <UserItem key={user.id}>
          <UserContent>
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <UserGender>{user.gender}</UserGender>
          </UserContent>
          <UserButton>
            View More
          </UserButton>
        </UserItem>
      })
    }
  </UserViewedWrapper>
}

export default ViewedUsers