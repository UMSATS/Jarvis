import React from 'react';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { RectRadioButton } from '../styled-components/ButtonStyles.js';

export default function ChartControls({ charts, style }) {
    const [showInactiveLines, setshowInactiveLines] = React.useState(false);
    const [domain, setDomain] = React.useState(6);

    const domainButtons = [
      { value: 2, label: 'Last 2' },
      { value: 4, label: 'Last 4' },
      { value: 6, label: 'Last 6' }
    ];

    const renderedCharts = charts({domain, showInactiveLines})
  
    return (
        <>
        {renderedCharts}
        <Box sx={style}>
            <FormControlLabel
            control={
                <Switch
                    checked={showInactiveLines}
                    onChange={() => setshowInactiveLines(!showInactiveLines)}
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
        </>
    )
}