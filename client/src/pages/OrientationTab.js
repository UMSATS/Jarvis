import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMagneticField, fetchMagField } from '../api/orientation.js';
import { fetchAngVelData } from '../api/orientation.js';
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

const formatTime = (isoString) => {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  }).format(new Date(isoString));
};

export default function OrientationTab() {
  const { timeRange } = useTimeContext();

  // mag field data
  const [magneticData, setMagneticData] = useState([]);
  const [magVariants, setMagVariants] = useState([]);
  const [magLSB, setMagLSB] = useState([]);
  const [magTime, setMagTime] = useState([]);
  const [magX, setMagX] = useState([]);
  const [magY, setMagY] = useState([]);
  const [magZ, setMagZ] = useState([]);

  // angular velocity data
  const [angVelData, setAngVelData] = useState([]);
  const [angVelVariants, setAngVelVariants] = useState([]);
  const [angVelTime, setAngVelTime] = useState([]);
  const [angVelX, setAngVelX] = useState([]);
  const [angVelY, setAngVelY] = useState([]);
  const [angVelZ, setAngVelZ] = useState([]);

  useEffect(() => {
    const load = async () => {
      const start = new Date('2025-09-01T00:00:00Z');
      const end   = new Date('2025-09-10T00:00:00Z');

      const initialmagvariants = [];
      const initialmaglsb = [];
      const initialmagtimes = [];
      const initialmagx = [];
      const initialmagy = [];
      const initialmagz = [];

      const initialAngVelVariants = [];
      const initialAngVelTimes = [];
      const initialAngVelX = [];
      const initialAngVelY = [];
      const initialAngVelZ = [];

      const { magnetic } = await fetchMagneticField(start, end);
      const { angvel } = await fetchAngVelData(start, end);

      // variant -> timestamp -> X -> Y -> Z
      for (let i = 0; i < magnetic.length; i++) {
        for (let j = 0; j < magnetic[i].length; j++) {
            if (magnetic[i][j][0] === '1') { initialmagvariants.push("Primary"); }
            else if (magnetic[i][j][0] === '2') { initialmagvariants.push("Backup"); }
            initialmaglsb.push(magnetic[i][j][2]);
            console.log(magnetic[i][j][2]);
            initialmagtimes.push(magnetic[i][j][1]);
            initialmagx.push(magnetic[i][j][3]);
            initialmagy.push(magnetic[i][j][4]);
            initialmagz.push(magnetic[i][j][5]);
        }
      }

      for (let i = 0; i < angvel.length; i++) {
        for (let j = 0; j < angvel[i].length; j++) {
            if (angvel[i][j][0] === '1') { initialAngVelVariants.push("Primary"); }
            else if (angvel[i][j][0] === '2') { initialAngVelVariants.push("Backup"); }
            initialAngVelTimes.push(angvel[i][j][1]);
            initialAngVelX.push(angvel[i][j][2]);
            initialAngVelY.push(angvel[i][j][3]);
            initialAngVelZ.push(angvel[i][j][4]);
        }
      }

      setMagVariants(initialmagvariants);
      setMagLSB(initialmaglsb);
      setMagTime(initialmagtimes);
      setMagX(initialmagx);
      setMagY(initialmagy);
      setMagZ(initialmagz);
      
      setAngVelVariants(initialAngVelVariants);
      setAngVelTime(initialAngVelTimes);
      setAngVelX(initialAngVelX);
      setAngVelY(initialAngVelY);
      setAngVelZ(initialAngVelZ);

      setMagneticData(magnetic);
      setAngVelData(angvel);
    } 
    load().catch(console.error);
  }, []);

  // WORK IN PROGRESS

  return (
    <Box component="section" sx={{ p: 4, background: "#292d33", margin: 5 }}>
      <Box>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>        
          <header>
            Magnetic Field Data (uT)
          </header>
          <header>
            Angular Velocity Data (deg/s)
          </header>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}} >
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px'}} >
          <p>
            VARIANT:
            {
              magVariants.map((variant, index) => (
                <p>{variant}</p>
              ))
            }
          </p> 
          <p>
            LSB {magLSB.length}: 
            {
              magLSB.map((lsb, index) => (
                <p>{String(lsb)}</p>
              ))
            }
          </p>
          <p>
            Time: 
            {
              magTime.map((time, index) => (
                <p>{formatTime(time)}</p>
              ))
            }
          </p>
          <p>
            X: 
            {
              magX.map((x, index) => (
                <p>{x}</p>
              ))
            }
          </p>
          <p>
            Y: 
            {
              magY.map((y, index) => (
                <p>{y}</p>
              ))
            }
          </p>
          <p>
            Z: 
            {
              magZ.map((z, index) => (
                <p>{z}</p>
              ))
            }
          </p>
          </div>
          <hr />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px'}} >
          <p>
            VARIANT:
            {
              angVelVariants.map((variant, index) => (
                <p>{variant}</p>
              ))
            }
          </p>
          <p>
            Time: 
            {
              angVelTime.map((time, index) => (
                <p>{formatTime(time)}</p>
              ))
            }
          </p>
          <p>
            X: 
            {
              angVelX.map((x, index) => (
                <p>{x}</p>
              ))
            }
          </p>
          <p>
            Y: 
            {
              angVelY.map((y, index) => (
                <p>{y}</p>
              ))
            }
          </p>
          <p>
            Z: 
            {
              angVelZ.map((z, index) => (
                <p>{z}</p>
              ))
            }
          </p>
          </div>
          </div>
        <div>
    </div>
      </Box>
    </Box>
  );
}