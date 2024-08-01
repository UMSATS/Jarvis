import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const graphProperties = {
    grid: { horizontal: true },
    legend: { hidden: true },
    skipAnimation: true,
};

const MAX_DOMAIN = 6;

export default function ExperimentChart({ data, timestamps, labels, colors, 
                                          showInactiveWells = false, 
                                          domain = MAX_DOMAIN, 
                                          unitFormat = '',
                                          width = 500,
                                          height = 300
                                        }) {
    // Lines to chart
    const series = Object.keys(labels)
        // Filter out inactive wells if needed
        .filter(key => showInactiveWells || data[key][0])
        // Use keys from labels to assign properties
        .map(key => ({
            dataKey: key,
            label: labels[key],
            color: colors[key] + 'C0',
            valueFormatter: value => value.toString() + unitFormat,
            curve: 'linear'
    }));

    const dataset = timestamps
        // Filter out data with timestamps outside the domain
        .filter((item, index) => index >= MAX_DOMAIN - domain)
        // Index the data using timestamps
        .map(item => {
        const filteredItem = { timestamp: item.timestamp };
        series.forEach(({ dataKey }) => {
            filteredItem[dataKey] = data[dataKey][item.timestamp];
        });
        return filteredItem;
    });

    return (
        <LineChart
            dataset={dataset}
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
                    tickMinStep: 1
                }
            ]}
            width={width}
            height={height}
            {...graphProperties}
        />
    );
}
