import React, { Component } from 'react';
import './App.css';



import { connect } from 'react-redux';
import { updateAlert } from './actions/alert-actions';
import { updateAlertThreshold } from './actions/threshold-actions';


import ServerDialog from './components/serverDialog';


class App extends Component {

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
        IaaSOne <span className="App-page-title">&nbsp;Alerts</span>
        </header>
        
      <ServerDialog />
       
       
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
 