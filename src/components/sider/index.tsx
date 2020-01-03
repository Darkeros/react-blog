import React from 'react'
import './index.scss'

const Sider = () => {
  return (
    <div className='sider-content'>
      <div className='user-model'>
        <div className='user-img-box'>
          <img src={require('../../assets/img/user.jpg')} alt='' />
        </div>
        <div className='username'>萌大大</div>
        <div className='introduce'>千里之行，始于足下</div>
      </div>
    </div>
  )
}

export default Sider
