import { React } from 'react';
import {
  temperatureData, luminosityData, labels 
} from '../components/ExperimentData.jsx';
import Box from '@mui/material/Box';
import TimeseriesChart from '../components/TimeseriesChart.jsx';
import { useTimeContext } from "../components/TimeRangeContext.jsx";

const CHART_WIDTH = 800;

const chartSize = {
  width: CHART_WIDTH,
  height: 400 
}

export default function ExperimentTab() {
  const TimeContext = useTimeContext();

  return (
    <Box>
      <TimeseriesChart 
        title="Temperature (°C)"
        dataset={temperatureData}
        labels={labels}
        ymin={-10} ymax={10}
        start={TimeContext.timeRange.start}
        end={TimeContext.timeRange.end}
        style={{...chartSize}}
      />
      <TimeseriesChart 
        title="Luminosity (lm)"
        dataset={luminosityData}
        labels={labels}
        ymin={550} ymax={850}
        start={TimeContext.timeRange.start}
        end={TimeContext.timeRange.end}
        style={{...chartSize}}
      />
    </Box>
  );
}
