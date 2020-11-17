import React from 'react';
import QuakeApi from '../models/api';
import quakePin from '../images/earthquake.png';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends React.Component {
    constructor() {
        super();
        this.state = {
            quakes: [],
            loading: true,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        QuakeApi.all().then((res) => {
            this.setState({
                quakes: res.data.features,
                loading: false,
            });
        });
    };

    render() {
        const style = {
            width:'450px',
            height: '1000px'
        }

        if (this.state.loading) {
            return <h1>Loading...</h1>
        } else {
            console.log(this.state.quakes[0].geometry.coordinates[0])
            return (
                <>
                    <Map
                    google={this.props.google}
                    zoom={10}
                    initialCenter={{
                        lat: this.state.quakes[0].geometry.coordinates[1],
                        lng: this.state.quakes[0].geometry.coordinates[0]
                    }}
                    style={style}>
                    <Marker
                        lat= {this.state.quakes[0].geometry.coordinates[1]}
                        lng= {this.state.quakes[0].geometry.coordinates[0]}
                        icon= {{
                            url: quakePin,
                            scaledSize: new this.props.google.maps.Size(30,30)
                            }}
                        
                    />
                    </Map>
                </>
            );
        }
    }
};


export default GoogleApiWrapper({
    apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
})(GoogleMap);