import React from 'react'
import {Card, Button, Spin, Alert, Icon} from 'antd'
import './ui.less'
export default class Loading extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const icon = <Icon type='loading' style={{fontSize: 24}} />
        return(
            <div>
                <Card title='Spin用法' className='card-wrap'>
                    <Spin size='small'></Spin>
                    <Spin style={{margin:'0 10px'}}></Spin>
                    <Spin size='large'></Spin>
                    <Spin indicator={icon} style={{marginLeft:10}}></Spin>
                </Card>
                <Card title='内容遮罩' className='card-wrap'>
                    <Alert
                        message='Bike'
                        description='欢迎来到Bike Manage 管理系统'
                        type='info'
                    />
                    <Spin>
                        <Alert
                            message='Bike'
                            description='欢迎来到Bike Manage 管理系统'
                            type='warning'
                        />
                    </Spin>
                    <Spin tip='加载中...'>
                        <Alert
                            message='Bike'
                            description='欢迎来到Bike Manage 管理系统'
                            type='info'
                        />
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert
                            message='Bike'
                            description='欢迎来到Bike Manage 管理系统'
                            type='info'
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}