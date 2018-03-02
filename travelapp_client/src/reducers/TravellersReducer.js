import ActionTypes from '../constants';

export function travellerListHasErrored(state = false, action) {
    switch (action.type) {
        case ActionTypes.TRAVELLER_DATA_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}

export function travellerListIsLoading(state = false, action) {
    switch (action.type) {
        case ActionTypes.TRAVELLER_DATA_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function travellers(state = [], action) {
    switch (action.type) {
        case ActionTypes.TRAVELLER_DATA_FETCH_SUCCESS:
            return action.travellerList;
        default:
            return state;
    }
}