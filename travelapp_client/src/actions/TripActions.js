import ActionTypes from '../constants';

//load trip list
export function tripListHasErrored(bool) {
    return {
        type: ActionTypes.TRIP_DATA_ERROR,
        hasErrored: bool
    }
}

export function tripListIsLoading(bool) {
    return {
        type: ActionTypes.TRIP_DATA_IS_LOADING,
        isLoading: bool
    }
}

export function tripListFetchSuccessful(tripList) {
    return {
        type: ActionTypes.TRIP_DATA_FETCH_SUCCESS,
        tripList
    }
}
//----

export function toggleAddTrip(bool) {
    return {
        type: ActionTypes.TOGGLE_ADD_TRIP,
        isAddingTrip: bool
    }
}

export function updateNewTrip(updateNewTrip) {
    return {
        type: ActionTypes.UPDATE_NEW_TRIP,
        updateNewTrip
    }
}

// submit new trip
export function submitNewTrip(newTrip) {
    return {
        type: ActionTypes.SUBMIT_NEW_TRIP,
        newTrip
    }
}

export function newTripHasErrored(bool) {
    return {
        type: ActionTypes.NEW_TRIP_ERRORED,
        newTripErrored: bool
    }
}

export function newTripPending(bool) {
    return {
        type: ActionTypes.NEW_TRIP_PENDING_CONFIRMATION,
        newTripPending: bool
    }
}