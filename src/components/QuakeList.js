import React from 'react';
import Quake from './Quake';


const QuakeList = (props) => {
    console.log('QUAKES LIST PROPS:' , props.quakesList)
    const quakesArr = props.quakesList.map((quakeObj) => (
        <Quake  quake={quakeObj}/>
    ));


    return (
        <>
        {quakesArr}
        </>
    );
};

export default QuakeList;