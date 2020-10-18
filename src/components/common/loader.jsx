import React from 'react'
import styled from 'styled-components'

const LoaderWrap = styled.div`
  width: 100%;
  float: left;
  text-align: center;
  position: relative;
  -webkit-transform: translateY(360px);
  transform: translateY(360px);
  -webkit-transform: translateY(45vh);
  transform: translateY(45vh);
`
const LoaderInner = styled.div`
  border-radius: 50%;
  margin: 0 auto;
  width: 32px;
  height: 32px;
  border: 0.25rem solid rgb(63 81 181);
  border-top-color: #ddd;
  -webkit-animation: spin 1s infinite linear;
  animation: spin 1s infinite linear;
`
const Loader = () => (
    <LoaderWrap>
        <LoaderInner/>
    </LoaderWrap>
)


export default Loader
