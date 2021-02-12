import React, { useState, useEffect } from 'react'
import { Table, Modal, message, Button } from 'antd'
import { fetchArticlesApi } from '../../api/article'

function ArticleList() {
  const [list, setList] = useState([])

  useEffect(async () => {
    const { data } = await fetchArticlesApi()
    if (data.success) {
      setList(data.data.articles)
    }
  }, [])

  const columns = [
    {
      title: '文章标题',
      dataIndex: 'title'
    },
    {
      title: '状态',
      dataIndex: 'status'
    },
    {
      title: '浏览',
      dataIndex: 'view'
    },
    {
      title: '标签',
      dataIndex: ['tags', 'name']
    },
    {
      title: '发布时间',
      dataIndex: 'createTime'
    },
    {
      title: '是否置顶',
      dataIndex: 'top'
    },
    {
      title: '操作',
      width: 140,
      render: item => (<span>
          <Button type="primary" size="small" style={{ marginRight: '8px' }}>修改</Button>
          <Button type="danger" size="small">删除</Button>
        </span>)
    }
  ]

  return (
    <div>
      <Table
        bordered={true}
        rowKey="id"
        dataSource={list}
        columns={columns}
        pagination={false}
      />
    </div>
  )
}

export default ArticleList
