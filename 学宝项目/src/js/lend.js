var React = require('react');
var ReactDOM = require('react-dom');
import ComHeader from './components/header';
import ComFooter from './components/footer';
import LendBodyTop from './components/lendbody';
import LendBodyMid from './components/lendbodymid';
import LendBread from './components/breadcrumb';
import 'antd/dist/antd.css';


class LendPart extends React.Component {
    render() {
    return(
      <div>
      <ComHeader/>
      <LendBread/>
      <LendBodyTop/>
      <LendBodyMid/>
      <ComFooter/>
      </div>
    );
  }
}

ReactDOM.render(<LendPart/>, document.getElementById('lend'));
