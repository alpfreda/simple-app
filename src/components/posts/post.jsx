import React, { useMemo, useState, useEffect } from 'react'
import styled from 'styled-components';
import moment from 'moment'

const PostItem = styled.div`
padding: 1rem;
border: 1px solid #ddd;
display: flex;
flex-direction: column;
border-radius:0.3rem;
margin: 4px;
flex: 0 1 calc(33.3333% - 4px);
height:15rem;
overflow-y:auto;
`

const PostTitle = styled.div`
margin-left: auto;
font-size: 0.8rem;
color: #666;
padding-left: 0.3rem;
border-left: 5px solid #3f51c3;
margin-bottom:0.5rem;
margin-bottom:0.5rem;
`

const PostDate = styled.div`
color: #3f51c3;
font-weight: 500;
`

const PostDescription = styled.div`
margin-top: 0.4rem;
font-size: 0.9rem;
color: #666;
line-height: 1.5;
`

const Post = ({ title, created_at, body }) => {
  return <PostItem>
    <PostTitle>{moment(created_at).format('DD/MM/YYYY hh:mm')}</PostTitle>
    <PostDate>{title}</PostDate>
    <PostDescription>{body}</PostDescription>
  </PostItem>
}

export default Post