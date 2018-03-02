import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from './store';
import './index.css';

import TravelApp from "./components/TravelApp";

const initialState = {
    isAddingTrip: false,
    tripListIsLoading: false,
    tripListHasErrored: false,
    updateNewTrip: {
        "traveller": {
          "travellerId": undefined
        },
        "cityOrigin": {
          "cityId": undefined
        },
        "cityDestination": {
          "cityId": undefined
        },
        "date": undefined
      }
};

const store = configureStore(initialState);

window.store = store;

render(
    <Provider store={store}>
        <TravelApp />
    </Provider>,
    document.getElementById("root")
);