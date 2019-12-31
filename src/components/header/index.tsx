import React from 'react'
import { Layout, Row, Col, Icon, Menu, Input } from 'antd'
import { Link } from 'react-router-dom'
import Login from '../login/index'
import './header.scss'

const Header = (): any => {
  const { Header } = Layout
  // https://avatars1.githubusercontent.com/u/8186664?s=460&v=4
  return (
    <Layout className='custom-layout'>
      <Header className='custom-header'>
        <Row className='custom-row'>
          <Col className='blog-name-box' span={5}>
            <div className='blog-name'>
              <Icon type='customer-service' theme='twoTone' />
              luka的博客
              <span className='line'></span>
            </div>
          </Col>
          <Col span={10}>
            <Icon type='search' />
            <Input placeholder='搜索文章' className='header-search' />
          </Col>
          <Col span={6}>
            <Menu mode='horizontal'>
              <Menu.Item key='home'>
                <Link to='/home'>
                  <Icon type='home' />
                  首页
                </Link>
              </Menu.Item>
              <Menu.Item key='file'>
                <Link to='/file'>
                  <Icon type='file' />
                  归档
                </Link>
              </Menu.Item>
              <Menu.Item key='classification'>
                <Link to='/heart'>
                  <Icon type='appstore' />
                  分类
                </Link>
              </Menu.Item>
              <Menu.Item key='about'>
                <Link to='/about'>
                  <Icon type='check-circle' />
                  关于
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={3}>
            <Login />
          </Col>
        </Row>
      </Header>
    </Layout>
  )
}

export default Header
