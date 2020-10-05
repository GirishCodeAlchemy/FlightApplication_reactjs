import React from 'react';

import ReactTable from "react-table-6";
import "./css/react-table.css"
import "./css/index.css"
import { connect } from 'react-redux';
import { fetchFlightList } from './store/actions';
const axios = require('axios');
console.log('hey there!!');

class App extends React.Component {

    componentDidMount() {
        this.props.getFlightList();
    }

    render() {
        var tableHeader = [{
            Header: 'Flight Number',
            accessor: 'flight_no'
        }, {
            Header: 'Airline Number',
            accessor: 'airline_name'
        }, {
            Header: 'Departure Time',
            accessor: 'departure_date'
        }, {
            Header: 'Arrival Time',
            accessor: 'arival_date'
        }, {
            Header: 'Duration',
            accessor: 'duration'
        }, {
            Header: 'No of Stops',
            accessor: 'no_of_stops'
        }, {
            Header: 'Price',
            accessor: 'price'
        }]

        return (
            <div>
                <div className="centered"><h1> Flight Search Application</h1></div>
                <div className="tableCentered">{!this.props.loading ? <ReactTable
                    data={this.props.flightList}
                    columns={tableHeader}
                    defaultPageSize={2}
                    pageSizeOptions={[2, 4, 6]}
                /> : <p>Loading...</p>}</div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        flightList: state.flightList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFlightList: () => dispatch(fetchFlightList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);