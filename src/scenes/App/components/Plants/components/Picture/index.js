import React, { Component } from 'react';

import './style.css'

class LineChart extends Component {
    componentDidUpdate() {
        this.img.src = this.props.img_data;
    }

    render() {
        return (
            <div className='plant_image_container'>
                <div>
                    <img
                        ref={img => {
                            this.img = img;
                        }}
                        className='picture'
                        alt='Last Plant'/>
                    <span className='created_at'>Picture Taken: {this.props.created_at}</span>
                </div>
            </div>
        )
    }
}

export default LineChart;