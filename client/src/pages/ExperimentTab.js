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
  const { timeRange } = useTimeContext();

  const [showInactiveWells, setShowInactiveWells] = useState(true);

  const chartProps = {
    labels: labels,
    seriesActivity: !showInactiveWells ? wellActivity : undefined,
    xmin: timeRange.start,
    xmax: timeRange.end,
    style: {...chartSize}
  }

  return (
    <Box>
      <TimeseriesChart 
        title="Temperature (°C)"
        dataset={temperatureData}
        ymin={-10} ymax={10}
        {...chartProps}
      />
      <TimeseriesChart 
        title="Luminosity (lm)"
        dataset={luminosityData}
        ymin={550} ymax={850}
        {...chartProps}
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
