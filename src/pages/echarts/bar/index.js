import React from 'react';
import { Card } from 'antd';
import echartsTheme from './../echartTheme'
import echarts from 'echarts/lib/echarts'
export default class Bar extends React.Component {

    componentDidMount() {
        echarts.registerTheme('Bike', echartsTheme);
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
                
            </Card>
        )
    }
}