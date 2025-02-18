import React, { useState } from 'react';
import {
  temperatureData, luminosityData, labels, wellActivity
} from '../components/ExperimentData.jsx';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TimeseriesChart from '../components/TimeseriesChart.jsx';
import { useTimeContext } from "../components/TimeRangeContext.jsx";

const CHART_WIDTH = 800;

const chartSize = {
  width: CHART_WIDTH,
  height: 400 
}

export default function ExperimentTab() {
  const TimeContext = useTimeContext();

  const [showInactiveWells, setShowInactiveWells] = useState(true);

  return (
    <Box>
      <TimeseriesChart 
        title="Temperature (°C)"
        dataset={temperatureData}
        labels={labels}
        seriesActivity={!showInactiveWells ? wellActivity : undefined}
        ymin={-10} ymax={10}
        start={TimeContext.timeRange.start}
        end={TimeContext.timeRange.end}
        style={{...chartSize}}
      />
      <TimeseriesChart 
        title="Luminosity (lm)"
        dataset={luminosityData}
        labels={labels}
        seriesActivity={!showInactiveWells ? wellActivity : undefined}
        ymin={550} ymax={850}
        start={TimeContext.timeRange.start}
        end={TimeContext.timeRange.end}
        style={{...chartSize}}
      />
      <FormControlLabel
        control={
          <Switch
              checked={showInactiveWells}
              onChange={() => setShowInactiveWells(!showInactiveWells)}
          />
        }
        label="Show Inactive Wells"
      />
    </Box>
  );
}
