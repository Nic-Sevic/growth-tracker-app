import React from 'react';
import { Radar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';

interface RadarChartProps {
    data: any;
}

const RadarChart: React.FC<RadarChartProps> = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: data.datasets,
    };

    const options: ChartOptions<'radar'> = {
        scales: {
            r: {
                beginAtZero: true,
                ticks: {
                    beginAtZero: true,
                },
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
