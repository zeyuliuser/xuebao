import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import { Breadcrumb } from 'antd';

export default class LendBread extends React.Component{
  render(){
    return(
      <div>
      <Row>
       <Col span={2}></Col>
       <Col span={20}>
        <Breadcrumb>
          <Breadcrumb.Item>主页</Breadcrumb.Item>
          <Breadcrumb.Item><a href="">功能</a></Breadcrumb.Item>
          <Breadcrumb.Item>三级菜单</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
       <Col span={2}></Col>
       </Row>
      </div>
    );
  };

}
