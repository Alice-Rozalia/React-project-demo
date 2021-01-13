import request from '@/utils/request'

export const fetchNewsApi = (query => {
    return request({
        url: '/api/v1/pub/news/list',
        method: 'get',
        params: query
    })
});

export const fetchNewsByBkApi = (bid => {
    return request({
        url: '/api/v1/pub/news/bk',
        method: 'get',
        params: {bid: bid}
    })
});

export const fetchNewsByIdApi = (id => {
    return request({
        url: '/api/v1/pub/news/detail/' + id,
        method: 'get'
    })
});

export const deleteNewsByIdApi = (id => {
    return request({
        url: '/api/v1/pri/news/delete/' + id,
        method: 'delete'
    })
});

export const addNewsApi = (data => {
    return request({
        url: '/api/v1/pri/news/add',
        method: 'post',
        data: data
    })
});

export const updateNewsApi = (data => {
    return request({
        url: '/api/v1/pri/news/edit',
        method: 'put',
        data: data
    })
});