import React, { useMemo } from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import { Breadcrumb, BreadcrumbItem } from '../breadcrumb'

const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];

// createTheme('solarized', {
//     text: {
//         primary: '#268bd2',
//         secondary: '#2aa198',
//     },
//     background: {
//         default: '#002b36',
//     },
//     context: {
//         background: '#cb4b16',
//         text: '#FFFFFF',
//     },
//     divider: {
//         default: '#073642',
//     },
//     action: {
//         button: 'rgba(0,0,0,.54)',
//         hover: 'rgba(0,0,0,.08)',
//         disabled: 'rgba(0,0,0,.12)',
//     },
// })

const MyComponent = () => {
    const columns = useMemo(() => [
        {
            name: 'Name',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'year',
            sortable: true,
        },
        {
            name: 'Gender',
            selector: 'year',
            sortable: true,
        },
        {
            name: 'Status',
            selector: 'year',
            sortable: true,
        },
        {
            name: 'Status',
            selector: 'year',
            sortable: false,
        },
    ], [])

    return <>
        <Breadcrumb>
            <BreadcrumbItem to="/">Home Page</BreadcrumbItem>
        </Breadcrumb>
        <DataTable
            title="Arnold Movies"
            columns={columns}
            data={data}
        // theme="solarized"
        /></>
}

export default MyComponent