import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../views/home/index'

export default () => {
  return (
    <Switch>
      <Route path='/home' component={Home}></Route>
    </Switch>
  )
}
