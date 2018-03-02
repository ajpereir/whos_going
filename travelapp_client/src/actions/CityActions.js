import ActionTypes from '../constants';

export function cityListHasErrored(bool) {
    return {
        type: ActionTypes.CITY_DATA_ERROR,
        hasErrored: bool
    }
}

export function cityListIsLoading(bool) {
    return {
        type: ActionTypes.CITY_DATA_IS_LOADING,
        isLoading: bool
    }
}

export function cityListFetchSuccessful(cityList) {
    return {
        type: ActionTypes.CITY_DATA_FETCH_SUCCESS,
        cityList
    }
}