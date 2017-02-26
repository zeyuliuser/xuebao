import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class LoginPart extends React.Component{
  render(){
     let { getFieldDecorator } = this.props.form;
    return(
      <div>
      <Row>
       <Col span={8}></Col>
       <Col span={8}>
       <Form onSubmit={this.handleSubmit} className="login-form">
    <FormItem>
      {getFieldDecorator('userName', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
        <Input addonBefore={<Icon type="user" />} placeholder="Username" />
      )}
    </FormItem>
    <FormItem>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Please input your Password!' }],
      })(
        <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
      )}
    </FormItem>
    <FormItem>
      {getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true,
      })(
        <Checkbox>Remember me</Checkbox>
      )}
      <a className="login-form-forgot">忘记密码？</a>
      <Button type="primary" htmlType="submit" className="login-form-button">
        登 陆
      </Button>
      Or <a>立即注册!</a>
    </FormItem>
  </Form>
       </Col>
       <Col span={8}></Col>
       </Row>
      </div>
    );
  };

}
export default LoginPart = Form.create({})(LoginPart);
