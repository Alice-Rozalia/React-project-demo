import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {List, Input} from 'antd';
import "./index.less";
import {fetchBksApi} from "@/api/bk";
import {fetchNewsByBkApi} from '@/api/news'

class Index extends Component {

    state = {
        bks: [],
        news: []
    };

    getBkList = async () => {
        const {data} = await fetchBksApi();
        if (data.success) {
            this.setState({
                bks: data.data.bks
            });
        }
    };

    getNewsList = async bid => {
        const {data} = await fetchNewsByBkApi(bid);
        if (data.success) {
            this.setState({
                news: data.data.index
            });
        }
    };

    componentDidMount() {
        this.getBkList();
        this.getNewsList();
    };

    render() {
        return (
            <div className="container">
                <div className="search-container">
                    <Input placeholder="搜索" onClick={() => this.props.history.push("/search")}/>
                </div>
                <ul className="nav">
                    <li onClick={() => {
                        this.getNewsList()
                    }}>首页
                    </li>
                    {
                        this.state.bks.map(bk => {
                            return (
                                <li onClick={() => {
                                    this.getNewsList(bk.id)
                                }} key={bk.id}>{bk.name}</li>
                            )
                        })
                    }
                </ul>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {
                        this.state.news.map((item, index) => {
                            return (
                                <List
                                    header={<div>{item.name}</div>}
                                    bordered
                                    key={index + item.name}
                                    style={{width: '490px', marginBottom: 15}}
                                    dataSource={item.xinwens}
                                    renderItem={(n, i) => (
                                        <List.Item key={n.id + n.title}>
                                            <Link to={"/detail/" + n.id}>{(i + 1) + "、"}{n.title}</Link>
                                        </List.Item>
                                    )}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Index;