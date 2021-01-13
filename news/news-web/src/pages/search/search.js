import React, {Component} from 'react';
import "./search.less";
import {Input, message, PageHeader, List} from "antd";
import {fetchNewsApi} from '@/api/news'
import {Link} from "react-router-dom";

const {Search} = Input;

export default class SearchPage extends Component {

    state = {
        news: [],
        total: 0
    };

    searchNews = async value => {
        const {data} = await fetchNewsApi({key: value});
        if (data.success) {
            if (data.data.news.total === 0) {
                return message.info("查询结果为0");
            }
            this.setState({
                news: data.data.news.items,
                total: data.data.news.total
            });
        }
    };

    render() {
        return (
            <div className="main">
                <div>
                    <PageHeader
                        className="site-page-header"
                        onBack={() => this.props.history.push("/")}
                        title="首页"
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: 30}}>
                    <div className="search-box">
                        <Search
                            placeholder="根据新闻标题搜索"
                            enterButton="搜索"
                            onSearch={this.searchNews.bind(this)}
                            allowClear={true}
                        />
                    </div>
                </div>
                <div>
                    <List
                        size="small"
                        header={<div>查询到：{this.state.total} 条新闻</div>}
                        bordered
                        dataSource={this.state.news}
                        renderItem={(item, index) => (
                            <List.Item>
                                <Link to={"/detail/" + item.id}>{(index + 1) + "、"}{item.title}</Link>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}