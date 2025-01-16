import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Skills and Goals',
                data: data.values,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scale: {
            ticks: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Skills and Goals Radar Chart</h2>
            <Radar data={chartData} options={options} />
        </div>
    );
};

export default RadarChart;