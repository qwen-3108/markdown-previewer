import React, {Component} from 'react';
import './Toggle.css';

class Toggle extends Component{
  constructor(props){
    super(props);
    this.state=true;
  }
  render(){
    return (
      <div id="groove" onClick={this.props.toggle}>
        <div id="thumb" className={this.props.state?'light':''}></div>
      </div>);
  }
}

export default Toggle;
