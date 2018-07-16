import React, { Component } from 'react';

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
                    }}/>
            </div>
        )
    }
}

export default LineChart;