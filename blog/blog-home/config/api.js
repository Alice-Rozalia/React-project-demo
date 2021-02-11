let url = 'http://127.0.0.1:8360/api/v1'

let request = {
  fetchArticleList: url + '/pub/article',         // 首页文章列表接口
  fetchArticleByIdApi: url + '/pub/article_byId/',     // 文章详情页，根据id查询文章接口
  fetchAllTagApi: url + '/pub/tag'     // 获取所有标签
}

export default request
