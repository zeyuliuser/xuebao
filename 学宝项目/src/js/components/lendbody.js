import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Input ,Button } from 'antd';

export default class LendBodyTop extends React.Component{
  render(){
    return(
    <div>
      <Row align="bottom">
       <Col span={2}></Col>
       <Col span={5}>
         <h3>关键字</h3><Input size="large" placeholder="请输入关键字" />
         <h3>租用时间</h3><Input size="large" placeholder="租用时间" />
       </Col>
       <Col span={1}></Col>
       <Col span={5}>
         <h3>请输入地点</h3><Input size="large" placeholder="请输入地点" />
         <span><h3>点击查询</h3></span><Button size="large">查询</Button>
       </Col>
       <Col span={1}></Col>
       <Col span={2}></Col>
       <Col span={6}>
       <a href="#"><Button type="primary" size="large">发表新信息</Button></a>
       </Col>
       <Col span={2}></Col>
       </Row>
    </div>
    );
  };

}
