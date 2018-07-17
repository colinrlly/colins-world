import React, { Component } from 'react';

import './style.css'

class LineChart extends Component {
    componentDidUpdate() {
        this.img.src = this.props.img_data;
    }

    render() {
        return (
            <div>
                <img
                    ref={img => {
                        this.img = img;
                    }}
                    className='picture'
                    alt='Last Plant'/>
            </div>
        )
    }
}

export default LineChart;