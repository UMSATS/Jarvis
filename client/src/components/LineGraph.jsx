import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const graphProperties = {
    grid: { horizontal: true },
    legend: { hidden: true },
    skipAnimation: true,
    margin: { top: 30, bottom: 20, left: 30, right: 30 }
};

const MAX_DOMAIN = 6;

export default function LineGraph({
    data, timestamps, labels, colors, 
    showInactiveWells = false, 
    domain = MAX_DOMAIN, 
    unitFormat = '',
    title = '',
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
        <Box position='relative' width={width} mt={1}>
            <Typography 
                component='div'
                position='absolute'
                width='100%'
                textAlign='center'
            >
                {title}
            </Typography>
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
        </Box>
    );
}
