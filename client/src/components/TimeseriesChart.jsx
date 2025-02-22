import React, { useState, useEffect } from 'react';
// Charts and props can be individually imported as well
import ReactECharts from "echarts-for-react";
import { Button, Box } from "@mui/material";

export default function TimeseriesChart({ 
  dataset,
  title, labels, style,
  seriesActivity = Array.from(
    {length: dataset.length}, (_, i) => 1
  ),
  xmin = "dataMin", xmax = "dataMax",
  ymin = "dataMin", ymax = "dataMax",
}) {
  const [resetZoom, setResetZoom] = useState(false);

  useEffect(() => {
    if (resetZoom) setResetZoom(false);
  }, [resetZoom]);

  const options = {
    title: {
      text: title
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "time",
      min: xmin,
      max: xmax
    },
    yAxis: {
      type: "value",
      position: "right",
      min: ymin,
      max: ymax
    },
    series: dataset.map((lineData, index) => ({
      name: labels[index],
      type: "line",
      data: lineData,
      lineStyle: {
        opacity: seriesActivity[index]
      },
      showSymbol: false,
      animation: false
    })),
    dataZoom: [
      {
        type: 'slider',
        xAxisIndex: [0],
        filterMode: 'none',
        start: resetZoom ? 0 : undefined,
        end: resetZoom ? 100 : undefined
      },
      {
        type: 'slider',
        yAxisIndex: [0],
        filterMode: 'none',
        showDataShadow: false,
        start: resetZoom ? 0 : undefined,
        end: resetZoom ? 100 : undefined
      }
    ],
  };

  return (
    <Box style={{
      position: 'relative',
      width: '100%', height: '100%',
      ...style
    }}>
      <ReactECharts option={options} style={style} />
      <Button onClick={() => setResetZoom(true)} 
        style={{
          position: 'absolute',
          bottom: '5px',
          right: '0',
          padding: '8px 16px',
        }}
      >
        RESET
      </Button>
    </Box>
  );
};