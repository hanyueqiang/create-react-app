import React from 'react'
import { Card, Table } from 'antd'
export default class BasicTable extends React.Component{
    state= {
        dataSource2: []
    }
    componentDidMount() {
        console.log(123456)
        const dataSource = [
            {
                id:'0',
                userName: 'jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2010-01-08',
                address: '北京市西城区'
            },
            {
                id:'1',
                userName: 'jack',
                sex: '2',
                state: '2',
                interest: '2',
                birthday: '2010-01-08',
                address: '北京市大兴区'
            },
            {
                id:'2',
                userName: 'jack',
                sex: '3',
                state: '3',
                interest: '3',
                birthday: '2010-01-08',
                address: '北京市朝阳区'
            },
        ]
        this.setState({
            dataSource
        })
    }

    render() {
        console.log(111)
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            }
        ]
        return(
            <div>
                <Card title='基础表格'>
                    <Table
                        bordered
                        columns={ columns }
                        dataSource={ this.state.dataSource }
                        pagination= { false }
                    />
                </Card>
                <Card title='动态数据表格' style={{marginTop:10}}>
                    <Table
                        bordered
                        columns={ columns }
                        dataSource={ this.state.dataSource2 }
                        pagination= { false }
                    />
                </Card>
                 
            </div>
        )
    }
}