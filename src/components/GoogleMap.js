import React from 'react';
import quakePin from '../images/earthquake.png'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const style = {
            width:'500px',
            height: '1000px'
        }

        // let marker = new google.maps.Marker({
            
        // })

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
                <Marker
                    lat= {47.6062}
                    lng= {-123.3321}
                    icon= {{
                        url: quakePin,
                        scaledSize: new this.props.google.maps.Size(30,30)
                        }}
                    
                />
                </Map>
            </>
        );
    }
};


export default GoogleApiWrapper({
    apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
})(GoogleMap);