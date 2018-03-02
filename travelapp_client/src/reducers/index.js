import { combineReducers } from 'redux';

import { 
    isAddingTrip, 
    trips, 
    tripListHasErrored, 
    tripListIsLoading, 
    updateNewTrip,
    newTrip,
    newTripHasErrored,
    newTripPending
} from './TripsReducer';

import { 
    cities,
    cityListHasErrored, 
    cityListIsLoading 
} from './CitiesReducer';

import { 
    travellers, 
    travellerListHasErrored, 
    travellerListIsLoading 
} from './TravellersReducer';

export default combineReducers({
    trips,
    tripListHasErrored,
    tripListIsLoading,
    isAddingTrip,
    updateNewTrip,
    newTrip,
    newTripPending,
    newTripHasErrored,

    cities,
    cityListHasErrored,
    cityListIsLoading,

    travellers,
    travellerListHasErrored,
    travellerListIsLoading
});