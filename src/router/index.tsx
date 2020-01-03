import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../views/home/index'
import File from '../views/file/index'

export default () => {
  return (
    <Switch>
      <Redirect from='/' to='/home' />
      <Route path='/home' component={Home}></Route>
      <Route path='/file' component={File}></Route>
    </Switch>
  )
}
