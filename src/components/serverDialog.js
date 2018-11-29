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
              <strong>{this.props.resources}</strong>
            </li>
            <li> 
              
            </li>
            <li>
              {this.props.alerts.alertType} <br/>
              <button onClick={this.onUpdateAlert}>Update Alert Type</button>
              <br/> Sent: {this.props.alertThreshold}
            </li>
            <li>
           
            <SelectForm />
            </li>
            
        </ul>
        <button>Change Alert Settings For:<br/>{this.props.resources}</button>
    </div>
    
    )
    
    }
}

const mapStateToProps = vMstate => ({
    guid: vMstate.id,
    alerts: vMstate.alerts,
    resources: vMstate.resources,
    serverMemory: vMstate.ram,
    alertThreshold: vMstate.alertThreshold
  })
  const mapActionsToProps = {
    onUpdateAlert: updateAlert
  };

export default connect(mapStateToProps, mapActionsToProps)(ServerDialog)