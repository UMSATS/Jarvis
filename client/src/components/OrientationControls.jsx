import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

export default function OrientationControls({ view }) {
    const [timestamp, setTimestamp] = useState(0);

    const renderedView = view({timestamp});
    return (
        <>
        {renderedView}
        <Slider 
            min={0}
            max={4}
            onChange={(e, v) => setTimestamp(v)}
        />
        </>
    )
}