import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends React.Component {

    render() {
        const style = {
            width:'500px',
            height: '1000px'
        }

        return (
            <>
                <Map
                google={this.props.google}
                zoom={10}
                initialCenter={{
                    lat: 47.6062,
                    lng: -122.3321
                }}
                style={style}>
                <Marker />
                </Map>
            </>
        );
    }
};


export default GoogleApiWrapper({
    apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
})(GoogleMap);