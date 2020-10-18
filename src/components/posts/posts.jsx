import React, { useMemo, useState, useEffect } from 'react'
import Loader from '../common/loader'
import { useDataApi } from './api'
import Post from './post'
import styled from 'styled-components';

const UserTitle = styled.h3`
margin-top:1rem;
font-weight:500;
`

const PostsWrapper = styled.section`
display:flex;
margin-top:1rem;
`
const Posts = ({ userId }) => {
  const [{ posts, isLoading, isError }, doFetch] = useDataApi(`https://gorest.co.in/public-api/users/${userId}/posts`, []);
  return <>
    <UserTitle>
      UserName: {userId}
    </UserTitle>
    {isError && <div>Something went wrong ...</div>}

    {isLoading ? <Loader /> : <PostsWrapper>
      {
        (posts || []).length > 0 ?
          posts.map(post => {
            return <Post key={post.id} {...post} />
          }) : <div>There is not post for show</div>
      }
    </PostsWrapper>
    }
  </>
}

export default Posts