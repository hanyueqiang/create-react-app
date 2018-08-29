import React from 'react'
import { Card, Button, Radio, notification } from 'antd'
import './ui.less'

export default class Notice extends React.Component {

    openNotice = (type, direction) => {
        if(direction) {
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message:'发工资了',
            description:'上个月考勤22天，迟到1天，工资已到账，请笑纳！'
        })
    }

    render() {
        return (
            <div>
                <Card title='通知提醒框' className='card-wrap'>
                    <Button type='primary' onClick={()=>this.openNotice('success')}>success</Button>
                    <Button type='primary' onClick={()=>this.openNotice('info','topLeft')}>info</Button>
                    <Button type='primary' onClick={()=>this.openNotice('warning')}>warning</Button>
                    <Button type='primary' onClick={()=>this.openNotice('error')}>error</Button>
                </Card>
            </div>
        );
    }
}