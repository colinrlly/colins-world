import React, { Component } from 'react';
import LineChart from './components/LineChart/index.js'
import Moment from 'moment-timezone'


class Plants extends Component {
    constructor(props) {
        super(props);

        this.time_format = 'h:mm a';

        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/mvp_sensor_data')  // Make request
            .then((res) => res.json())  // Parse promise
            .then((f_data) => {  // Do stuff with the retrieved data
                // Format and localize the time labels
                f_data['temp_times'] = f_data['temp_times']
                    .map(x => Moment(x)
                        .local()
                        .tz(Moment.tz.guess())
                        .format(this.time_format));
                f_data['humid_times'] = f_data['humid_times']
                    .map(x => Moment(x)
                        .local()
                        .tz(Moment.tz.guess())
                        .format(this.time_format));

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