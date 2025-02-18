// Charts and props can be individually imported as well
import ReactECharts from "echarts-for-react";

export default function TimeseriesChart({ 
  dataset,
  title, labels, style,
  seriesActivity = Array.from(
    {length: dataset.length}, (_, i) => 1
  ),
  xmin = "dataMin", xmax = Date.now(),
  ymin = "dataMin", ymax = "dataMax",
  start = 0, end = 100,
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
      showSymbol: false
    })),
    dataZoom: [
      {
        show: false,
        filterMode: "none",
        startValue: start,
        endValue: end
      },
      {
        type: 'inside'
      }
    ],
  };

  return <ReactECharts option={options} style={style} />;
};