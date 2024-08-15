import React from 'react';
import ExperimentChart from '../components/ExperimentChart.jsx';
import ChartControls from '../components/ChartControls.jsx';
import * as temperature from '../components/TemperatureData.jsx';
import * as luminosity from '../components/LuminosityData.jsx';
import Box from '@mui/material/Box';

const CHART_WIDTH = 500;

const chartSize = {
  width: CHART_WIDTH,
  height: 300 
}

export default function ExperimentTab() {
  return (
    <Box>
      <ChartControls 
        style={{mt: '16px', ml: '16px'}}
        charts={({...props}) => (
          <Box sx={{
            display: 'flex', flexWrap: 'wrap', gap: '16px', mt: '8px'
          }}>
            <Box width={CHART_WIDTH}>
              <ExperimentChart 
                data={temperature.data}
                timestamps={temperature.timestamps}
                labels={temperature.labels}
                colors={temperature.colors}
                unitFormat='°'
                title='Temperature'
                {...props}
                {...chartSize}
              />
            </Box>
            <Box width={CHART_WIDTH}>
              <ExperimentChart 
                data={luminosity.data}
                timestamps={luminosity.timestamps}
                labels={luminosity.labels}
                colors={luminosity.colors}
                unitFormat=' lm'
                title='Luminosity'
                {...props}
                {...chartSize}
              />
            </Box>
          </Box>
      )} />
    </Box>
  );
}
