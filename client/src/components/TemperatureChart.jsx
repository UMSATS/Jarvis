import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const temperatures = {
    well01: [true, 1, 2, 3, 2, 2, 1],
    well02: [true, 3, 2, 2, 1, 1, 2],
    well03: [false, 1, 3, 2, 1, 2, 2],
    well04: [true, 4, 2, 2, 1, 1, 3]
}

const timestamps = [
    {timestamp: 1},
    {timestamp: 2},
    {timestamp: 3},
    {timestamp: 4},
    {timestamp: 5},
    {timestamp: 6}
];

const indexedDataset = timestamps.map(item => {
    return {
        ...item,
        well01: temperatures.well01[item.timestamp],
        well02: temperatures.well02[item.timestamp],
        well03: temperatures.well03[item.timestamp],
        well04: temperatures.well04[item.timestamp]
    }
});

const labels = {
    well01: 'Well 01',
    well02: 'Well 02',
    well03: 'Well 03',
    well04: 'Well 04',
};

const colors = {
    well01: '#1DDAE0',
    well02: '#991DE0',
    well03: '#E0691D',
    well04: '#BDE01D',
}

const graphProperties = {
    legend: { hidden: true },
    skipAnimation: true,
    width: 500,
    height: 300
}

export default function TemperatureChart({ showInactiveWells }) {
    const filteredDataset = Object.keys(labels).filter((key) => {
        const wellArr = temperatures[key];
        return wellArr && wellArr[0];
    });
    
    const datasetKeys = showInactiveWells ? Object.keys(labels) : filteredDataset;
    
    const series = datasetKeys.map((key) => ({
        dataKey: key,
        label: labels[key],
        color: colors[key],
        valueFormatter: (value) => value.toString() + '°',
        curve: 'linear'
    }));

    return (
        <LineChart
            dataset={indexedDataset}
            series={series}
            {...graphProperties}
        />
    );
}
