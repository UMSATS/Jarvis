import React from 'react';
import ExperimentChart from '../components/ExperimentChart.jsx';
import ChartControls from '../components/ChartControls.jsx';
import { chartableData as temperatureData } from '../components/TemperatureData.jsx';
import { chartableData as luminosityData } from '../components/LuminosityData.jsx';
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
        charts={({...controls}) => (
          <Box sx={{
            display: 'flex', flexWrap: 'wrap', gap: '16px', mt: '8px'
          }}>
            <Box width={CHART_WIDTH}>
              <ExperimentChart 
                title='Temperature'
                unitFormat='°'
                {...temperatureData}
                {...controls}
                {...chartSize}
              />
            </Box>
            <Box width={CHART_WIDTH}>
              <ExperimentChart 
                title='Luminosity'
                unitFormat=' lm'
                {...luminosityData}
                {...controls}
                {...chartSize}
              />
            </Box>
          </Box>
      )} />
    </Box>
  );
}
