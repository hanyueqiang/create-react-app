import React from 'react';
import { Card } from 'antd';
//import echartsTheme from './../echartTheme'
// import echarts from 'echarts/lib/echarts'

// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/legend'
// import 'echarts/lib/component/markPoint'
// import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts'
export default class Bar extends React.Component {

    componentDidMount() {
        let myChart = echarts.init(document.getElementById('charts'));
        myChart.setOption({
            title: {
                text: '骑行订单'
            },
            tooltip: {},
            xAxis: {
                data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
            },
            yAxis: {},
            series: [{
                name: '数量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 25]
            }]
        });
        //echarts.registerTheme('Bike', echartsTheme);
    }
    getOptions = () => {
        let option = {
            title: {
                text: '骑行订单'
            },
            xAxis : {
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis : {
                type : 'value'
            },
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        return option
    }
    render() {
        return(
            <Card title='柱形图表1'>
                <div id="charts" style={{height:400}}></div>
            </Card>
        )
    }
}