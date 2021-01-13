import React, {Component} from 'react';
import "./detail.less"
import { PageHeader } from 'antd';
import {fetchNewsByIdApi} from "@/api/news";

class Detail extends Component {

    state = {
        news: {}
    };

    getNewsById = async () => {
        const {data} = await fetchNewsByIdApi(this.props.match.params.id);
        if (data.success) {
            this.setState({
                news: data.data.news
            });
        }
    };

    componentDidMount() {
        this.getNewsById();
    };

    render() {
        const {title, author, clickCount, source, create_time, content} = this.state.news;

        return (
            <div className="detail-container">
                <div>
                    <PageHeader
                        className="site-page-header"
                        onBack={() => this.props.history.push("/")}
                        title="首页"
                    />
                </div>
                <h1 className="title">{title}</h1>
                <div className="menu-tab">
                    <span>作者：{author}</span>
                    <span>浏览：{clickCount}</span>
                    <span>来源：{source}</span>
                    <span>创建时间：{create_time}</span>
                </div>
                <div>
                    {content}
                </div>
            </div>
        );
    }
}

export default Detail;