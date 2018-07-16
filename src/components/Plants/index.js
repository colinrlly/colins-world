import React, { Component } from 'react';
import Moment from 'moment-timezone'

import LineChart from './components/LineChart/index.js'
import Picture from './components/Picture/index.js'

class Plants extends Component {
    constructor(props) {
        super(props);

        this.time_format = 'h:mm a';

        this.state = {
            data: {},
            img: {}
        };
    };

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
      
        bytes.forEach((b) => binary += String.fromCharCode(b));
      
        return window.btoa(binary);
    };

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
            });

        fetch('http://localhost:3001/api/mvp_img_data').then((res) => {
            res.arrayBuffer().then((buffer) => {
                var base64Flag = 'data:image/jpeg;base64,';
                var imageStr = this.arrayBufferToBase64(buffer);

                this.setState({
                    img: base64Flag + imageStr
                })
            })
        });
    };

    render() {
        const {data} = this.state;
        const {img} = this.state;

        return (
            <div>
                <Picture
                    img_data={img}/>
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