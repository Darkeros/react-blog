import React from 'react'
import { Divider, Tag } from 'antd'
import './sidlers.scss'
import { hotArticlesListJson, tagListJson } from '@/assets/json/sidlers'

const Sidlers = () => {
  // 热门文章列表
  const hotArticlesList = hotArticlesListJson.map((item) => (
    <li key={item.id}>{item.title}</li>
  ))
  // 标签列表
  const tagList = tagListJson.map((item, index) => (
    <Tag className="item-tag" color={item.tag}>
      {item.tag}
    </Tag>
  ))
  return (
    <div className="sidlers-content">
      <div className="user-model">
        <div className="user-img-box">
          <img src={require('../../assets/img/user.jpg')} alt="" />
        </div>
        <div className="username">萌大大</div>
        <div className="introduce">千里之行，始于足下</div>
        <Divider orientation="left">热门文章</Divider>
        <ul className="hot-articles-list">{hotArticlesList}</ul>
        <Divider orientation="left">标签</Divider>
        <ul className="tag-list">{tagList}</ul>
      </div>
    </div>
  )
}

export default Sidlers
