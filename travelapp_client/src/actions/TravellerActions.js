import ActionTypes from '../constants';

export function travellerListHasErrored(bool) {
    return {
        type: ActionTypes.TRAVELLER_DATA_ERROR,
        hasErrored: bool
    }
}

export function travellerListIsLoading(bool) {
    return {
        type: ActionTypes.TRAVELLER_DATA_IS_LOADING,
        isLoading: bool
    }
}

export function travellerListFetchSuccessful(travellerList) {
    return {
        type: ActionTypes.TRAVELLER_DATA_FETCH_SUCCESS,
        travellerList
    }
}