import React, { useState, useEffect, useRef } from 'react';
import DateRangePicker from 'rsuite/DateRangePicker';
import 'rsuite/DateRangePicker/styles/index.css';
import '../styled-components/DateRangePicker.css';
import { useTimeContext } from './TimeRangeContext';

export default function TimeRangePicker() {
    const { timeRange, setTimeRange } = useTimeContext();

    const { allowedRange } = DateRangePicker;

    const [range, setRange] = useState({
        start: timeRange.start,
        end: timeRange.end
    });

    const rangeRef = useRef({
        // Min (and maybe max) date should be based on data timestamps
        min: new Date(timeRange.start.getTime() - 1000 * 3600 * 24 * 365),
        max: new Date(timeRange.end.getTime() + 1000 * 3600 * 24)
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
        setTimeRange({
            start: range.start,
            end: range.end
        });
    }, [range, setTimeRange]);

    return (
        <DateRangePicker
            defaultValue={[range.start, range.end]}
            onChange={onChange}
            shouldDisableDate={allowedRange(rangeRef.current.min, rangeRef.current.max)}
            cleanable={false}
            format={"MM/dd/yyyy"}
            preventOverflow
            showHeader={false}
        />
    );
}
