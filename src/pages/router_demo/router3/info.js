import React from 'react'

export default class Info extends React.Component{
    render() {
        return (
            <div>
                this is info 动态路由功能
                动态路由：{this.props.match.params.value}
            </div>
        )
    }

}