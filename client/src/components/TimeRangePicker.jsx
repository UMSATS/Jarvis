import React, { useState, useEffect } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useTimeContext } from './TimeRangeContext';

export default function TimeRangePicker() {
    const TimeContext = useTimeContext();

    const [range, setRange] = useState({
        start: TimeContext.timeRange.start,
        end: TimeContext.timeRange.end
    });

    const onChange = (value) => {
        let [start, end] = value;
        if (end < start) {
            let temp = start;
            start = end;
            end = temp;
        }
        setRange({
            start: start,
            end: end
        });
    };

    useEffect(() => {
        TimeContext.setTimeRange({
            start: range.start,
            end: range.end
        });
    }, [range]);
    
    return (
        <DateRangePicker
            value={[range.start, range.end]}
            onChange={onChange}
            // Hardcoded for now - should be first day of data
            minDate={new Date(2025, 0, 21)}
            // Tomorrow - could be last day of data
            maxDate={new Date((new Date()).setDate((new Date()).getDate() + 1))}
            clearIcon={null}
            calendarProps={{
                // Only triggers onChange when range is stable
                allowPartialRange: false
            }}
        />
    );
}
