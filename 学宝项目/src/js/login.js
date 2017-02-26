var React = require('react');
var ReactDOM = require('react-dom');
import ComHeader from './components/header';
import ComFooter from './components/footer';
import LoginBody from './components/loginbody'
import 'antd/dist/antd.css';


class LoginPart extends React.Component {
    render() {
      
    return(
      <div>
      <ComHeader/>
      <LoginBody/>
      <ComFooter/>
      </div>
    );
  }
}

ReactDOM.render(<LoginPart/>, document.getElementById('loginmain'));
