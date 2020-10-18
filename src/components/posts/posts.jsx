import React, { useMemo, useState, useEffect } from 'react'
import Loader from '../common/loader'
import { usePostsApi } from '../../services/posts-api'
import { useUserApi } from '../../services/users-api'
import Post from './post'
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { usersConstants } from '../../redux/constants'

const UserTitle = styled.h3`
margin-top:1rem;
font-weight:500;
`

const PostsWrapper = styled.section`
display:flex;
margin-top:1rem;
`
const Posts = ({ userId }) => {
  const [{ user, isLoading: userIsLoading, isError: userIsError }] = useUserApi(`https://gorest.co.in/public-api/users/${userId}`, null);
  const [{ list, isLoading, isError }] = usePostsApi(`https://gorest.co.in/public-api/users/${userId}/posts`, []);

  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      dispatch({ type: usersConstants.SET_VIEW_USER, payload: user })
    }
  }, [user])

  return <>
    {(isError || userIsError) && <div>Something went wrong ...</div>}
    {isLoading || userIsLoading ? <Loader /> :
      <>
        {
          user && <UserTitle>
            UserName: {user.name}
          </UserTitle>
        }

        {isLoading ? <Loader /> : <PostsWrapper>
          {
            (list || []).length > 0 ?
              list.map(post => {
                return <Post key={post.id} {...post} />
              }) : <div>There is not post for show</div>
          }
        </PostsWrapper>
        }
      </>
    }
  </>
}

export default Posts