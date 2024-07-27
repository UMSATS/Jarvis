import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const temperatures = {
    well01: [true, 1, 2, 3, 2, 2, 1],
    well02: [true, 3, 2, 2, 1, 1, 2],
    well03: [false, 1, 3, 2, 1, 2, 2],
    well04: [true, 4, 2, 2, 1, 1, 3]
};

const timestamps = [
    { timestamp: 1 },
    { timestamp: 2 },
    { timestamp: 3 },
    { timestamp: 4 },
    { timestamp: 5 },
    { timestamp: 6 }
];

const labels = {
    well01: 'Well 01',
    well02: 'Well 02',
    well03: 'Well 03',
    well04: 'Well 04',
};

const colors = {
    well01: '#1DDAE0',
    well02: '#991DE0',
    well03: '#ED698D',
    well04: '#BDED1D',
};

const graphProperties = {
    grid: { horizontal: true },
    legend: { hidden: true },
    skipAnimation: true,
    width: 500,
    height: 300
};

const MAX_DOMAIN = 6;

export default function TemperatureChart({ showInactiveWells, domain }) {
    // Lines to chart
    const series = Object.keys(labels)
        // Filter out inactive wells if needed
        .filter(key => showInactiveWells || temperatures[key][0])
        // Use keys from labels to assign properties
        .map(key => ({
            dataKey: key,
            label: labels[key],
            color: colors[key] + 'C0',
            valueFormatter: value => value.toString() + '°',
            curve: 'linear'
        }));
    
    const filteredDataset = timestamps
        // Filter out data with timestamps outside the domain
        .filter((item, index) => index >= MAX_DOMAIN - domain)
        // Index the data using timestamps
        .map(item => {
            const filteredItem = { timestamp: item.timestamp };
            series.forEach(({ dataKey }) => {
                filteredItem[dataKey] = temperatures[dataKey][item.timestamp];
            });
            return filteredItem;
        });

    return (
        <LineChart
            dataset={filteredDataset}
            series={series}
            xAxis={[
                {
                    dataKey: 'timestamp',
                    valueFormatter: (value) => value.toString(),
                    tickNumber: domain,
                    tickMinStep: 1
                },
            ]}
            yAxis={[
                {
                    valueFormatter: (value) => value.toString(),
                    min: 0,
                    max: 5,
                    tickMinStep: 1
                }
            ]}
            {...graphProperties}
        />
    );
}
