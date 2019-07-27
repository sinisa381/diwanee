import React from 'react'
import Layout from './hoc/layout'
import { Switch, Route } from 'react-router-dom'
import Detail from './pages/detail'
import Login from './pages/login'
import NoPage from './pages/404'
import Auth from './hoc/auth'

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route path='/details' component={Auth(Detail, true)} />
        <Route path='/' exact component={Auth(Login, false)} />
        <Route component={NoPage} />
      </Switch>
    </Layout>
  )
}

export default Routes
