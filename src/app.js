import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import PublicLayout from './layouts/public-layout'

import './assets/base.scss'

const App = () => {
  return (
    <Router>
      <PublicLayout />
    </Router>
  )
}

export default App
