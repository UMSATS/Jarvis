import React from 'react';
import EnhancedLineChart from '../components/EnhancedLineChart.jsx';
import ChartControls from '../components/ChartControls.jsx';
import { 
  chartableTemperatureData, 
  chartableLuminosityData, 
  graphicalData 
} from '../components/ExperimentData.jsx';
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
              <EnhancedLineChart 
                title='Temperature'
                unitFormat='°'
                {...chartableTemperatureData}
                {...graphicalData}
                {...controls}
                {...chartSize}
              />
            </Box>
            <Box width={CHART_WIDTH}>
              <EnhancedLineChart 
                title='Luminosity'
                unitFormat=' lm'
                {...chartableLuminosityData}
                {...graphicalData}
                {...controls}
                {...chartSize}
              />
            </Box>
          </Box>
      )} />
    </Box>
  );
}
