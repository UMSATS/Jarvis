import React from 'react';
import TemperatureChart from '../components/TemperatureChart.jsx';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function ExperimentTab() {
  const [showInactiveWells, setShowInactiveWells] = React.useState(true);

  return (
    <Box>
      <TemperatureChart showInactiveWells={showInactiveWells}/>
      <Button onClick={() => setShowInactiveWells(!showInactiveWells)}>
        {showInactiveWells ? 'Hide inactive wells' : 'Show inactive wells'}
      </Button>
    </Box>
  )
};