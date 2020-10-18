import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { Subject } from 'rxjs'

const SearchWrapper = styled.div`
display: flex;
justify-content: flex-end;
`
const Input = styled.input`
font-size: 1rem;
border: none;
text-indent: 5px;
border-radius: 0.3rem;
padding:0.5rem 0.6rem;
transition: all .4s ease;
border: 2px solid #ddd;
:focus{
    outline: none;
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.15);
    border-color: #40916c;
}`

const Search = ({ initialFilter, filterChanged }) => {
  const [filter, setFilter] = useState(initialFilter)
  const [onFilter$] = useState(() => new Subject())

  useEffect(() => {
    onFilter$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe(filterChanged)
  }, [])

  const handleFilter = e => {
    setFilter(e.target.value);
    onFilter$.next(e.target.value)
  }

  return <SearchWrapper>
    <Input
      type="text"
      value={filter}
      placeholder='Name Filter'
      onChange={handleFilter}
    />
  </SearchWrapper>
}

export default Search