import React, {Component} from 'react';
import "./home.less";
import echarts from "echarts/lib/echarts";
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';

export default class Home extends Component {

    componentDidMount() {
        (function () {
            // 1.实例化对象
            let myChart = echarts.init(document.querySelector(".bar .chart"));
            // 2.指定配置项和数据
            let option = {
                color: ['#2f89cf'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                // 修改图表的大小
                grid: {
                    left: '0%',
                    top: '10px',
                    right: '0%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    // 修改x轴刻度标签的相关样式
                    axisLabel: {
                        color: "rgba(255, 255, 255, .6)",
                        fontSize: "12"
                    },
                    // 不显示x坐标轴的线
                    axisLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    type: 'value',
                    // 修改y轴刻度标签的相关样式
                    axisLabel: {
                        color: "rgba(255, 255, 255, .6)",
                        // 数字的双引号可加可不加
                        fontSize: 12
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255, 255, 255, .1)",
                            width: 2
                        }
                    },
                    // y轴分割线的颜色
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255, 255, 255, .1)",
                        }
                    }
                }],
                series: [{
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '35%',
                    data: [200, 300, 300, 900, 1500, 1200, 600],
                    itemStyle: {
                        // 修改柱子的圆角
                        barBorderRadius: 5
                    }
                }]
            };
            // 3.把配置项给实例对象
            myChart.setOption(option);
            // 4.让图表自适应屏幕
            window.addEventListener("resize", function () {
                myChart.resize();
            })
        })();

        // 柱状图2
        (function() {
            let myColor = ["#1089e7", "#f57474", "#56d0e3", "#f8b448", "#8b78f6"];
            let myChart = echarts.init(document.querySelector(".bar2 .chart"));
            let option = {
                grid: {
                    left: '15%',
                    top: '10%',
                    bottom: '10%',
                    // containLabel: false
                },
                xAxis: {
                    // 不显示x轴相关信息
                    show: false
                },
                yAxis: [{
                    type: 'category',
                    // 是否反向坐标
                    inverse: true,
                    data: ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'Node'],
                    // 不显示y轴线
                    axisLine: {
                        show: false
                    },
                    // 不显示y轴刻度
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: "#fff"
                    }
                }, {
                    data: ['702', '350', '610', '793', '664'],
                    inverse: true,
                    // 不显示y轴线
                    axisLine: {
                        show: false
                    },
                    // 不显示y轴刻度
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: "#fff"
                    }
                }],
                series: [{
                    name: '条',
                    type: 'bar',
                    data: [70, 34, 60, 78, 69],
                    yAxisIndex: 0,
                    // 修改第一组柱子的圆角
                    itemStyle: {
                        barBorderRadius: 20,
                        // 此时的color可以修改柱子的颜色
                        color: function(params) {
                            return myColor[params.dataIndex];
                        }
                    },
                    // 修改柱子之间的距离
                    barCategorGap: 50,
                    // 修改柱子的宽度
                    barWidth: 10,
                    // 显示柱子内的文字
                    label: {
                        show: true,
                        position: 'inside',
                        // {c}会自动解析为data内的数据
                        formatter: "{c}%"
                    }
                },
                    {
                        name: '框',
                        type: 'bar',
                        barCategorGap: 50,
                        barWidth: 15,
                        yAxisIndex: 1,
                        data: [100, 100, 100, 100, 100],
                        itemStyle: {
                            color: "none",
                            borderColor: "#00c1de",
                            borderWidth: 3,
                            barBorderRadius: 15
                        }
                    }
                ]
            };
            myChart.setOption(option);
            window.addEventListener("resize", function() {
                myChart.resize();
            })
        })();

        // 饼形图1
        (function() {
            let myChart = echarts.init(document.querySelector(".pie .chart"));
            let option = {
                color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    // 距离底部10%
                    bottom: "0%",
                    // 修改小图标的宽度和高度
                    itemWidth: 10,
                    itemHeight: 10,
                    textStyle: {
                        color: "rgba(255,255,255,.5)",
                        fontSize: 12
                    }
                },
                series: [{
                    name: '年龄分布',
                    type: 'pie',
                    // 40%跟60%分别代表内外圆的半径
                    radius: ['40%', '60%'],
                    center: ['50%', '45%'],
                    avoidLabelOverlap: false,
                    // 图形上的文字
                    label: {
                        show: false,
                        position: 'center'
                    },
                    // 链接文字和图形的线
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1, name: '20岁以下' },
                        { value: 4, name: '20-29岁' },
                        { value: 2, name: '30-39岁' },
                        { value: 2, name: '40-49岁' },
                        { value: 1, name: '50岁以上' }
                    ]
                }]
            };
            myChart.setOption(option);
            window.addEventListener("resize", function() {
                myChart.resize();
            })
        })();

        // 饼形图2
        (function() {
            let myChart = echarts.init(document.querySelector(".pie2 .chart"));
            let option = {
                color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#9fe6b8', '#32c5e9', '#1d9dff'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    bottom: "0%",
                    itemHeight: 10,
                    itemWidth: 10,
                    textStyle: {
                        color: "rgba(255,255,255,.5)",
                        fontSize: 12
                    }
                },
                series: [{
                    name: '地区分布',
                    type: 'pie',
                    radius: ['10%', '70%'],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    // 图形的文字标签
                    label: {
                        fontSize: 10
                    },
                    // 修改链接图形和文字的线的长度
                    labelLine: {
                        // length是链接图形的线条
                        length: 6,
                        // length2是链接文字的线条
                        length2: 8
                    },
                    data: [
                        { value: 20, name: '云南' },
                        { value: 26, name: '北京' },
                        { value: 24, name: '广西' },
                        { value: 25, name: '山东' },
                        { value: 20, name: '江苏' },
                        { value: 25, name: '浙江' },
                        { value: 30, name: '四川' },
                        { value: 42, name: '广东' }
                    ]
                }]
            };
            myChart.setOption(option);
            window.addEventListener("resize", function() {
                myChart.resize();
            })
        })();
    };

    render() {
        return (
            <div className="home">
                <div className="column">
                    <div className="panel bar">
                        <h2>柱状图-就业行业</h2>
                        <div className="chart"></div>
                        <div className="panel-footer"></div>
                    </div>
                    <div className="panel pie">
                        <h2>饼形图-年龄分布</h2>
                        <div className="chart"></div>
                        <div className="panel-footer"></div>
                    </div>
                </div>
                <div className="column">
                    <div className="panel bar2">
                        <h2>柱状图-技能掌握</h2>
                        <div className="chart"></div>
                        <div className="panel-footer"></div>
                    </div>
                    <div className="panel pie2">
                        <h2>饼形图-地区分布</h2>
                        <div className="chart"></div>
                        <div className="panel-footer"></div>
                    </div>
                </div>
            </div>
        );
    }
}
