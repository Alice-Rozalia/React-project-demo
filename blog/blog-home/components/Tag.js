import React, { useState, useEffect } from 'react'
import { Tag } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import request from '../config/api'
import '../static/styles/components/tag.css'

const MyTag = () => {
  const [tagArray, setTagArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(request.fetchAllTagApi).then(res => {
        return res.data.data.tags
      })

      setTagArray(result)
    }

    fetchData()
  }, [])

  return (
    <div className="comm-box tag-container">
      {
        tagArray.map(item => (
            <Tag key={item.id} color={item.color}>
              <Link href={{ pathname: '/', query: { id: item.id } }}><a>{item.name}</a></Link>
            </Tag>
          )
        )
      }
    </div>
  )
}

export default MyTag
