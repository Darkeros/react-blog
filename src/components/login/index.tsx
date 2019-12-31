import React from 'react'
import { Button } from 'antd'

const Login = () => {
  return (
    <>
      <Button type='primary' ghost style={{ marginRight: '10px' }}>
        登陆
      </Button>
      <Button type='danger' ghost>
        注册
      </Button>
    </>
  )
}

export default Login
