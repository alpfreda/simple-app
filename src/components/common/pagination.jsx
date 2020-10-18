import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { Subject } from 'rxjs'

const PaginationWrapper = styled.div`
display: flex;
justify-content:flex-end;
margin:1rem 0;
`

const PaginationInfo = styled.div`
display: flex;
align-items: center;
margin-right: auto;
background: #f5f5f5;
padding: 0 0.6rem;
font-size: 0.9rem;
border-radius: 1rem;
line-height: 1;
`

const PaginationInner = styled.ul`
list-style: none;
display: inline-flex;
border:1px solid #ddd;
border-radius:0.3rem;
`

const PaginationItem = styled.li`
padding: 0.4rem 0.8rem;
border-right: 1px solid #ddd;
cursor:pointer;
:hover{
    background:#f5f5f5;
}
:last-child{
    border-right:0;
}
&.active{
    background: #4354b6;
    color: #fff;
}
`

const Pagination = ({ pages = 0, initialPage = 0, pageChanged }) => {
    const [current, setCurrent] = useState(initialPage)
    const [onChange$] = useState(() => new Subject())
    const pageNumbers = []
    let maxSize = current + 10
    while (maxSize > pages) {
        maxSize--;
    }

    for (let i = Math.max(1, maxSize - 12); i <= maxSize; i++) {
        pageNumbers.push(i)
    }

    useEffect(() => {
        onChange$.pipe(
            debounceTime(100),
            distinctUntilChanged(),
        ).subscribe(pageChanged)
    }, [])

    const handleChange = page => {
        setCurrent(page)
        onChange$.next(page)
    }

    const renderPageNumbers = pageNumbers.map(pageNumber => (
        <PaginationItem key={pageNumber} onClick={() => { handleChange(pageNumber) }} className={current === pageNumber ? 'active' : ''}>
            {pageNumber}
        </PaginationItem>
    ))
    return (<>
        { (pages > 0) && <PaginationWrapper>
            <PaginationInfo>
                {current} from {pages} pages
            </PaginationInfo>
            <PaginationInner>
                <PaginationItem onClick={() => { handleChange(1) }} className='previous'>«</PaginationItem>
                {renderPageNumbers}
                <PaginationItem onClick={() => { handleChange(pages) }} className='next'>»</PaginationItem>
            </PaginationInner>
        </PaginationWrapper>
        }
    </>)
}

export default Pagination