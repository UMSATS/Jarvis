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

let magDataArray = [];

const chartSize = {
  width: CHART_WIDTH,
  height: 400 
}

export default function OrientationTab() {
  const { timeRange } = useTimeContext();
  const [magneticData, setMagneticData] = useState([]);
  let magVariant = [];
  let magTime = [];
  let magX = [];
  let magY = [];
  let magZ = [];

  useEffect(() => {
    const load = async () => {
      const start = new Date('2025-09-01T00:00:00Z');
      const end   = new Date('2025-09-10T00:00:00Z');

      const { magnetic } = await fetchMagneticField(start, end);
      console.log('fetchMagneticField result:', magnetic);
      console.log('fetchMagneticField array 1 result: ', magnetic[0])
      console.log('fetchMagneticField array x result: ', magnetic[0][0][0])

      // variant -> timestamp -> X -> Y -> Z
      for (let i = 0; i < magnetic.length; i++) {
        for (let j = 0; j < magnetic[i].length; j++) {
            const value = magnetic[i][j];
            console.log('magvariant size: ', magVariant.length);
            magVariant.push(magnetic[i][j][0]);
            magTime.push(magnetic[i][j][1]);
            magX.push(magnetic[i][j][2]);
            magY.push(magnetic[i][j][3]);
            magZ.push(magnetic[i][j][4]);
        }
      }
    
      setMagneticData(magnetic);

      console.log('magneticData size: ', magneticData.length)
      for (let i = 0; i < magneticData.length; i++) {
        for (let j = 0; j < magneticData[i].length; j++) {
          magDataArray.push(magneticData[i][j]);
        }

        console.log('magData Length: ', magDataArray.length)
      }

      for (let i = 0; i < magDataArray.length; i++) {
        console.log('mag data array: ', magDataArray[i])
      }
    } 
    load().catch(console.error);
  }, []);

  const displayMagneticFieldData = () => {
    for (let i = 0; i <= magDataArray.length; i++) {
      for (let j = 0; j <= magDataArray[i]; j++)
      {
        console.log('here ', magDataArray[i][0])
        return magDataArray[i][j];
      }
    }
  };

  // WORK IN PROGRESS

  return (
    <Box component="section" sx={{ p: 4, background: "#292d33", margin: 5 }}>
      <Box>
        <header>
          Magnetic Field Data
        </header>  
        <p>
          VARIANT: 
          {magneticData[1][1]}
        </p>
        <div>
          Data
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