import React from 'react'
import { Row, Col } from 'antd';
import './index.less'
import Utils from './../../utils/utils'
import axios from './../../axios'
export default class Header extends React.Component{
    state = {}
    componentWillMount() {
        this.setState({
            userName: '韩月强'
        })
        setInterval(()=>{
            let sysTime = Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
        //this.getWeatherApIData()
    }
    getWeatherApIData() {
        let city = '北京';
        axios.JsonP({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=sOABke7O34MA1Ts2WZw2yclGCOk131U8'
        }).then((res)=>{
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }

    render() {
        return(
            <div className='header'>
                <Row className='header-top'>
                    <Col span='24'>
                        <span>欢迎, {this.state.userName}</span>
                        <a href='#'>退出</a>
                    </Col>
                </Row>
                <Row className='breadCrumb'>
                    <Col span='4' className='breadCrumb-title'>
                        首页
                    </Col>
                    <Col span='20' className='weather'>
                        <span className='date'>{this.state.sysTime}</span>
                        <span className='weather-img'>
                            <img src={this.state.dayPictureUrl} alt=''/>
                        </span>
                        <span className='weather-detail'>
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}