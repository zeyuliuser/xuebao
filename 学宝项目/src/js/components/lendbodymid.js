import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Input ,Button ,Pagination } from 'antd';
import { Table, Icon } from 'antd';
const columns = [{
title: '标题',
dataIndex: 'title',
key: 'title',
render: text => <a href="#">{text}</a>,
}, {
title: '地点',
dataIndex: 'addr',
key: 'addr',
}, {
title: '出租时间',
dataIndex: 'times',
key: 'times',
},
{
title: '联系人',
dataIndex: 'cname',
key: 'cname',
},{
title: '发布日期',
dataIndex: 'timestamp',
key: 'timestamp',
},
];

const data = [{
key: '1',
title: 'XX地区出租教室',
addr: '广安门内',
times: '周一至周五',
cname:'XXX',
timestamp:'2016-12-31 12:33:44',
}, {
key: '2',
title: 'XX地区出租教室',
addr: '广安门内',
times: '周一至周五',
cname:'XXX',
timestamp:'2016-12-31 12:33:44',
}, {
key: '3',
title: 'XX地区出租教室',
addr: '广安门内',
times: '周一至周五',
cname:'XXX',
timestamp:'2016-12-31 12:33:44',
}];

export default class LendBodyMid extends React.Component{

  render(){
    return(
    <div>
      <Row>
       <Col span={2}></Col>
       <Col span={20}>
        <Table columns={columns} dataSource={data} pagination="true" defaultCurrent={1} total={20} defaultPageSize={4} />
       </Col>
       <Col span={2}></Col>
      </Row>
    </div>
    );
  };

}
