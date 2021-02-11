import React from 'react'
import { Avatar, Divider, Icon, Tag, Tooltip } from 'antd'
import '../static/styles/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div><Avatar size={100} src="https://kuro-blog.oss-cn-guangzhou.aliyuncs.com/blog-img/avatar.jpg"/></div>
      <div className="author-name">白鸟亦悲否？</div>
      <div className="author-introduction">
        <p>20岁，大专，二年级，计算机应用专业。自学能力强，适应力强，抗压能力强。获2020.11广西大学生程序设计大赛铜奖。</p>
        <Divider>社交账号</Divider>
        <Tooltip placement="top" title="https://github.com/Alice-Rozalia">
          <a href="https://github.com/Alice-Rozalia" target="_blank"><Avatar size={28} icon="github" className="account"/></a>
        </Tooltip>
        <Tooltip placement="top" title="2654006709">
          <Avatar size={28} icon="qq" className="account"/>
        </Tooltip>
        <Tooltip placement="top" title="2654006709@qq.com">
          <Avatar size={28} icon="mail" className="account"/>
        </Tooltip>
      </div>
    </div>
  )
}

export default Author
