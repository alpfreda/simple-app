import React, { useMemo, useState, useEffect } from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import Search from './search'
import Pagination from '../common/pagination'
import { useUsersApi } from '../../services/users-api'
import Loader from '../common/loader'
import { Link } from 'react-router-dom'

createTheme('solarized', {
    table: {
        borderRadius: '4px 4px 0px 0px',
        border: 'thin solid #d9d9d9',
    },
    text: {
        primary: '#333',
        secondary: '#2aa198',
    },
    background: {
        default: '#fff',
    },
    divider: {
        default: '#eee',
    }
});

const List = () => {
    const [{ page, filter }, setChange] = useState({ page: 1, filter: '' })
    const [{ list, pagination, isLoading, isError }, doFetch] = useUsersApi(`https://gorest.co.in/public-api/users?name=${filter}&page=${page}`, []);

    const columns = useMemo(() => [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Gender',
            selector: 'gender',
            sortable: true,
        },
        {
            name: 'Status',
            selector: 'status',
            sortable: true,
        },
        {
            name: '',
            selector: 'id',
            sortable: false,
            cell: (row) => { return <Link to={{ pathname: `/posts/${row.id}`}} className='view-more-btn'>View Posts</Link> }
        },
    ], [])

    useEffect(() => {
        doFetch(`https://gorest.co.in/public-api/users?name=${filter}&page=${page}`)
    }, [page, filter])

    return <>
        <Search initialFilter={filter} filterChanged={(value) => { setChange({ filter: value, page }) }} />
        {isError && <div>Something went wrong ...</div>}

        {isLoading ? <Loader /> : <>
            <DataTable
                columns={columns}
                data={list}
                noHeader={true}
                fixedHeader
                fixedHeaderScrollHeight='27rem'
                theme="solarized"
            />
            {
                pagination && <Pagination pages={pagination.pages} initialPage={page} pageChanged={(value) => { setChange({ page: value, filter }) }} />
            }
        </>
        }
    </>
}

export default List