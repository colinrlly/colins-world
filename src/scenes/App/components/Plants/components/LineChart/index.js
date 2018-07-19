import React, { Component } from 'react';
import Chart from 'chart.js';

import './style.css'

class LineChart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        var ctx = this.chart.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.props.labels,
                datasets: [{
                    label: this.props.label,
                    data: this.props.data,
                    borderColor: 'rgba(8, 254, 184, 1)',  // Neon cyan color
                    borderWidth: 1,
                    fill: false,
                    radius: 2
                }]
            },
            options: 
                this.props.over_940px ?
                    {
                        responsive: true,
                        maintainAspectRatio: false
                    } 
                    : 
                    {
                        maintainAspectRatio: true
                    }
        })
    }

    render() {
        return (
            <div className='line_chart_container'>
                <canvas
                    ref={canvas => {  // Set ref instead of ID for reusability
                        this.chart = canvas;
                    }}>
                </canvas>
            </div>
        )
    }
}

export default LineChart;