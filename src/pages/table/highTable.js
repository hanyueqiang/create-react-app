import React from 'react'
import { Card, Table, Modal, Button, message, Badge } from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'

export default class HighTable extends React.Component {

    state = {

    }
    params = {
        page: 1
    }
    componentDidMount() {
        this.request();
    }

    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/high/list',
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
                    dataSource: res.result.list,
                })
            }
        })
    }

    handleChange = (pagination, filter, sorter) => {
        console.log(sorter)
        this.setState({
            sortOrder : sorter.order
        })
    }
    handleDelete = (item) => {
        let id = item.id;
        Modal.confirm({
            title: '确认',
            content:'确认删除此条数据?',
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    }


    render() {
        const columns = [
            {
                title: 'id',
                width: 80,
                dataIndex: 'id',
            },
            {
                title: '用户名',
                width: 80,
                dataIndex: 'username'
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                width: 80,
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
                width: 80,
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
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            }
        ]

        const columns2 = [
            {
                title: 'id',
                width: 80,
                fixed: 'left',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                width: 80,
                fixed: 'left',
                dataIndex: 'username'
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                width: 80,
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
                width: 80,
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
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
        ]

        const columns3 = [
            {
                title: 'id',
                width: 80,
                dataIndex: 'id',
            },
            {
                title: '用户名',
                width: 80,
                dataIndex: 'username'
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                width: 80,
                dataIndex: 'age',
                sorter: (a,b) => {
                    return a.age - b.age;
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '状态',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1' : <Badge status='success' text='成功'/>,
                        '2' : <Badge status='error' text='失败'/>,
                        '3' : <Badge status='default' text='正常'/>,
                        '4' : <Badge status='processing' text='进行中'/>,
                        '5' : <Badge status='warning' text='警告'/>
                        }
                    return config[state]
                }
            },
            {
                title: '爱好',
                width: 80,
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
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '操作',
                width: 120,
                render: (text, item) =>{
                    return <Button size='small' onClick= {(item) => {this.handleDelete(item)}}>删除</Button>
                }

            },
        ]
        return (
            <div>
                <Card title='头部固定'>
                    <Table
                        bordered
                        columns = { columns }
                        dataSource = { this.state.dataSource }
                        pagination = { false }
                        scroll =  {{ y : 240 }}

                    />
                </Card>
                <Card title='左侧固定' style={{marginTop:10}}>
                    <Table
                        bordered
                        columns={ columns2 }
                        dataSource={ this.state.dataSource }
                        pagination= { false }
                        scroll =  {{ x : 1730 }}
                    />
                </Card>
                <Card title='表格排序'>
                    <Table
                        bordered
                        columns = { columns3 }
                        dataSource = { this.state.dataSource }
                        pagination = { false }
                        scroll =  {{ y : 240 }}
                        onChange = { this.handleChange }


                    />
                </Card>
                <Card title='操作按钮'>
                    <Table
                        bordered
                        columns = { columns3 }
                        dataSource = { this.state.dataSource }
                        pagination = { false }
                        scroll =  {{ y : 240 }}
                        onChange = { this.handleChange }


                    />
                </Card>

            </div>
        )
    }
}