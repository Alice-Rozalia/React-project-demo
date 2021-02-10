import React from 'react'
import { Avatar, Divider, Icon, Tag } from 'antd'
import '../static/styles/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div><Avatar size={100} src="https://kuro-blog.oss-cn-guangzhou.aliyuncs.com/blog-img/avatar.jpg"/></div>
      <div className="author-name">白鸟亦悲否？</div>
      <div className="author-introduction">
        <p>20岁，大专，二年级，计算机应用专业。自学能力强，适应力强，抗压能力强。获2020.11广西大学生程序设计大赛铜奖。</p>
        <div className="tag-container">
          <Tag color="magenta">Spring Boot</Tag>
          <Tag color="red">Spring Security</Tag>
          <Tag color="volcano">Redis</Tag>
          <Tag color="orange">MySQL</Tag>
          <Tag color="gold">Shiro</Tag>
          <Tag color="lime">Elasticsearch</Tag>
          <Tag color="green">Kafka</Tag>
          <Tag color="cyan">Vue2/3</Tag>
          <Tag color="blue">Element-UI</Tag>
          <Tag color="geekblue">React</Tag>
          <Tag color="purple">Antd</Tag>
        </div>
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className="account"/>
        <Avatar size={28} icon="qq" className="account"/>
        <Avatar size={28} icon="wechat" className="account"/>
      </div>
    </div>
  )
}

export default Author
