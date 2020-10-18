import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from '../views/users/'
import Posts from '../views/posts/'
import NotFound from '../views/errors/not-found'

export default function App() {
  return <Switch>
    {
      routes.map(route => <Route {...route} />)
    }
  </Switch>
}

const routes = [
  {
    key: 'users',
    path: '/',
    component: Users,
    exact: true,
  },
  {
    key: 'posts',
    path: '/posts/:userId',
    component: Posts
  },
  {
    key: 'not-found',
    component: NotFound,
  }
]