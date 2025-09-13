import React, { useState, useEffect } from 'react';
import {
  labels, wellActivity
} from '../components/ExperimentData.jsx';
import { useQuery } from '@tanstack/react-query';
import { fetchExperiment } from '../api/experiment.js';
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

  const [temperatureData, setTemperatureData] = useState([]);
  const [luminosityData, setLuminosityData] = useState([]);

  const [showInactiveWells, setShowInactiveWells] = useState(true);

  const { data, isError, error } = useQuery({
    queryKey: ['experiment', timeRange.start, timeRange.end],
    queryFn: () => fetchExperiment(timeRange.start, timeRange.end)
  });

  if (isError) console.log(error.message);

  useEffect(() => {
    if (data) {
      if (data.temperature) {
        setTemperatureData(data.temperature);
      }
      if (data.luminosity) {
        setLuminosityData(data.luminosity);
      }
    }
  }, [data]);

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
        ymin={100} ymax={900}
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
