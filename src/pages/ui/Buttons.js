import React from 'react'
import { Card, Button, Radio} from 'antd'
import './ui.less'

export default class Buttons extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    handleCloseLoading = ()=>{
        this.setState({
            loading: !this.state.loading
        })
    }

    handleChange = (e)=> {
        this.setState({
            size: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Card title='基础按钮' className='card-wrap'>
                    <Button type='primary'>BIke</Button>
                    <Button>BIke</Button>
                    <Button type='dashed'>BIke</Button>
                    <Button type='danger'>BIke</Button>
                    <Button disabled>BIke</Button>
                </Card>
                <Card title='图形按钮' className='card-wrap'>
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type='primary' icon='search'>搜索</Button>
                    <Button type='primary' icon='download'>下载</Button>
                </Card>
                <Card title='loading按钮' className='card-wrap'>
                    <Button type='primary' loading={this.state.loading}>确定</Button>
                    <Button type='primary' loading={this.state.loading} shape='circle'></Button>
                    <Button  loading={this.state.loading}>点击加载</Button>
                    <Button loading={this.state.loading} shape='circle'></Button>
                    <Button type='primary' onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title='按钮组' style={{marginBottom: 10}}>
                    <Button.Group>
                        <Button icon='left'>返回</Button>
                        <Button icon='right'>前进</Button>
                    </Button.Group>
                </Card>
                <Card title='按钮尺寸' className='card-wrap'>
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    <Button type='primary' size={this.state.size}>BIke</Button>
                    <Button  size={this.state.size}>BIke</Button>
                    <Button type='dashed'  size={this.state.size}>BIke</Button>
                    <Button type='danger'  size={this.state.size}>BIke</Button>
                    <Button disabled  size={this.state.size}>BIke</Button>
                </Card>
            </div>
        )
    }

}