import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMagneticField, fetchMagField } from '../api/orientation.js';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TimeseriesChart from '../components/TimeseriesChart.jsx';
import { useTimeContext } from "../components/TimeRangeContext.jsx";
import { testTemperatureData, testLuminosityData, testWellActivity } from '../api/testData.js';

const CHART_WIDTH = 800;

const chartSize = {
  width: CHART_WIDTH,
  height: 400 
}

export default function OrientationTab() {
  const { timeRange } = useTimeContext();
  const [magneticData, setMagneticData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const start = new Date('2025-09-01T00:00:00Z');
      const end   = new Date('2025-09-10T00:00:00Z');

      const { magnetic } = await fetchMagneticField(start, end);
      console.log('fetchMagneticField result:', magnetic);
      setMagneticData(magnetic);
    }
    load().catch(console.error);
  }, []);

  const displayMagneticFieldData = () => {
    
  };

  // WORK IN PROGRESS

  return (
    <Box component="section" sx={{ p: 4, background: "#292d33", margin: 5 }}>
      <Box>
        <header>
          Magnetic Field Data
        </header>  
        <p>VARIANT: {JSON.stringify(magneticData)}</p>
        <p>TIMESTAMP</p>   
        <p>X</p>
        <p>Y</p>
        <p>Z</p>

        <div>
      {magneticData.length === 0 ? (
        <p>No Data</p>
      ) : (
        <pre>{JSON.stringify(magneticData, null, 2)}</pre>
      )}
    </div>
      </Box>
    </Box>
  );
}