import React, { Component } from 'react';
import Chart from 'chart.js';

class LineChart extends Component {
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
            }
        })
    }

    render() {
        return (
            <div>
                <canvas 
                    ref={canvas => {  // Set ref instead of ID for reusability
                        this.chart = canvas;
                    }}
                    width="400" 
                    height="400">
                </canvas>
            </div>
        )
    }
}

export default LineChart;