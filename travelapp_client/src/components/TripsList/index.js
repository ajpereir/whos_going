import React from "react";
import TripItem from '../TripItem';
import uuid from 'uuid-v4';

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import Paper from 'material-ui/Paper';

import './TripsList.css';

const _renderItems = props => {
    props.tripList.map(trip => {
        return
        console.log(trip);
        <TableRow key={uuid()}>
            <TableRowColumn>{trip.tripId}</TableRowColumn>
            <TableRowColumn>{trip.traveller.travellerName}</TableRowColumn>
            <TableRowColumn>{trip.cityOrigin.cityName}</TableRowColumn>
            <TableRowColumn>{trip.cityDestination.cityName}</TableRowColumn>
            <TableRowColumn>{trip.date}</TableRowColumn>
        </TableRow>
    })
}

const TripList = props => (
    <Paper className="trips-list" zDepth={2}>
        <Table
            selectable={true}
            multiSelectable={false}
            height={'100%'}
        >
            <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}>
                <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Traveller</TableHeaderColumn>
                    <TableHeaderColumn>Origin</TableHeaderColumn>
                    <TableHeaderColumn>Destination</TableHeaderColumn>
                    <TableHeaderColumn>Date</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody
                displayRowCheckbox={false}
                deselectOnClickaway={true}
                showRowHover={false}
                stripedRows={false}
            >
                {
                    props.tripList.map(trip => {
                        console.log(trip);
                        return
                        <TableRow key={uuid()}>
                            <TableRowColumn>{trip.tripId}</TableRowColumn>
                            <TableRowColumn>{trip.traveller.travellerName}</TableRowColumn>
                            <TableRowColumn>{trip.cityOrigin.cityName}</TableRowColumn>
                            <TableRowColumn>{trip.cityDestination.cityName}</TableRowColumn>
                            <TableRowColumn>{trip.date}</TableRowColumn>
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    </Paper>


);

export default TripList;