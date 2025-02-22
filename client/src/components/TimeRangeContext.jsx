import React, { createContext, useContext, useState } from 'react';

const TimeContext = createContext(undefined);
const mountTime = Date.now();

export function useTimeContext() {
    const context = useContext(TimeContext);
    // Compilation error
    if (context === undefined) {
        throw new Error("useTimeContext is missing a provider or values");
    }
    return context;
}

export default function TimeRangeProvider({ children }) {
    const [timeRange, setTimeRange] = useState({
        start: new Date(mountTime - 1000 * 3600 * 24),
        end: new Date(mountTime)
    });

    return (
        <TimeContext.Provider value={{ timeRange, setTimeRange }}>
            {children}
        </TimeContext.Provider>
    )
}