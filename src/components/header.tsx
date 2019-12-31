import React from 'react'
import { Layout, Row, Col, Icon, Menu, Button } from 'antd'
import './header'
const HeaderContent = (): any => {
  const { Header } = Layout
  // https://avatars1.githubusercontent.com/u/8186664?s=460&v=4
  return (
    <Layout className='custom-layout'>
      <Header className='custom-header'>
        <Row className='custom-row'>
          <Col span={7}>
            <Icon type='customer-service' theme='twoTone' />
            luka的博客
          </Col>
          <Col span={7}></Col>
          <Col span={7}>
            <Menu mode='horizontal'>
              <Menu.Item key='mail'>
                <Icon type='mail' />
                首页
              </Menu.Item>
              <Menu.Item key='app'>
                <Icon type='appstore' />
                归档
              </Menu.Item>
              <Menu.Item key='app'>
                <Icon type='appstore' />
                分类
              </Menu.Item>
              <Menu.Item key='app'>
                <Icon type='appstore' />
                关于
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={3}>
            <Button type='primary' ghost>
              登陆
            </Button>
            <Button type='danger' ghost>
              注册
            </Button>
          </Col>
        </Row>
      </Header>
    </Layout>
  )
}

export default HeaderContent
