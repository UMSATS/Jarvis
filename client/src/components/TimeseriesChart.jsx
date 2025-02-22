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
        filterMode: 'none'
      },
      {
        type: 'slider',
        yAxisIndex: [0],
        filterMode: 'none',
        showDataShadow: false
      }
    ],
  };

  return <ReactECharts option={options} style={style} />;
};