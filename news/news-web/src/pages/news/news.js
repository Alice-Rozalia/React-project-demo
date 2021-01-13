import React, {Component} from 'react';
import {Card, Table, Button, Modal, message, Form, Input, Select, Pagination} from "antd";
import {PlusOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import {fetchNewsApi, deleteNewsByIdApi, addNewsApi, updateNewsApi} from '@/api/news'
import {fetchBksApi} from "@/api/bk";

export default class News extends Component {

    state = {
        news: [],
        query: {
            page: 1,
            rows: 8
        },
        total: 0,
        statusVisible: 0,
        bks: [],
        updateNews: {}
    };

    getNews = async params => {
        const {data} = await fetchNewsApi(params || this.state.query);
        if (data.success) {
            this.setState({
                news: data.data.news.items,
                total: data.data.news.total
            });
        }
    };

    getBkList = async () => {
        const {data} = await fetchBksApi();
        if (data.success) {
            this.setState({
                bks: data.data.bks
            });
        }
    };

    deleteNews = async val => {
        Modal.confirm({
            title: '你确定要删除如下条新闻吗？',
            icon: <ExclamationCircleOutlined/>,
            content: val.title,
            onOk: async () => {
                const {data} = await deleteNewsByIdApi(val.id)
                if (data.success) {
                    message.success("删除成功！");
                    this.getNews();
                }
            },
            onCancel() {
                message.info("删除操作已取消！");
            },
            cancelText: "取消",
            okText: "删除"
        });
    };

    handleCancel = () => {
        this.setState({
            statusVisible: 0
        });
    };

    showAddNews = () => {
        this.getBkList();
        this.setState({
            statusVisible: 1
        });
    };

    addNews = async value => {
        const {data} = await addNewsApi(value);
        if (data.success) {
            message.success("新闻添加成功！");
            this.handleCancel();
            this.getNews();
        }
    };

    showUpdateVisible = news => {
        this.getBkList();
        this.setState({
            statusVisible: 2,
            updateNews: news
        });
    };

    updateNews = async value => {
        value.id = this.state.updateNews.id;
        const {data} = await updateNewsApi(value);
        if (data.success) {
            message.success("新闻修改成功！");
            this.handleCancel();
            this.getNews();
        }
    };

    pageChange = (page, pageSize) => {
        this.getNews({page: page, rows: pageSize});
    };

    pageSizeChange = (current, size) => {
        this.getNews({page: current + 1, rows: size});
    };

    componentDidMount() {
        this.getNews();
    };

    render() {
        const columns = [
            {
                title: '新闻标题',
                dataIndex: 'title'
            },
            {
                title: '来源',
                dataIndex: 'source'
            },
            {
                title: '作者',
                dataIndex: 'author'
            },
            {
                title: '浏览',
                dataIndex: 'clickCount'
            },
            {
                title: '板块',
                dataIndex: ['bk', 'name']
            },
            {
                title: '创建时间',
                dataIndex: 'create_time',
                key: 'create_time'
            },
            {
                title: '操作',
                width: 140,
                render: item => (
                    <span>
                        <Button type="primary" size="small" onClick={this.showUpdateVisible.bind(this, item)}
                                style={{marginRight: '8px'}}>修改</Button>
                        <Button type="danger" size="small" onClick={this.deleteNews.bind(this, item)}>删除</Button>
                    </span>
                )
            }
        ];

        const {news, statusVisible, bks, updateNews, total, query} = this.state;

        return (
            <Card title="新闻列表"
                  extra={<Button type="primary" onClick={this.showAddNews.bind(this)}
                                 icon={<PlusOutlined/>}>添加新闻</Button>}>
                <Table
                    bordered={true}
                    rowKey="id"
                    dataSource={news}
                    columns={columns}
                    pagination={false}
                />
                <Pagination
                    showQuickJumper showSizeChanger
                    pageSizeOptions={[3, 5, 8, 12]}
                    showTotal={total => ("共" + total + "条")}
                    defaultPageSize={query.rows}
                    defaultCurrent={query.page} total={total}
                    onChange={this.pageChange}
                    onShowSizeChange={this.pageSizeChange}
                    style={{marginTop: 25}}
                />

                <Modal title="添加新闻" cancelText="取消" okText="添加" width={750} visible={statusVisible === 1}
                       onCancel={this.handleCancel} footer={null}>
                    <Form onFinish={this.addNews}>
                        <Form.Item label="标题" name="title" rules={[
                            {
                                required: true,
                                message: '标题不能为空！'
                            }
                        ]}>
                            <Input placeholder="请输入新闻标题"/>
                        </Form.Item>
                        <Form.Item label="来源" name="source" rules={[
                            {
                                required: true,
                                message: '来源不能为空！'
                            }
                        ]}>
                            <Input placeholder="请输入新闻的来源，如百度网，原创等"/>
                        </Form.Item>
                        <Form.Item label="作者" name="author" rules={[
                            {
                                required: true,
                                message: '作者不能为空！'
                            }
                        ]}>
                            <Input placeholder="请输入新闻作者"/>
                        </Form.Item>
                        <Form.Item label="板块" name="bkId" rules={[
                            {
                                required: true,
                                message: '板块不能为空！'
                            }
                        ]}>
                            <Select placeholder="请选择新闻所属的板块">
                                {
                                    bks.map(item => {
                                        return (
                                            <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label="正文" name="content" rules={[
                            {
                                required: true,
                                message: '正文不能为空！'
                            }
                        ]}>
                            <Input.TextArea rows={7} showCount={true}/>
                        </Form.Item>
                        <Form.Item>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <Button onClick={this.handleCancel.bind(this)}>取消</Button>
                                <Button type="primary" htmlType="submit" style={{marginLeft: 30}}>添加</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </Modal>

                <Modal title="修改新闻" cancelText="取消" okText="添加" width={750} visible={statusVisible === 2}
                       onCancel={this.handleCancel} footer={null}>
                    <Form onFinish={this.updateNews}
                          initialValues={{
                              title: updateNews.title,
                              source: updateNews.source,
                              author: updateNews.author,
                              bkId: updateNews.bkId,
                              content: updateNews.content
                          }}>
                        <Form.Item label="标题" name="title" rules={[
                            {
                                required: true,
                                message: '标题不能为空！'
                            }
                        ]}>
                            <Input placeholder="请输入新闻标题"/>
                        </Form.Item>
                        <Form.Item label="来源" name="source" rules={[
                            {
                                required: true,
                                message: '来源不能为空！'
                            }
                        ]}>
                            <Input placeholder="请输入新闻的来源，如百度网，原创等"/>
                        </Form.Item>
                        <Form.Item label="作者" name="author" rules={[
                            {
                                required: true,
                                message: '作者不能为空！'
                            }
                        ]}>
                            <Input placeholder="请输入新闻作者"/>
                        </Form.Item>
                        <Form.Item label="板块" name="bkId" rules={[
                            {
                                required: true,
                                message: '板块不能为空！'
                            }
                        ]}>
                            <Select placeholder="请选择新闻所属的板块">
                                {
                                    bks.map(item => {
                                        return (
                                            <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label="正文" name="content" rules={[
                            {
                                required: true,
                                message: '正文不能为空！'
                            }
                        ]}>
                            <Input.TextArea rows={7} showCount={true}/>
                        </Form.Item>
                        <Form.Item>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <Button onClick={this.handleCancel.bind(this)}>取消</Button>
                                <Button type="primary" htmlType="submit" style={{marginLeft: 30}}>修改</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </Modal>
            </Card>
        );
    }
}