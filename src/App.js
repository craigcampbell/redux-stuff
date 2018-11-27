import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { updateAlert } from './actions/alert-actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateAlert = this.onUpdateAlert.bind(this);
  } 
  onUpdateAlert(){
    this.props.onUpdateAlert('SMS');
    console.log('clicked ' + this.props.alerts)
  }
  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
        IaaSOne <span className="App-page-title">&nbsp;Alerts</span>
        </header>
        <ul>
          <li>
          {this.props.resources}
          </li>
          <li>
          {this.props.serverMemory}
          </li>
          <li>
          {this.props.alerts}<br/>
          <button onClick={this.onUpdateAlert}>Update Alert Type</button>
     
          </li>
        </ul>
    
       
       
      </div>
      
    ) 
  }
}
const mapStateToProps = vMstate => ({
  alerts: vMstate.alerts,
  resources: vMstate.resources,
  serverMemory: vMstate.serverMemory
})
const mapActionsToProps = {
  onUpdateAlert: updateAlert
};

export default connect(mapStateToProps, mapActionsToProps)(App);
 