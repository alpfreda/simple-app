import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '../common/breadcrumb'

const PostsBreadcrumb = () => (
    <Breadcrumb>
        <BreadcrumbItem to="/">Home Page</BreadcrumbItem>
        <BreadcrumbItem current>Posts</BreadcrumbItem>
    </Breadcrumb>
)

export default PostsBreadcrumb