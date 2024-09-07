/**
 * A Material-UI Line Chart with extra functionality.
 * 
 * The required props must be objects of the same length
 * and use the same key names (see ExperimentData.jsx).
 */

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
    data, timestamps, activity, labels, colors,
    showInactiveLines = false, 
    domain = MAX_DOMAIN, 
    unitFormat = '',
    title = '',
    width = 500,
    height = 300
}) {
    // Lines to chart
    const series = Object.keys(labels)
        // Filter out inactive wells if needed
        .filter(key => showInactiveLines || activity[key])
        // Use keys from labels to assign properties
        .map(key => ({
            dataKey: key,
            label: labels[key],
            color: colors[key] + 'C0',
            valueFormatter: value => value.toString() + unitFormat,
            curve: 'linear'
    }));

    const dataset = timestamps
        // Remove data outside the domain
        .slice(-domain)
        // Index the data using timestamps
        .map((item, index) => {
            const filteredItem = { timestamp: item.timestamp };
            series.forEach(({ dataKey }) => {
                // Finds the correct datapoint (now that domains differ)
                filteredItem[dataKey] = data[dataKey][index + MAX_DOMAIN - domain];
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
