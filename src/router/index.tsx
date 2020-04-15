import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../views/home/index'
import Files from '../views/file/index'

export default () => {
  return (
    <Switch>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/file" component={Files}></Route>
      <Redirect exact form="/" to="/home" />
    </Switch>
  )
}
