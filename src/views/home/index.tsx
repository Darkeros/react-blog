import React from 'react'
import { Context, useStore } from './store/index'
import AppHome from './components/appHome'
import './index.scss'

const Home = () => {
  return (
    <Context.Provider value={useStore}>
      <AppHome />
    </Context.Provider>
  )
}

export default Home
