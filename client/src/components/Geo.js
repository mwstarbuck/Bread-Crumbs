import React, { Component, useState, useEffect } from 'react';
import { geolocated } from 'react-geolocated'
class Geo extends Component {
    constructor() {
        super()
        this.state = {
            latitide: '',
            longitude: ''
        }
    }
    handleSaveClick = (lat, long) => {
        console.log(lat, long)
        this.props.saveLocationCallback(lat, long)
    }
    render() {
        return !this.props.isGeolocationAvailable
            ? <div>Your browser does not support Geolocation</div>
            : !this.props.isGeolocationEnabled
                ? <div>Geolocation is not enabled</div>
                : this.props.coords
                    ? <div>
                        <table>
                            <tbody>
                                <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                                <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
                                {/* <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
                            <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
                            <tr><td>speed</td><td>{this.props.coords.speed}</td></tr> */}
                            </tbody>
                        </table>
                        <button onClick={() => this.handleSaveClick(this.props.coords.latitude, this.props.coords.longitude)}>Save Location</button>
                    </div>
                    : <div>Getting the location data&hellip; </div>;
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geo);