import React from 'react'
import { Card, Table, Modal, Button, message } from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils';
export default class BasicTable extends React.Component{
    state= {
        dataSource2: []
    }
    params = {
        page: 1
    }
    componentDidMount() {
        const dataSource = [
            {
                id:'0',
                username: 'jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2010-01-08',
                address: '北京市西城区'
            },
            {
                id:'1',
                username: 'jack',
                sex: '2',
                state: '2',
                interest: '2',
                birthday: '2010-01-08',
                address: '北京市大兴区'
            },
            {
                id:'2',
                username: 'jack',
                sex: '3',
                state: '3',
                interest: '3',
                birthday: '2010-01-08',
                address: '北京市朝阳区'
            },
        ]
        dataSource.map((item, index) => {
            item.key = index;
        })
        this.setState({
            dataSource
        })
        this.request();
    }

    //动态获取mock数据
    // request = () => {
    //     axios.get('./table/list').then((res) => {
    //         if(res.status == '200' && res.data.code == '0') {
    //             this.setState({
    //                 dataSource2: res.data.result
    //             })
    //         }
    //     })
    // }
    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/list1',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            if(res.code == 0) {
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource2: res.result.list,
                    selectedRowKeys: [],
                    selectedRows: null,
                    pagination: Utils.pagination(res, (current) => {
                        //to-do
                        _this.params.page = current
                        this.request()
                    })
                })
            }
        })
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }

    handleDelete = (() => {
        // if(!this.state.selectedRows || this.state.selectedRows.length ==0 ) {
        //     message.info('暂无可删除数据！')
        //     return
        // }
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item) =>{
            ids.push(item.id)
        })
        Modal.confirm({
            title: '删除显示',
            content: `您确定删除这些数据吗？${ids.join(',')}`,
            onOk: () => {
                message.success('删除成功！');
                this.request()
            }
        })

    })

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1' : '研究生',
                        '2' : '大学生',
                        '3' : '高中生',
                        '4' : '博士生',
                        '5' : '中学生'
                        }
                    return config[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1' : '篮球',
                        '2' : '足球',
                        '3' : '羽毛球',
                        '4' : '爬山',
                        '5' : '游泳',
                        '6' : '看书',
                        '7' : '排球',
                        '8' : '电子游戏'
                        }
                    return config[interest]
                }
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
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                let ids = []
                selectedRows.map((item) =>{
                    ids.push(item.id)
                })
                this.setState({
                    selectedRowKeys,
                    selectedIds: ids
                })
            }
        }

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
                <Card title='动态数据表格-easy-mock' style={{marginTop:10}}>
                    <Table
                        bordered
                        columns={ columns }
                        dataSource={ this.state.dataSource2 }
                        pagination= { false }
                    />
                </Card>
                <Card title='单选-easy-mock' style={{marginTop:10}}>
                    <Table
                        bordered
                        rowSelection = { rowSelection }
                        onRow = { (record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            }
                        }

                        }
                        columns={ columns }
                        dataSource={ this.state.dataSource2 }
                        pagination= { false }
                    />
                </Card>
                <Card title='多选-easy-mock' style={{marginTop:10}}>
                    <div style={{marginBottom:10}}>
                        <Button onClick={ this.handleDelete }>Delete</Button>
                    </div>
                    <Table
                        bordered
                        rowSelection = { rowCheckSelection }
                        onRow = { (record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            }
                        }
                        }
                        columns={ columns }
                        dataSource={ this.state.dataSource2 }
                        pagination= { false }
                    />
                </Card>
                <Card title='分页-easy-mock' style={{marginTop:10}}>
                    <Table
                        bordered
                        columns={ columns }
                        dataSource={ this.state.dataSource2 }
                        pagination= { this.state.pagination }
                    />
                </Card>
                 
            </div>
        )
    }
}