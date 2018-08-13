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

        this.chart_time_format = 'h:mm a';
        this.picture_time_format = 'MM/DD/YY h:mm A';

        this.state = {
            data: {},
            img: {},
            img_created_at: '',
            chart_height: '100px',
            over_940px: false
        };

        window.addEventListener("resize", this.onResize.bind(this));
    };

    onResize() {
        // Only re-render when over_940px actually changes
        var {over_940px} = this.state;
        if (over_940px !== (window.innerWidth >= 940)) {
            this.setState({
                over_940px: window.innerWidth >= 940
            });
        }
    }

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
      
        bytes.forEach((b) => binary += String.fromCharCode(b));
      
        return window.btoa(binary);
    };

    componentDidMount() {
        this.onResize();

        // Get chart data
        fetch('/api/mvp_sensor_data')  // Make request
            .then((res) => res.json())  // Parse promise
            .then((f_data) => {  // Do stuff with the retrieved data
                // Format and localize the time labels
                f_data['temp_times'] = f_data['temp_times']
                    .map(x => Moment(x)
                        .local()
                        .tz(Moment.tz.guess())
                        .format(this.chart_time_format));
                f_data['humid_times'] = f_data['humid_times']
                    .map(x => Moment(x)
                        .local()
                        .tz(Moment.tz.guess())
                        .format(this.chart_time_format));

                this.setState({
                    data: f_data
                })
        });

        // Get picture data
        fetch('/api/mvp_img_data')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            // Created image data array
            var base64Flag = 'data:image/jpeg;base64,';
            var imageStr = this.arrayBufferToBase64(data.img.data.data);

            // Convert created_at time to local/proper format
            var created_at = Moment(data.createdAt)
                                .local()
                                .tz(Moment.tz.guess())
                                .format(this.picture_time_format);

            this.setState({
                img: base64Flag + imageStr,
                img_created_at: created_at
            })
        })
    };

    render() {
        const {data} = this.state;
        const {img} = this.state;
        const {img_created_at} = this.state;
        const {over_940px} = this.state;

        return (
            <div className='container'>
                <Title
                    title='MVP FOOD COMPUTER'/>
                <UnderTitle
                    time='SUMMER 2018'/>
                <About
                    over_940px={over_940px}/>
                <div className='data_container'>
                    <div className='picture_container'>
                        <Picture
                            img_data={img}
                            className='plant_pic'
                            created_at={img_created_at}/>
                    </div>
                    <div className='chart_container'
                        ref={div => this.chart_container = div}>
                        <LineChart 
                            label='Temperature (c)'
                            labels={data['temp_times']}
                            data={data['temps']}
                            over_940px={over_940px}/>
                        <LineChart
                            label='Humidity (%)'
                            labels={data['humid_times']}
                            data={data['humids']}
                            over_940px={over_940px}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Plants;