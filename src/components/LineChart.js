import React, { Component } from 'react';
import Chart from 'chart.js';

class LineChart extends Component {
    componentDidMount() {
        fetch('http://localhost:3001/api/mvp_sensor_data')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                var ctx = document.getElementById("chart").getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: data.temp_times,
                        datasets: [{
                            label: 'temperature',
                            data: data.temps,
                            borderColor: 'rgba(8, 254, 184, 1)',  // Neon cyan color
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