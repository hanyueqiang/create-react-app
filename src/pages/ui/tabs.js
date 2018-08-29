import React from 'react'
import { Card, Button, Tabs, message, Icon } from 'antd'
import './ui.less'

export default class Itabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleCallback = (key)=> {
        message.info('hi,你选择了' + key)
    }
    onChange = (activeKey)=> {
        this.setState({
            activeKey
        })
    }

    componentWillMount() {
        const panes = [
            {
                title: 'tab 1',
                content: 'tab 1',
                key: '1'
            },
            {
                title: 'tab 2',
                content: 'tab 2',
                key: '2'
            },
            {
                title: 'tab 3',
                content: 'tab 3',
                key: '3'
            },
        ]
        this.setState({
            panes
        })
    }
    render() {
        return (
            <div>
                <Card title='Tab页签' className='card-wrap'>
                    <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
                        <Tabs.TabPane tab='tab 1' key='1'>conent of tab one</Tabs.TabPane>
                        <Tabs.TabPane tab='tab 2' disabled key='2'>conent of tab two</Tabs.TabPane>
                        <Tabs.TabPane tab='tab 3' key='3'>conent of tab three</Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card title='Tab带图页签' className='card-wrap'>
                    <Tabs defaultActiveKey='1' onChange={this.handleCallback}>
                        <Tabs.TabPane tab={<span><Icon type='edit'></Icon>编辑</span>} key='1'>conent of tab one</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type='delete'></Icon>删除</span>} key='2'>conent of tab two</Tabs.TabPane>
                        <Tabs.TabPane tab='tab 3' key='3'>conent of tab three</Tabs.TabPane>
                    </Tabs>
                </Card>
                <Card title='Tab带图页签' className='card-wrap'>
                    <Tabs 
                        onChange={this.onChange}
                        defaultActiveKey='1' 
                        onChange={this.handleCallback}
                        type='editable-card'
                    >

                        {
                            this.state.panes.map((panel)=>{
                                return <Tabs.TabPane 
                                    tab={panel.title}
                                    key={panel.key}
                                />
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}