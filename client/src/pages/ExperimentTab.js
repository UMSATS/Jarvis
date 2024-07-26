import React from 'react';
import TemperatureChart from '../components/TemperatureChart.jsx';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import { RectRadioButton } from '../styled-components/ButtonStyles.js';

export default function ExperimentTab() {
  const [showInactiveWells, setShowInactiveWells] = React.useState(true);
  const [domain, setDomain] = React.useState(6);

  const domainButtons = [
    { value: 2, label: 'Last 2' },
    { value: 4, label: 'Last 4' },
    { value: 6, label: 'Last 6' }
  ];

  return (
    <Box>
      <TemperatureChart showInactiveWells={showInactiveWells} domain={domain} />
      
      <Button onClick={() => setShowInactiveWells(!showInactiveWells)}>
        {showInactiveWells ? 'Hide inactive wells' : 'Show inactive wells'}
      </Button>

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
