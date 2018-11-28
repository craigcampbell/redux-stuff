import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { updateAlert } from './actions/alert-actions';
import { updateAlertThreshold } from './actions/threshold-actions';

class serverDialog extends Component {

    render() {
        return (
        <div>
        <ul>
            <li>
              {this.props.resources}
              </li>
            <li>
              {this.props.serverMemory}
            </li>
            <li>
              {this.props.alerts}<br/>{this.props.alertThreshold}<br/>
              <button onClick={this.onUpdateAlert}>Update Alert Type</button>
            </li>
        </ul>
    </div>
    
    )
    
    }

}