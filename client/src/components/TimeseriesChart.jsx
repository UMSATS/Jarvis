import React from 'react';
// Charts and props can be individually imported as well
import ReactECharts from "echarts-for-react";

export default function TimeseriesChart({ 
  dataset,
  title, labels, style,
  seriesActivity = Array.from(
    {length: dataset.length}, (_, i) => 1
  ),
  xmin = "dataMin", xmax = "dataMax",
  ymin = "dataMin", ymax = "dataMax",
}) {
  const options = {
    title: {
      text: title
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      position: function (pos, params, el, elRect, size) {
        var obj = { top: 10 };
        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
        return obj;
      }
    },
    xAxis: {
      type: "time",
      min: xmin,
      max: xmax,
      axisPointer: {
        snap: true,
        lineStyle: {
          type: 'solid'
        }
      }
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
      animation: false,
      silent: true
    })),
    grid: {
      left: "1%"
    }
  };

  return (
    <ReactECharts option={options} style={style} />
  );
};