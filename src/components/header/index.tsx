import React from 'react'
import { Layout, Row, Col, Icon, Menu, Input } from 'antd'
import { Link } from 'react-router-dom'
import Login from '../login/index'
import { menuJsonList } from '@/assets/json/header'
import './header.scss'

const Header = (): any => {
  const { Header } = Layout
  // 头部导航列表
  const menuList = menuJsonList.map((item) => {
    return (
      <Menu.Item key={item.path}>
        <Link to={`/${item.path}`}>
          <Icon type={item.icon} />
          {item.name}
        </Link>
      </Menu.Item>
    )
  })
  return (
    <Layout className="custom-layout">
      <Header className="custom-header">
        <Row className="custom-row">
          <Col className="blog-name-box" span={5}>
            <div className="blog-name">
              <Icon type="customer-service" theme="twoTone" />
              luka
              <span className="line"></span>
            </div>
          </Col>
          <Col span={10}>
            <Icon className="search-icon" type="search" />
            <Input placeholder="搜索文章" className="header-search" />
          </Col>
          <Col span={9}>
            <Row className="custom-row">
              <Col span={16}>
                <Menu mode="horizontal">{menuList}</Menu>
              </Col>
              <Col span={8}>
                <Login />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    </Layout>
  )
}

export default Header
