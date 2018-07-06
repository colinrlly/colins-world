import React, { Component } from 'react';
import Chart from 'chart.js';

class LineChart extends Component {
    componentDidMount() {
        fetch('http://localhost:3001/api/mvp_temp')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                var ctx = document.getElementById("chart").getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: data.times, // Times stamps
                        datasets: [{
                            label: 'temperature',
                            data: data.temps,  // Temperature
                            borderColor: 'rgba(8, 254, 184, 1)',
                            borderWidth: 1,
                            fill: false,
                        }]
                    }
                })
            })
    }

    render() {
        return (
            <div>
                <canvas id="chart" width="400" height="400"></canvas>
            </div>
        )
    }
}

export default LineChart;