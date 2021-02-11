import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import { Row, Col, List, Icon, Tag } from 'antd'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import MyTag from '../components/Tag'
import axios from 'axios'
import request from '../config/api'
import marked from 'marked'
import hljs from "highlight.js"
import '../static/styles/pages/list.css'
import 'highlight.js/styles/monokai-sublime.css'

const MyList = (list) => {
  const [articleList, setArticleList] = useState(list.data.articles)
  useEffect(() => {
    setArticleList(list.data.articles)
  })

  const renderer = new marked.Renderer()
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

  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>文章列表 | 白鸟亦悲否？</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={articleList}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{ pathname: '/detail', query: { id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span><Icon type="calendar"/> {item.createTime}</span>
                  <span><Icon type="tags"/>
                    {item.tags.map(item => (<Tag key={item.id} color={item.color}>{item.name}</Tag>))}
                  </span>
                  <span><Icon type="fire"/> {item.view}人</span>
                </div>
                <div className="list-context" dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}></div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author/>
          <MyTag/>
          <Advert/>
        </Col>
      </Row>

      <Footer/>
    </>
  )
}

MyList.getInitialProps = async (context) => {
  let id = context.query.id

  const promise = new Promise((resolve) => {
    axios(request.fetchArticleList, { params: { tagId: id } }).then(res => resolve(res.data))
  })

  return await promise
}

export default MyList
