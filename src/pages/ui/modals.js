import React from 'react'
import {Card, Button, Modal} from 'antd'
import './ui.less'

export default class Modals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModals1: false,
            showModals2: false,
            showModals3: false,
            showModals4: false
        }
    }

    handleOpen = (type)=>{
        this.setState({
            [type]: true
        })
    }
    handleConfirm = (type)=>{
        Modal[type]({
            title: type,
            content: '你确认此条信息？',
            onOk() {
                console.log('ok')
            },
            onCancel() {
                console.log('cancel')
            }
        })
    }

    render() {
        return(
            <div>
                <Card className='card-wrap' title='基础模态框'>
                    <Button type='primary' onClick={()=>{this.handleOpen('showModals1')}}>Open</Button>
                    <Button type='primary' onClick={()=>{this.handleOpen('showModals2')}}>自定义页脚</Button>
                    <Button type='primary' onClick={()=>{this.handleOpen('showModals3')}}>顶部20px弹窗</Button>
                    <Button type='primary' onClick={()=>{this.handleOpen('showModals4')}}>水平垂直居中</Button>
                </Card>
                <Card className='card-wrap' title='信息确认框'>
                    <Button type='primary' onClick={()=>{this.handleConfirm('confirm')}}>Confirm</Button>
                    <Button type='primary' onClick={()=>{this.handleConfirm('info')}}>Info</Button>
                    <Button type='primary' onClick={()=>{this.handleConfirm('success')}}>Success</Button>
                    <Button type='primary' onClick={()=>{this.handleConfirm('warning')}}>Warning</Button>
                </Card>
                <Modal
                    title='Bike Manage'
                    visible={this.state.showModals1}
                    onCancel={()=>{
                        this.setState({
                            showModals1: false
                        })
                    }}
                >
                    <p>欢迎进入Bike manage 后台管理系统！</p>
                </Modal>
                <Modal
                    title='Bike Manage'
                    okText='好的'
                    cancelText='算了'
                    style={{top:20}}
                    visible={this.state.showModals2}
                    onCancel={()=>{
                        this.setState({
                            showModals2: false
                        })
                    }}
                >
                    <p>欢迎进入Bike manage 后台管理系统！</p>
                </Modal>
            </div>
        );
    }
}