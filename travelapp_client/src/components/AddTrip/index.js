import * as React from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';

import uuid from 'uuid-v4';
import _ from 'lodash';

import {
    cityListFetchData,
    travellerListFetchData,
    submitNewTripFetch
} from '../../network/FetchRequests';

import {
    toggleAddTrip,
    updateNewTrip
} from '../../actions/TripActions';

import './AddTrip.css';

//TODO fix menu values

class ConnectedAddTrip extends React.Component {

    constructor() {
        super();
        // this._updateActiveStep = this._updateActiveStep.bind(this);
        this._toggleAddTrip = this._toggleAddTrip.bind(this);
        // this._updateNewTrip= this._updateNewTrip.bind(this)
        this._onChangeTraveller = this._onChangeTraveller.bind(this);
        this._onChangeCityOrigin = this._onChangeCityOrigin.bind(this);
        this._onChangeCityDestination = this._onChangeCityDestination.bind(this);
        this._onChangeDate = this._onChangeDate.bind(this);
        this._onChangeTime = this._onChangeTime.bind(this);
        this._formatDate = this._formatDate.bind(this);
        this._formatTime = this._formatTime.bind(this);
        this._submitNewTrip = this._submitNewTrip.bind(this);

        this.state = {
            activeStep: 0
        }
    }
    componentWillMount() {
        this.props.fetchCityList("http://localhost:8080/city");
        this.props.fetchTravellerList("http://localhost:8080/traveller");
    }

    _submitNewTrip() {
        this.props.submitNewTripFetch("http://localhost:8080/trips", this.props.newTrip);
        this._toggleAddTrip;
    }

    _updateActiveStep(value) {
        this.setState({
            activeStep: value
        })
    }

    _renderTravellerItems() {
        return this.props.travellerList.map(traveller => {
            return <MenuItem key={uuid()} value={traveller.travellerId} primaryText={traveller.travellerName} />
        })
    }

    _renderCityItems() {
        return this.props.cityList.map(city => {
            return <MenuItem key={uuid()} value={city.cityId} primaryText={city.cityName} />
        })
    }

    _toggleAddTrip() {
        this.props.toggleAddTrip(!this.props.isAddingTrip);
    }

    _onChangeTraveller(event, value) {
        const newTrip = _.cloneDeep(this.props.newTrip);
        newTrip.traveller.travellerId = value + 1;
        this.props.updateNewTrip(newTrip);
        this._updateActiveStep(1);
    }

    _onChangeCityOrigin(event, value) {
        const newTrip = _.cloneDeep(this.props.newTrip);
        newTrip.cityOrigin.cityId = value + 1;
        this.props.updateNewTrip(newTrip);
        this._updateActiveStep(2);
    }

    _onChangeCityDestination(event, value) {
        const newTrip = _.cloneDeep(this.props.newTrip);
        newTrip.cityDestination.cityId = value + 1;
        this.props.updateNewTrip(newTrip);
        this._updateActiveStep(3);
    }

    _onChangeDate(event, value) {
        const newTrip = _.cloneDeep(this.props.newTrip);
        newTrip.date = this._formatDate(event, value);
        this.props.updateNewTrip(newTrip);
        this._updateActiveStep(3);
    }

    _onChangeTime(event, value) {
        const newTrip = _.cloneDeep(this.props.newTrip);
        newTrip.date = _.clone(newTrip.date).concat(this._formatTime(event, value));
        this.props.updateNewTrip(newTrip);
        this._updateActiveStep(4);
    }

    _formatDate(event, value) {
        console.log(value.getDate());
        return value.getFullYear() + "-" + (value.getMonth() + 1) + "-" + value.getDate() + " ";
    }

    _formatTime(event, value) {
        return value.getHours() + ":" + value.getMinutes() + ":00.0";
    }

    render() {
        if (!this.props.isAddingTrip) {
            return <RaisedButton label="New Trip"
                backgroundColor="#C4161C"
                labelColor="#FFF"
                onClick={this._toggleAddTrip} />
        }
        return (
            <Paper className='add-trip-paper' zDepth={2}>
                <ul className='add-trip'>
                    <li className='add-trip-stepper'>
                        <Stepper activeStep={this.state.activeStep}>
                            <Step>
                                <StepLabel>Traveller</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Origin</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Destination</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Date</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Time</StepLabel>
                            </Step>
                        </Stepper>
                    </li>

                    <li className='add-trip-details-top'>
                        <SelectField hintText="Traveller"
                            onChange={this._onChangeTraveller}
                            value={this.props.newTrip.traveller.travellerId}>
                            {this._renderTravellerItems()}
                        </SelectField>

                        <SelectField hintText="Origin City"
                            onChange={this._onChangeCityOrigin}
                            value={this.props.newTrip.cityOrigin.cityId}>
                            {this._renderCityItems()}
                        </SelectField>

                        <SelectField hintText="Destination City"
                            onChange={this._onChangeCityDestination}
                            value={this.props.newTrip.cityDestination.cityId}>
                            {this._renderCityItems()}
                        </SelectField>
                    </li>

                    <li className='add-trip-details-bottom'>
                        <DatePicker hintText="Date"
                            onChange={this._onChangeDate}
                        />
                        <TimePicker
                            format="24hr"
                            hintText="Time"
                            onChange={this._onChangeTime}
                        />
                    </li>

                    <li className='add-trip-submit'>
                        <RaisedButton label="Submit"
                            backgroundColor="#C4161C"
                            labelColor="#FFF"
                            onClick={this._submitNewTrip}
                        />
                    </li>

                </ul>
            </Paper>
        );
    }

}

const mapStateToProps = state => {
    return {
        cityListHasErrored: state.cityListHasErrored,
        cityListIsLoading: state.cityListIsLoading,
        cityList: state.cities,

        travellerListHasErrored: state.travellerListHasErrored,
        travellerListIsLoading: state.travellerListIsLoading,
        travellerList: state.travellers,

        isAddingTrip: state.isAddingTrip,

        newTrip: state.updateNewTrip
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTravellerList: url => dispatch(travellerListFetchData(url)),
        fetchCityList: url => dispatch(cityListFetchData(url)),
        toggleAddTrip: isAddingTrip => dispatch(toggleAddTrip(isAddingTrip)),
        updateNewTrip: newTripValue => dispatch(updateNewTrip(newTripValue)),
        submitNewTripFetch: (url, newTrip) => dispatch(submitNewTripFetch(url, newTrip))
    };
};

const AddTrip = connect(mapStateToProps, mapDispatchToProps)(ConnectedAddTrip);

export default AddTrip;