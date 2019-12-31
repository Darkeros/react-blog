import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import Header from '@/components/header/index'
import 'antd/dist/antd.min.css'

const App = () => {
  return (
    <HashRouter basename='/'>
      <Header />
    </HashRouter>
  )
}

render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  document.getElementById('root')
)
