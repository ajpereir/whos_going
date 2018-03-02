import { 
    tripListFetchSuccessful, 
    tripListHasErrored, 
    tripListIsLoading,
    newTripPending,
    newTripHasErrored 
} from '../actions/TripActions';

import { 
    cityListFetchSuccessful, 
    cityListHasErrored, 
    cityListIsLoading 
} from '../actions/CityActions';

import { 
    travellerListFetchSuccessful, 
    travellerListHasErrored, 
    travellerListIsLoading 
} from '../actions/TravellerActions';

export function tripListFetchData(url) {
    return dispatch => {
        dispatch(tripListIsLoading(true));

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(tripListIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(tripList => dispatch(tripListFetchSuccessful(tripList)))
            .catch(() => dispatch(tripListHasErrored(true)));
    };

}

export function cityListFetchData(url) {
    return dispatch => {
        dispatch(cityListIsLoading(true));

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(cityListIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(cityList => dispatch(cityListFetchSuccessful(cityList)))
            .catch(() => dispatch(cityListHasErrored(true)));
    };

}

export function travellerListFetchData(url) {
    return dispatch => {
        dispatch(travellerListIsLoading(true));

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(travellerListIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(travellerList => dispatch(travellerListFetchSuccessful(travellerList)))
            .catch(() => dispatch(travellerListHasErrored(true)));
    };

}

export function submitNewTripFetch(url, newTrip) {
    return dispatch => {
        dispatch(newTripPending(true));

        console.log(newTrip);
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(newTrip),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(newTripPending(false));
                return response;
            })
            .then(response => response.json())
            .then(newId => {
                console.log("added");
                //dispatch success
            })
            .catch(error => {
                console.log("error");
                dispatch(newTripHasErrored(true))});
    }
}