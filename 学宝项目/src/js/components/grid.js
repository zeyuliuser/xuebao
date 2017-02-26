import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';

export default class ComGrid extends React.Component{
  render(){
    return(
      <div>
      <Row gutter={48}>
       <Col span={2}></Col>
       <Col span={5} ><img src="#"/></Col>
       <Col span={5} ><img src="#"/></Col>
       <Col span={5} ><img src="#"/></Col>
       <Col span={5} ><img src="#"/></Col>
       <Col span={2}></Col>
       </Row>
      </div>
    );
  };

}
