import request from '../utils/request'

export const fetchTagsApi = (() => {
  return request({
    url: '/pub/tag',
    method: 'get'
  })
})
