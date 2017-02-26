import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import { Carousel } from 'antd';

export default class ComSider extends React.Component{
  render(){
    return(
      <div>
       <Row>
        <Col span={2}></Col>
        <Col span={6}>
         <Menu
         mode="inline"
         >
          <Menu.Item key="1"><a href="出租教室.html"><h3>出租教室</h3></a></Menu.Item>
          <Menu.Item key="2"><h3>找教室</h3></Menu.Item>
          <Menu.Item key="3"><h3>找老师</h3></Menu.Item>
          <Menu.Item key="4"><h3>老师求职</h3></Menu.Item>
          <Menu.Item key="5"><h3>家长组班</h3></Menu.Item>
          <Menu.Item key="6"><h3>家长找班</h3></Menu.Item>
         </Menu>
        </Col>
        <Col span={14}>
         <Carousel autoplay="true" dots="true" class="car">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
         </Carousel>
        </Col>
        <Col span={2}></Col>
       </Row>
      </div>

  );
};
}
