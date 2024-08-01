import React from 'react';
import ExperimentChart from '../components/ExperimentChart.jsx';
import * as temperature from '../components/TemperatureData.jsx';
import * as luminosity from '../components/LuminosityData.jsx';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { RectRadioButton } from '../styled-components/ButtonStyles.js';

const CHART_WIDTH = 500;

export default function ExperimentTab() {
  const [showInactiveWells, setShowInactiveWells] = React.useState(false);
  const [domain, setDomain] = React.useState(6);

  const domainButtons = [
    { value: 2, label: 'Last 2' },
    { value: 4, label: 'Last 4' },
    { value: 6, label: 'Last 6' }
  ];

  const chartProperties = {
    showInactiveWells: showInactiveWells,
    domain: domain,
    width: CHART_WIDTH,
    height: 300 
  }

  return (
    <Box>
      <Box display='flex' flexWrap='wrap'>
        <Box width={CHART_WIDTH}>
          <ExperimentChart 
            data={temperature.data}
            timestamps={temperature.timestamps}
            labels={temperature.labels}
            colors={temperature.colors}
            unitFormat='°'
            {...chartProperties}
          />
        </Box>
        <Box width={CHART_WIDTH}>
          <ExperimentChart 
            data={luminosity.data}
            timestamps={luminosity.timestamps}
            labels={luminosity.labels}
            colors={luminosity.colors}
            unitFormat=' lm'
            {...chartProperties}
          />
        </Box>
      </Box>
      
      <FormControlLabel
        control={
          <Switch
            checked={showInactiveWells}
            onChange={() => setShowInactiveWells(!showInactiveWells)}
          />
        }
        label="Show Inactive Wells"
      />
      <FormControl>
        <RadioGroup
          row
          aria-label="domain"
          value={domain}
        >
          {domainButtons.map(({ value, label }) => (
            <RectRadioButton
              key={value}
              value={value}
              active={domain === value}
              onClick={() => setDomain(value)}
            >
              {label}
            </RectRadioButton>
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
