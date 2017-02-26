import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';

export default class ComFooter extends React.Component{
  render(){
    return(
      <footer>
      <Row gutter={24}>
       <Col span={2}></Col>
       <Col span={5} ><img src="#"/></Col>
       <Col span={10}>
        <h3>服务电话：13000000000  13111111111</h3>
        <span>北京乐而学教育咨询有限公司   版权所有 京ICP备XXX  All rights reserved</span>
       </Col>
       <Col span={5} ><img src="#"/></Col>
       <Col span={2}></Col>
       </Row>
      </footer>
    );
  };

}
