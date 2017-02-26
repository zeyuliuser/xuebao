import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';

export default class ComFooter extends React.Component{
  render(){
    return(
      <div>
      <Row>
       <Col span={2}></Col>
       <Col span={2}></Col>
       </Row>
      </div>
    );
  };

}
