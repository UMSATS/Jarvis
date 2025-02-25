import React, { useState, useEffect } from 'react';
import DateRangePicker from 'rsuite/DateRangePicker';
import 'rsuite/DateRangePicker/styles/index.css';
import '../styled-components/DateRangePicker.css';
import { useTimeContext } from './TimeRangeContext';

export default function TimeRangePicker() {
    const TimeContext = useTimeContext();

    const [range, setRange] = useState({
        start: TimeContext.timeRange.start,
        end: TimeContext.timeRange.end
    });

    const onChange = (value) => {
        if (value[0] && value[1]) {
            let [start, end] = value;
            if (end < start) {
                let temp = start;
                start = end;
                end = temp;
            }
            end.setHours(23, 59, 59, 999);
            setRange({
                start: start,
                end: end
            });
        }
    };

    useEffect(() => {
        TimeContext.setTimeRange({
            start: range.start,
            end: range.end
        });
    }, [range]);

    return (
        <DateRangePicker
            onChange={onChange}
            cleanable={false}
        />
    );
}
