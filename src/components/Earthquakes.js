import React from 'react';
import axios from 'axios';
// import QuakeList from './QuakeList';

class Earthquakes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quakes: []
        };
    };

    componentDidMount () {
        axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
        .then((response) => {
            // console.log(response.data)
            // console.log('Title is:' , response.data.features[0].properties.title)
            // console.log('Longitude is: ' , response.data.features[0].geometry.coordinates[0])
            // console.log('Latitude is: ' , response.data.features[0].geometry.coordinates[1])
            this.setState({quakes: response.data.features});
            // console.log('STATE : ' , this.state.quakes.features[0].properties.title)
            // console.log('QUAKES: ' , this.state.quakes)
        })
        .catch((error) => console.log(error));
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.quakes.map((quake, index) => {
                        return (
                        <p key={index}>{quake.properties.title}</p>
                    )})};
                    
                </ul>
                
                {/* {console.log(  'HERE' , this.state.quakes.features)} */}
            </div>
        );
    }

    
};

export default Earthquakes;