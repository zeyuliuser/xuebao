import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import { Form, Select, Input, Button ,Checkbox} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


 class RegPart extends React.Component{

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
      <Row>
       <Col span={8}></Col>
       <Col span={8}>
       <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="手机"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入您的手机' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="密码"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          label="验证码"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('note', {
            rules: [{ required: true, message: '输入验证码' }],
          })(
            <Input />
          )
        }
        </FormItem>
        <FormItem
        wrapperCol={{ span: 12 ,offset :4 }}>
        <Button value="default">发送验证码</Button>
        </FormItem>
        <FormItem label="身份"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        >
        <Checkbox >机构</Checkbox>
        <Checkbox >家长</Checkbox>
        <Checkbox >老师</Checkbox>
        </FormItem>
        <FormItem
        wrapperCol={{ span: 12 ,offset :4 }}>
        <Button type="primary">立即注册</Button>
        </FormItem>
        </Form>

       </Col>
       <Col span={8}></Col>
       </Row>
      </div>
    );
  };

}

export default RegPart =Form.create({})(RegPart);
