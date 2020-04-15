import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider, Row, Col, Layout } from 'antd'
import Router from './router/index'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import Sidlers from '@/components/sidlers/index'
import Header from '@/components/header/index'
import 'antd/dist/antd.min.css'
const { Content } = Layout

const App = () => {
  return (
    <HashRouter basename="/">
      <Layout>
        <Header />
        <Row span={24}>
          <Col span={5}>
            <Sidlers />
          </Col>
          <Col>
            <Content>
              <Router />
            </Content>
          </Col>
        </Row>
      </Layout>
    </HashRouter>
  )
}

render(
  <ConfigProvider locale={zh_CN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
