import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { Row, Col, Icon, Breadcrumb, Affix, message, Tag } from 'antd'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import marked from 'marked'
import hljs from "highlight.js"
import axios from 'axios'
import 'highlight.js/styles/monokai-sublime.css'
import '../static/styles/pages/detailed.css'
import Tocify from '../components/tocify.tsx'
import request from '../config/api'

const Detail = (props) => {
  const [data, setData] = useState(props.article)

  const tocify = new Tocify()
  const renderer = new marked.Renderer()

  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,          // // github样式
    pedantic: false,    // 不容错
    sanitize: false,    // 忽略html标签
    tables: true,       // github表格样式
    breaks: false,
    smartLists: true,   // 列表样式
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(data.content)

  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{data.title} | 白鸟亦悲否？</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/list">文章列表</a></Breadcrumb.Item>
                <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">{data.title}</div>

              <div className="list-icon center">
                <span><Icon type="calendar"/> {data.createTime}</span>
                <Icon type="tags"/>
                {data.tags.map(item => (<Tag key={item.id} color={item.color}>{item.name}</Tag>))}
                <span><Icon type="fire"/> {data.view}人</span>
              </div>

              <div className="detailed-content" dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
          <Advert/>
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>

      <Footer/>
    </>
  )
}

Detail.getInitialProps = async (context) => {
  let id = context.query.id

  const promise = new Promise(resolve => {
    axios(request.fetchArticleByIdApi + id).then(res => {
      if (!res.data.success) {
        return message.error(res.data.message)
      }
      resolve(res.data.data)
    })
  })
  return await promise
}

export default Detail
