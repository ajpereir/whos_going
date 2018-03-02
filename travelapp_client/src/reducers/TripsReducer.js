import ActionTypes from '../constants';

export function tripListHasErrored(state = false, action) {
    switch (action.type) {
        case ActionTypes.TRIP_DATA_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}

export function tripListIsLoading(state = false, action) {
    switch (action.type) {
        case ActionTypes.TRIP_DATA_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function trips(state = [], action) {
    switch (action.type) {
        case ActionTypes.TRIP_DATA_FETCH_SUCCESS:
            return action.tripList;
        default:
            return state;
    }
}

export function isAddingTrip(state = false, action) {
    switch(action.type) {
        case ActionTypes.TOGGLE_ADD_TRIP:
            return action.isAddingTrip;
        default:
            return state;
    }
}

export function updateNewTrip(state = [], action) {
    switch(action.type) {
        case ActionTypes.UPDATE_NEW_TRIP:
            return action.updateNewTrip;
        default: 
            return state;
    }
}

export function newTrip(state= [], action) {
    switch(action.type) {
        case ActionTypes.SUBMIT_NEW_TRIP:
            return action.newTrip;
        default:
            return state;
    }
}

export function newTripHasErrored(state = false, action) {
    switch (action.type) {
        case ActionTypes.NEW_TRIP_ERRORED:
            return action.newTripErrored;
        default:
            return state;
    }
}

export function newTripPending(state = false, action) {
    switch (action.type) {
        case ActionTypes.NEW_TRIP_PENDING_CONFIRMATION:
            return action.newTripPending;
        default:
            return state;
    }
}

