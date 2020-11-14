import React from 'react';
import axios from 'axios';
import QuakeList from './QuakeList';

class Earthquakes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            earthquakes: []
        }
    }

    componentDidMount () {
        axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
        .then((response) => {
            console.log(response.data)
            console.log('Title is:' , response.data.features[0].properties.title)
            console.log('Longitude is: ' , response.data.features[0].geometry.coordinates[0])
            console.log('Latitude is: ' , response.data.features[0].geometry.coordinates[1])
            this.setState({earthquakes: response.data})
            console.log('STATE : ' , this.state.earthquakes.features[0].properties.title)
        })
        .catch((error) => console.log(error));
    }

    render() {
        return (
            <div>
                <h2>QUAKES</h2>
                {/* <p>{this.state.earthquakses.features[0].properties.title}</p> */}
                {/* <QuakeList quakesList={this.state.earthquakes}/> */}
            </div>
        );
    }
};

export default Earthquakes;