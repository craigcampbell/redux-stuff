import React, { Component } from 'react';
import {connect} from 'react-redux';

import {updateMemory} from '../actions/update-memory';

class SelectForm extends Component {
    constructor(props ) {
      super(props);
  
      this.updateMemory = this.updateMemory.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    updateMemory(event) {
      this.props.updateMemory(event.target.value);
    }
  
    handleSubmit(event) {
      alert('Current Memory Allocation = ' + this.props.serverMemory.memory);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>When Memory Exceeds: {this.props.serverMemory.memory}
        <form onSubmit={this.handleSubmit}>
          <label>
           
            <select value={this.props.serverMemory.memory} onChange={this.updateMemory}>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
              <option value="128">128</option>
            </select>
          </label>
          <button type="submit" value="Submit">Change Memory</button>
        </form>
        </div>
      );
    }
  }

  const mapStateToProps = vMstate => ({
    serverMemory: vMstate.ram
  })
  const mapActionsToProps = {
    
    updateMemory: updateMemory
  };

export default connect(mapStateToProps, mapActionsToProps)(SelectForm)