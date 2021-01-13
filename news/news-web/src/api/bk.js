import request from '@/utils/request'

export const fetchBksApi = (bid => {
    return request({
        url: '/api/v1/pub/bk/list',
        method: 'get',
        params: {bid: bid}
    })
});