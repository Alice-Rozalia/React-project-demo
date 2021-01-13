import axios from 'axios'
import {message} from 'antd';

const isPrd = process.env.NODE_ENV === 'production';

const request = axios.create({
    // baseURL: process.env.VUE_APP_BASEURL,
    baseURL: isPrd ? '' : 'http://localhost:8360',
    timeout: 5000,
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

request.interceptors.request.use(config => {
    const token = window.sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization = token
    }
    return config
}, error => {
    return Promise.reject(error)
});

request.interceptors.response.use(config => {
    if (!config.data.success) {
        message.error(config.data.message || '服务器端异常！')
    }
    return config
}, error => {
    if (error.response.status === 504 || error.response.status === 404) {
        message.error('服务器被吃了( ╯□╰ )！')
    } else if (error.response.status === 403) {
        message.error('权限不足！')
    } else {
        if (error.response.data.message) {
            message.error(error.response.data.message)
        } else {
            message.error('未知错误！')
        }
    }
    return Promise.reject(error)
});

export default request