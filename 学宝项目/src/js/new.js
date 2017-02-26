var React = require('react');
var ReactDOM = require('react-dom');
import ComHeader from './components/header';
import ComFooter from './components/footer';
import LendBread from './components/breadcrumb';
import FormPart from './components/form';
import 'antd/dist/antd.css';


class NewPart extends React.Component {
    render() {
    return(
      <div>
      <ComHeader/>
      <LendBread/>
      <FormPart/>
      <ComFooter/>
      </div>
    );
  }
}

ReactDOM.render(<NewPart/>, document.getElementById('new'));
