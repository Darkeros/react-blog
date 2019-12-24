import React from 'react'
import { PageHeader, Button } from 'antd'

const Header = (): any => {
  return (
    <PageHeader
      title=''
      subTitle='This is a subtitle'
      extra={[
        <Button key='3'>Operation</Button>,
        <Button key='2'>Operation</Button>,
        <Button key='1' type='primary'>
          Primary
        </Button>
      ]}
      avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}></PageHeader>
  )
}

export default Header
