import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateAlert } from '../actions/alert-actions';
//import { updateAlertThreshold } from '../actions/threshold-actions';
import SelectForm from '../components/memoryForm';

class ServerDialog extends Component {
    constructor(props) {
        super(props);
        this.onUpdateAlert = this.onUpdateAlert.bind(this);
      } 
      onUpdateAlert(){
        const selectedAlertType = this.props.alerts.alertType === 'SMS' ? 'Email' : 'SMS';
        this.props.onUpdateAlert(selectedAlertType);
      }
    render() {
        console.log('inside the render function', this.props.alerts.alertType)
        return (
        <div className='serverDialog'>
        <ul>
            <li>
              {this.props.resources}
            </li>
            <li> 
              {this.props.serverMemory.memory}
            </li>
            <li>
              {this.props.alerts.alertType}<br/>{this.props.alertThreshold}<br/>
              <button onClick={this.onUpdateAlert}>Update Alert Type</button>
            </li>
            <li>
            <SelectForm />
            </li>
            
        </ul>
    </div>
    
    )
    
    }
}

const mapStateToProps = vMstate => ({
    guid: vMstate.id,
    alerts: vMstate.alerts,
    resources: vMstate.resources,
    serverMemory: vMstate.ram
  })
  const mapActionsToProps = {
    onUpdateAlert: updateAlert
  };

export default connect(mapStateToProps, mapActionsToProps)(ServerDialog)