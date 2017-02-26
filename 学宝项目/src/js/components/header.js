import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import { Modal , Button , Tab , Message , Form , Input , CheckBox } from 'antd';
const confirm = Modal.confirm;
const FormItem = Form.Item;



export default class ComHeader extends React.Component{
  render(){
    return(
    <header>
     <Row type="flex" justify="space-between" align="bottom">
      <Col span={2}></Col>
      <Col span={4}><h1>用户中心</h1></Col>
      <Col span={1}></Col>
      <Col span={2}><h3>登陆</h3></Col>
      <Col span={1}></Col>
      <Col span={2}><h3>注册</h3></Col>
      <Col span={8}></Col>
      <Col span={2}>logo<img src="#"></img></Col>
      <Col span={2}></Col>
     </Row>
    </header>
  );
};
}
