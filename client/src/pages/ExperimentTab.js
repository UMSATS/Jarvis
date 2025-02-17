import { React, useState} from 'react';
import { temperatureData, labels } from '../components/ExperimentData.jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TimeseriesChart from '../components/TimeseriesChart.jsx';

const CHART_WIDTH = 800;

const chartSize = {
  width: CHART_WIDTH,
  height: 400 
}

export default function ExperimentTab() {
  const [start, setStart] = useState(25);

  function testTime() {
    setStart(start + 5);
  }

  return (
    <Box>
      <TimeseriesChart 
        title="Temperature (°C)"
        dataset={temperatureData}
        labels={labels}
        ymin={-10} ymax={10}
        start={start}
        style={{...chartSize}}
      />
      <Button onClick={() => testTime()} style={{width: "20px", height: "20px"}}>
        Test
      </Button>
    </Box>
  );
}
