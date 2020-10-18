import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Items = styled.ol`
  margin:1rem 0 0;
  padding-left: 0;
  list-style: none;
  display: flex;;
`

const Item = styled.li`
  & + &::before {
    content: '';
    display: inline-block;
    transform: rotate(15deg);
    border-right: 1px solid currentColor;
    height: 1em;
    margin: 0 8px -0.2em;
  }
`

const ItemLink = styled(NavLink).attrs({ exact: true })`
  color: #36d;
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: currentColor;
  }

  &.active {
    border: none;
    color: inherit;
  }
`


const ItemCurrent = styled.span`
  color: #777;
`

const BreadcrumbItem = ({ children, to, current, ...props }) => (
  <Item {...props}>
    {
      current ? <ItemCurrent>{children}</ItemCurrent> : <ItemLink to={to}>{children}</ItemLink>
    }
  </Item>
)

const Breadcrumb = ({ children }) => (
  <nav aria-label="Breadcrumb">
    <Items>{children}</Items>
  </nav>
)


export { Breadcrumb, BreadcrumbItem }
