import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

export default function OrientationControls({ view, defaultTimestamp }) {
    const [timestamp, setTimestamp] = useState(defaultTimestamp);

    const renderedView = view({timestamp});
    
    return (
        <>
        {renderedView}
        <Slider 
            value={timestamp}
            min={0}
            max={4}
            onChange={(event, val) => setTimestamp(val)}
        />
        </>
    )
}