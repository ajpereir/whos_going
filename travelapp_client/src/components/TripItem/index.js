import * as React from 'react';
import './TripItem.css';
import LabelledTextBlock from '../Tools/LabelledTextBlock';
import uuid from 'uuid-v4';

/**
 * {
 *      "tripId":1,
 *      "traveller": {
 *          "travellerId":1,
 *          "travellerName":"Antonio"
 *      },
 *      "cityOrigin": {
 *          "cityId":1,
 *          "cityName":"Porto"
 *      },
 *      "cityDestination": {
 *          "cityId":2,
 *          "cityName":"Coimbra"
 *      },
 *      "dateAndTime":"2018-02-18 11:30:00.000"
 * }
 */

const TripItem = (props) => {
    
    const labels = [
        "Traveller Name",
        "From",
        "To",
        "Date"
    ]

    return (
        <ul className='trip-item'>  
            <LabelledTextBlock key={uuid()} label={labels[0]} value={props.trip.traveller.travellerName}/>
            <LabelledTextBlock key={uuid()} label={labels[1]} value={props.trip.cityOrigin.cityName}/>
            <LabelledTextBlock key={uuid()} label={labels[2]} value={props.trip.cityDestination.cityName}/>
            <LabelledTextBlock key={uuid()} label={labels[3]} value={props.trip.dateAndTime}/>
        </ul>
    );
}

export default TripItem;