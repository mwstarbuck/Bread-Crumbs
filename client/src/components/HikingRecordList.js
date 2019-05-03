import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'


class HikingRecordList extends Component {

    render() {

        let locations = this.props.locations
        let locationItems = locations.map((location) => {
            return <li key={location.id}>
                <div>
                    <a href={`https://www.latlong.net/c/?lat=${location.latitude}&long=${location.longitude}`}>Click to View -Latitude: {location.latitude}, Longitude: {location.longitude}</a>
                    <i>{location.createdAt}</i>
                </div>
            </li >
        })

        return (
            <div>
                <h1>Hiking Record List </h1>
                <button onClick={this.props.onLocationsLoad}>Get Locations</button>
                <ul className="hikeList">{locationItems}</ul>
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    latitude: state.latitude,
    longitude: state.longitude,
    locations: state.locations
})
const mapDispatchToProps = (dispatch) => ({
    onLocationsLoad: () => dispatch(actionCreators.loadLoctions())
})
export default connect(mapStateToProps, mapDispatchToProps)(HikingRecordList)