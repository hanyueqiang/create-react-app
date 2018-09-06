import React from 'react'
import {Card, Form, Button, message, Input, Checkbox, Radio, Select, DatePicker, TimePicker, Switch, Upload, Icon, InputNumber } from 'antd'
import moment from 'moment';
const FormItem = Form.Item;
const RadioGruop = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends React.Component{
    state={}

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(JSON.stringify(userInfo))
        message.success(`${userInfo.userName}恭喜你，你通过了了,当前密码为${userInfo.userPwd}`)

    }

    getBase64= (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange= (info) => {
        if(info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if(info.file.status === 'done') {
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg:imageUrl,
                loading: false
            }));
        }

    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return(
            <div>
                <Card title='注册表单'>
                    <Form layout='horizontal'>
                        <FormItem label='用户名' {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder='请输入用户名'/>
                                )
                            } 
                        </FormItem>
                        <FormItem label='密码'  {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input type='password' placeholder='请输入用户名'/>
                                )
                            }
                        </FormItem>
                        <FormItem label='性别'  {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                })(
                                    <RadioGruop>
                                        <Radio value='1'>男</Radio>
                                        <Radio  value='2'>女</Radio>
                                    </RadioGruop>
                                )
                            }
                        </FormItem>
                        <FormItem label='年龄'  {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18,
                                })(
                                    <InputNumber/>
                                )
                            }
                        </FormItem>
                        <FormItem label='当前状态'  {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '2',
                                })(
                                    <Select>
                                        <Option value='1'>百度</Option>
                                        <Option value='2'>阿里巴巴</Option>
                                        <Option value='3'>腾讯</Option>
                                        <Option value='4'>京东</Option>
                                        <Option value='5'>字节跳动</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='爱好'  {...formItemLayout}>
                            {
                                getFieldDecorator('interset', {
                                    initialValue: ['2', '5']
                                })(
                                    <Select mode='multiple'>
                                        <Option value='1'>游泳</Option>
                                        <Option value='2'>篮球</Option>
                                        <Option value='3'>跑步</Option>
                                        <Option value='4'>健身</Option>
                                        <Option value='5'>爬山</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='是否已婚'  {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>
                        <FormItem label='生日'  {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2018-09-12')
                                })(
                                    <DatePicker
                                        showTime
                                        format = 'YYYY-MM-DD HH:mm:ss'
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label='联系地址'  {...formItemLayout}>
                            {
                                getFieldDecorator('address',{
                                    initialValue:'北京市西城区宣武门西大街'
                                })(
                                    <TextArea
                                        autosize={
                                            {
                                                minRows:4,maxRows:6
                                            }
                                        }
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label='早期时间'  {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker/>
                                )
                            }
                        </FormItem>
                        <FormItem label='头像'  {...formItemLayout}>
                            {
                                getFieldDecorator('upload')(
                                   <Upload
                                        listType='picture-card'
                                        showUploadList = {false}
                                        action='//jsonplaceholder.typicode.com/posts/'
                                        onChange = {this.handleChange}
                                    >
                                        {this.state.userImg ? <img src={this.userImg}/> : <Icon type='plus'/>}
                                   </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >
                            {
                                getFieldDecorator('userImg')(
                                   <Checkbox>我已经阅读过<a href='#'>此协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >
                            <Button
                                type='primary'
                                onClick={this.handleSubmit}
                            >注册</Button>
                        </FormItem>
                    </Form>
                </Card>  
            </div>
        )
    }
}
export default Form.create()(FormRegister)