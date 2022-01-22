import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '700px',
    height: '350px'
};

export class Maps extends Component {
    state = {
        showingInfoWindow: false, // Hides or shows the InfoWindow
        activeMarker: {}, // Shows the active marker upon click
        selectedPlace: {} // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    render() {
        return (
            <>
                <Map
                    google={this.props.google}
                    zoom={14}
                    containerStyle={mapStyles}
                    initialCenter={
                        {
                            lat: 30.3585345,
                            lng: 75.5385428
                        }
                    }
                />
                <Marker
                    position={{ lat: 30.3585345, lng: 75.5385428 }}
                    onClick={this.onMarkerClick}
                    name={'JINDAL ARCHITECTS'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyCyK9zrQBrkhvoK5awUvFnzyXCMInhjTu4'
})(Maps);