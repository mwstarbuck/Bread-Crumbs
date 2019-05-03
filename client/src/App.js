import React, { Component } from 'react';
import './App.css';
import Geo from './components/Geo'
import HikingRecordList from './components/HikingRecordList'
import { connect } from 'react-redux'
import * as actionCreators from './store/actions/actionCreators'

class App extends Component {

  constructor() {
    super()
    this.state = {
      hikingRecords: []
    }
  }

  handleSaveLocation = (lat, long) => {
    this.props.onSaveLocation(lat, long)
  }
  render() {
    return (
      <div className="App">
        <Geo saveLocationCallback={this.handleSaveLocation}></Geo>
        <HikingRecordList></HikingRecordList>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSaveLocation: (lat, long) => dispatch(actionCreators.saveLocation(lat, long))
  }
}
export default connect(null, mapDispatchToProps)(App);
