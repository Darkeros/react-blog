import React from 'react'
import { Divider } from 'antd'
import './index.scss'

const AppHome = () => {
  return (
    <div className="app-home">
      <div className="app-home-list">
        <li>
          <Divider orientation="left">
            <span className="title">安静了</span>
            <span className="date">2018-10-21</span>
          </Divider>
        </li>
      </div>
    </div>
  )
}

export default AppHome
