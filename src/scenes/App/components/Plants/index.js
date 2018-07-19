import React, { Component } from 'react';
import Moment from 'moment-timezone'

import Title from '../../../../components/Title/index.js'
import UnderTitle from '../../../../components/UnderTitle/index.js'
import About from './components/About/index.js'
import Picture from './components/Picture/index.js'
import LineChart from './components/LineChart/index.js'

import './style.css'

class Plants extends Component {
    constructor(props) {
        super(props);

        this.time_format = 'h:mm a';

        this.state = {
            data: {},
            img: {},
            chart_height: '100px'
        };
    };

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
      
        bytes.forEach((b) => binary += String.fromCharCode(b));
      
        return window.btoa(binary);
    };

    componentDidMount() { 
        fetch('/api/mvp_sensor_data')  // Make request
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

        fetch('/api/mvp_img_data').then((res) => {
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
            <div className='container'>
                <Title
                    title='MVP FOOD COMPUTER'/>
                <UnderTitle
                    time='SUMMER 2018'/>
                <About/>
                <div className='data_container'>
                    <div className='picture_container'>
                        <Picture
                            img_data={img}
                            className='plant_pic'/>
                    </div>
                    <div className='chart_container'
                        ref={div => this.chart_container = div}>
                        <LineChart 
                            label='Temperature (c)'
                            labels={data['temp_times']}
                            data={data['temps']}/>
                        <LineChart
                            label='Humidity (%)'
                            labels={data['humid_times']}
                            data={data['humids']}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Plants;