import React from "react"
import { Menu, Icon } from 'antd';
import logo from '../../logo.svg';
import menuConfig from './../../config/menuConfig'
import './index.less'
import { NavLink } from 'react-router-dom'

const SubMenu = Menu.SubMenu;


export default class NavLeft extends React.Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuConfig);
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
                this.renderMenu(item.children);
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={ item.key }>{ item.title }</NavLink></Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className='logo'>
                    <img src={logo} alt='' />
                    <h1>Bike MS</h1>
                </div>
                <Menu theme='dark'>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}