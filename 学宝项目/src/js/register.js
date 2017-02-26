var React = require('react');
var ReactDOM = require('react-dom');
import ComHeader from './components/header';
import ComFooter from './components/footer';
import RegBody from './components/register.js';
import 'antd/dist/antd.css';


class RegPart extends React.Component {
    render() {
    return(
      <div>
      <ComHeader/>
      <RegBody/>
      <ComFooter/>
      </div>
    );
  }
}

ReactDOM.render(<RegPart/>, document.getElementById('registermain'));
