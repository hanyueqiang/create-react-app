import React from 'react'
import {Card, Form, Divider} from 'antd'
import axios from './../../axios'
import BaseForm from './../../components/BaseForm'

export default class BikeMap extends React.Component {
    formList = [
        {
            type:'城市'
        },
        {
            type:'时间查询'
        },
        {
            type:'SELECT',
            label:'订单状态',
            field:'order_status',
            placeholder: '全部',
            initialValue:'0',
            list:[{id: '0',name:'全部'},{id:'1',name:'进行中'}]
        }
    ]
    handleSubmit = () => {

    }

    render() {
        return(
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleSubmit}/>
                </Card>
                <Card>
                </Card>
            </div>
        )
    }
}
