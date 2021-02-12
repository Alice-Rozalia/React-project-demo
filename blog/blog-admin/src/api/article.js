import request from '../utils/request'
import qs from 'qs'

export const addArticleApi = ((data, ids) => {
  return request({
    url: '/pri/article',
    method: 'post',
    data,
    params: {
      ids: ids
    },
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    }
  })
})

export const fetchArticlesApi = (() => {
  return request({
    url: '/pub/article',
    method: 'get'
  })
})
