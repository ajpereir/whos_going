import ActionTypes from '../constants';

export function cityListHasErrored(state = false, action) {
    switch (action.type) {
        case ActionTypes.CITY_DATA_ERROR:
            return action.hasErrored;
        default:
            return state;
    }
}

export function cityListIsLoading(state = false, action) {
    switch (action.type) {
        case ActionTypes.CITY_DATA_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function cities(state = [], action) {
    switch (action.type) {
        case ActionTypes.CITY_DATA_FETCH_SUCCESS:
            return action.cityList;
        default:
            return state;
    }
}