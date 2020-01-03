import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider, Row, Col } from 'antd'
import Router from './router/index'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import Header from '@/components/header/index'
import Sider from '@/components/sider/index'
import 'antd/dist/antd.min.css'

const App = () => {
  return (
    <HashRouter basename='/'>
      <Header />
      <Row>
        <Col span={5}>
          <Sider />
        </Col>
        <Col>
          <Router />
        </Col>
      </Row>
    </HashRouter>
  )
}

render(
  <ConfigProvider locale={zh_CN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
