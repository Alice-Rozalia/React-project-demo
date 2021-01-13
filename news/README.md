# 新闻发布

## API文档

* 服务端已开启 CORS 跨域支持
* 接口基准地址：`http://127.0.0.1:8360`
* 数据返回格式统一使用 JSON

### 1.登录
- 请求路径：/user/login
- 请求方法：post
- 请求参数: 用户对象

**请求参数**:

| 参数名   | 参数说明 | 备注     |
| -------- | ------- | -------- |
| username | 用户名称 | 不能为空 |
| pwd      | 用户密码 | 不能为空 |

**响应示例**:
```javascript
{
  "success": false,
  "code": 999,
  "message": "用户名或密码错误！",
  "data": {}
}
```

### 2.板块列表

- 请求路径：/api/v1/pub/bk/list
- 请求方法：get

**接口描述**: 参数为空则查询所有的板块

**请求参数**:

| 参数名   | 参数说明 | 备注     |
| -------- | ------- | -------- |
| bid | 板块id | 可以为空 |

**响应示例**:
```javascript
{
  "success": true,
  "code": 200,
  "message": "请求成功！",
  "data": {
    "bks": [
      {
        "id": 1,
        "name": "国内"
      }
    ]
  }
}
```

### 3.新闻列表
- 请求路径：/api/v1/pub/news/list
- 请求方法：get

**接口描述**: 参数为空则查询所有的新闻

**请求参数**:

| 参数名   | 参数说明 | 备注     |
| -------- | ------- | -------- |
| key | 新闻标题关键字 | 可以为空 |
| page      | 当前页 | 可以为空 |
| rows      | 每页显示条数 | 可以为空 |

**响应示例**:
```javascript
{
  "success": true,
  "code": 200,
  "message": "请求成功！",
  "data": {
    "news": {
      "total": 6,
      "totalPage": null,
      "items": [
        {
          "id": 3,
          "title": "老公出轨，第三者得意洋洋，我花半年时间成功反扑",
          "source": "天涯论坛",
          "author": "八月未央不央",
          "editor": "编辑",
          "content": "...",
          "bkId": 1,
          "isTop": 0,
          "clickCount": 0,
          "bk": {
            "id": 1,
            "name": "国内"
          },
          "create_time": "2021-01-11 08:00:00"
        }
      ]
    }
  }
}
```

### 4.添加新闻
- 请求路径：/api/v1/pri/news/add
- 请求方法：post

**请求示例**:

```javascript
{
	"author": "",
	"bkId": 0,
	"content": "",
	"editor": "",
	"isTop": 0,
	"source": "",
	"title": ""
}
```

**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": "",
	"success": false
}
```

### 5.删除新闻
- 请求路径：/api/v1/pri/news/delete/{id}
- 请求方法：delete

**请求参数**:

| 参数名   | 参数说明 | 备注     |
| -------- | ------- | -------- |
| id      | 新闻id | 不能为空 |

**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": "",
	"success": false
}
```

### 6.修改新闻
- 请求路径：/api/v1/pri/news/edit
- 请求方法：put

**请求示例**:


```javascript
{
  "id": 0,
	"author": "",
	"bkId": 0,
	"content": "",
	"editor": "",
	"isTop": 0,
	"source": "",
	"title": ""
}
```

**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"message": "",
	"success": false
}
```

### 7.首页新闻
- 请求路径：/api/v1/pub/news/bk
- 请求方法：get

**请求参数**:

| 参数名   | 参数说明 | 备注     |
| -------- | ------- | -------- |
| bid      | 板块id | 可以为空 |

**响应示例**:
```javascript
{
  "success": true,
  "code": 200,
  "message": "请求成功！",
  "data": {
    "index": [
      {
        "id": 3,
        "name": "娱乐",
        "xinwens": [
          {
            "id": 4,
            "title": "重庆合川钓鱼城记",
            "source": "天涯论坛",
            "author": "罗锡文",
            "editor": null,
            "content": "...",
            "bkId": 3,
            "isTop": 0,
            "clickCount": 0,
            "create_time": "2021-01-13 12:14:45"
          }
        ]
      }
    ]
  }
}
```

### 8.查找新闻
- 请求路径：/api/v1/pub/news/detail/{id}
- 请求方法：get

**请求参数**:

| 参数名   | 参数说明 | 备注     |
| -------- | ------- | -------- |
| id      | 新闻id | 不能为空 |

**响应示例**:
```javascript
{
  "success": false,
  "code": 999,
  "message": "该篇新闻不存在！",
  "data": {}
}
```
