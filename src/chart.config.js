import * as echarts from "echarts";

const hours = [
  "12p",
  "1p",
  "2p",
  "3p",
  "4p",
  "5p",
  "6p",
  "7p",
  "8p",
  "9p",
  "10p",
  "11p",
  "12a",
  "1a",
  "2a",
  "3a",
  "4a",
  "5a",
  "6a",
  "7a",
  "8a",
  "9a",
  "10a",
  "11a"
];
const days = [
  "Saturday",
  "Friday",
  "Thursday",
  "Wednesday",
  "Tuesday",
  "Monday",
  "Sunday"
].reverse();

const createConfig = inputData => {
  console.log("inputData", inputData);

  const option = {
    tooltip: {
      position: "top"
    },
    title: [],
    singleAxis: [],
    series: []
  };

  echarts.util.each(days, function(day, idx) {
    option.title.push({
      textBaseline: "middle",
      top: ((idx + 0.5) * 100) / 7 + "%",
      text: day
    });
    option.singleAxis.push({
      left: 150,
      type: "category",
      boundaryGap: false,
      data: hours,
      top: (idx * 100) / 7 + 5 + "%",
      height: 100 / 7 - 10 + "%",
      axisLabel: {
        interval: 2
      }
    });
    option.series.push({
      singleAxisIndex: idx,
      coordinateSystem: "singleAxis",
      type: "scatter",
      data: [],
      symbolSize: function(dataItem) {
        return dataItem[1] * 4;
      }
    });
  });

  echarts.util.each(inputData, function(dataItem) {
    option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
  });

  return option;
};

export default createConfig;
