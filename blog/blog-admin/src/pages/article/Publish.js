import React, { useState, useEffect } from 'react'
import marked from 'marked'
import { Button, Row, Col, Select, Input, Tag, Form, message } from 'antd'
import { fetchTagsApi } from '../../api/tag'
import { addArticleApi } from '../../api/article'
import '../../styles/article/publish.less'

function Publish(props) {
  const [content, setContent] = useState('')
  const [introduce, setIntroduce] = useState('')
  const [tag, setTag] = useState([])

  const renderer = new marked.Renderer()

  marked.setOptions({
    renderer: renderer,
    gfm: true,          // // github样式
    pedantic: false,    // 不容错
    sanitize: false,    // 忽略html标签
    tables: true,       // github表格样式
    breaks: false,
    smartLists: true,   // 列表样式
    smartypants: false
  })

  const changeContent = e => {
    setContent(marked(e.target.value))
  }

  const changeIntroduce = e => {
    setIntroduce(marked(e.target.value))
  }

  useEffect(() => {
    fetchTagsApi().then(res => {
      if (res.data.success) {
        setTag(res.data.data.tags)
      }
    })
  }, [])

  const tagRender = props => {
    return (
      <Tag color={props.label.props.color} closable style={{ marginRight: 3 }}>
        {props.label.props.children}
      </Tag>
    )
  }

  const [form] = Form.useForm()

  const publishArticle = async value => {
    const { data } = await addArticleApi(value, value.tag)
    if (data.success) {
      message.success(data.message)
      form.resetFields()
    }
  }

  return (
    <Form onFinish={publishArticle} form={form}>
      <Row gutter={5}>
        <Col span={18}>
          <Form.Item
            name="title"
            rules={[{ required: true, message: '请输入文章标题！' }]}
          >
            <Input placeholder="文章标题"/>
          </Form.Item>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name="content"
                rules={[{ required: true, message: '请输入文章内容！' }]}
              >
                <Input.TextArea onChange={changeContent} rows={35} className="markdown-content" placeholder="文章内容"/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <div className="show-html" dangerouslySetInnerHTML={{ __html: content }}/>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <Button type="primary" htmlType="submit" style={{ marginBottom: 24 }}>发布文章</Button>
            <Col span={24}>
              <Form.Item
                name="introduce"
                rules={[{ required: true, message: '请输入文章简介！' }]}
              >
                <Input.TextArea onChange={changeIntroduce} rows={4} placeholder="文章简介"/>
              </Form.Item>
              <div className="introduce-html" dangerouslySetInnerHTML={{ __html: introduce }}/>
            </Col>
          </Row>
          <Form.Item
            name="tag"
            rules={[{ required: true, message: '请选择文章标签！' }]}
          >
            <Select
              mode="multiple"
              allowClear
              showArrow
              style={{ width: '100%' }}
              placeholder="请选择标签！"
              tagRender={tagRender}
            >
              {tag.map(item => (<Select.Option key={item.id}><Tag color={item.color}>{item.name}</Tag></Select.Option>))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default Publish
