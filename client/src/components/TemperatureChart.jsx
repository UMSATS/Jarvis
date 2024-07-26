import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const temperatures = {
    well01: [1, 2, 3, 2, 2, 1],
    well02: [3, 2, 2, 1, 1, 2],
    well03: [1, 3, 2, 1, 2, 2],
    well04: [4, 2, 2, 1, 1 ,3]
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
        well01: temperatures.well01[item.timestamp - 1],
        well02: temperatures.well02[item.timestamp - 1],
        well03: temperatures.well03[item.timestamp - 1],
        well04: temperatures.well04[item.timestamp - 1]
    }
})

const labels = {
    well01: 'Well 01',
    well02: 'Well 02',
    well03: 'Well 03',
    well04: 'Well 04',
};

const graphProperties = {
    legend: { hidden: true },
    width: 500,
    height: 300
}

export default function LineDataset() {
    return (
        <LineChart
            dataset={indexedDataset}
            series={Object.keys(labels).map((key) => ({
                dataKey: key,
                label: labels[key],
                valueFormatter: (value) => value.toString() + '°',
                curve: 'linear'
            }))}
            {...graphProperties}
        />
    );
}