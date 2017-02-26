var React = require('react');
var ReactDOM = require('react-dom');
import ComHeader from './components/header';
import ComSider from './components/sider';
import ComGrid from './components/grid';
import ComFooter from './components/footer';
import 'antd/dist/antd.css';


class Index extends React.Component {
    render() {
    return(
      <div>
      <ComHeader/>
      <ComSider/>
      <ComGrid/>
      <ComFooter/>
      </div>
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById('header'));
