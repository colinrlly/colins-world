import React, { Component } from 'react';
import LineChart from './components/LineChart/index.js'

class Plants extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        fetch('/api/mvp_sensor_data')  // Make request
            .then((res) => res.json())  // Parse promise
            .then((f_data) => {  // Do stuff with the retrieved data
                this.setState({
                    data: f_data
                })
            })
    }

    render() {
        const {data} = this.state;

        return (
            <div>
                <LineChart 
                    label='Temperature'
                    labels={data['temp_times']}
                    data={data['temps']}/>
                <LineChart
                    label='Humidity'
                    labels={data['humid_times']}
                    data={data['humids']}/>
            </div>
        )
    }
}

export default Plants;