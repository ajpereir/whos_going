import * as React from 'react';
import { connect } from 'react-redux';

import { tripListFetchData } from '../../network/FetchRequests';

import AddTrip from '../../components/AddTrip';
import TripsList from '../../components/TripsList';
import './Trips.css';


class ConnectedTrips extends React.Component {
   
    componentWillMount() {
        this.props.fetchData("http://localhost:8080/trips");
    }

    render() {
        if (this.props.hasErrored) {
            return <div>Error</div>
        }

        if (this.props.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div className='trips-component'>
                <AddTrip />
                <TripsList tripList={this.props.tripList}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        tripList: state.trips,
        hasErrored: state.tripListHasErrored,
        isLoading: state.tripListIsLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(tripListFetchData(url))
    };
}

const Trips = connect(mapStateToProps, mapDispatchToProps)(ConnectedTrips);

export default Trips;