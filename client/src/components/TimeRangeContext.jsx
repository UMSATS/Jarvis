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
        start: mountTime - 1000 * 3600 * 24,
        end: mountTime
    });

    const setStart = (value) => {
        setTimeRange({
            start: value,
            end: timeRange.end
        });
    }
    const setEnd = (value) => {
        setTimeRange({
            start: timeRange.start,
            end: value
        });
    }

    return (
        <TimeContext.Provider value={{ timeRange, setStart, setEnd }}>
        {children}
        </TimeContext.Provider>
    )
}