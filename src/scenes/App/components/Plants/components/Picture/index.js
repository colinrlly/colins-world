import React, { Component } from 'react';

import './style.css'

class Picture extends Component {
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
                    <span className='created_at'>PICTURE TAKEN: {this.props.created_at}</span>
                </div>
            </div>
        )
    }
}

export default Picture;