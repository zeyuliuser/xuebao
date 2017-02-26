import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button ,Upload,  Moda} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];
const options = [{
  value: '1',
  label: '1',

}, {
  value: '2',
  label: '2',
  children: [{
    value: '2',
    label: '2',
  }],
}];



class FormPart extends React.Component{

  render(){
      const {getFieldDecorator} =this.props.form;
    return(
      <div>
      <Row>
       <Col span={4}></Col>
       <Col span={16}>
       <FormItem>
       <h2>发布新教室出租</h2>
       <Button style={{'float':'right'}}>取消</Button>
       <Button type="primary" style={{ 'float':'right'}}>发布</Button>
       </FormItem>
       <FormItem
         label="标题"
         labelCol={{ span: 4 }}
         wrapperCol={{ span: 8 }}
       >
         {getFieldDecorator('title', {
           rules: [{ required: false, message: '输入标题' }],
         })(
           <Input />
         )
       }
       </FormItem>
       <FormItem
         label="标题"
         labelCol={{ span: 4 }}
         wrapperCol={{ span: 8 }}
       >
         {getFieldDecorator('title', {
           rules: [{ required: false, message: '输入标题' }],
         })(
           <Input />
         )
       }
       </FormItem>
       <FormItem
       labelCol={{ span: 4 }}
       wrapperCol={{ span: 8 }}
          label="选择输入地点"
        >
          {getFieldDecorator('addr', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: false, message: '选择输入地点' }],
          })(
            <Cascader options={residences} />
          )}
        </FormItem>


        <FormItem
          label="图片"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
        >

        </FormItem>


        <FormItem label="可以提供"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        >
        <Checkbox >黑板</Checkbox>
        <Checkbox >投影仪</Checkbox>
        <Checkbox >投影仪电脑</Checkbox>
        <Checkbox >家长休息室</Checkbox>
        </FormItem>
        <FormItem
          label="联系人"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('lxr', {
            rules: [{ required: false, message: '输入联系人' }],
          })(
            <Input />
          )
        }
        </FormItem>
        <FormItem
          label="联系方式"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('phone', {
            rules: [{ required: false, message: '输入电话' }],
          })(
            <Input />
          )
        }
        </FormItem>
         <FormItem
         label="有效期"
         labelCol={{ span: 4 }}
         wrapperCol={{ span: 8 }}
         >
        <Cascader options={options}  placeholder="30天" />
        </FormItem>
        <FormItem
        label="详细内容"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        >
        <Input type="textarea" rows={4} />
        </FormItem>
       </Col>
       <Col span={4}></Col>
       </Row>
      </div>
    );
  };

}

export default FormPart = Form.create({})(FormPart);
