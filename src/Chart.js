import React, { Component } from 'react';
import config from './chart.config.js';
import transformer from './js/transformer';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/component/title';

export class Chart extends React.Component {
  initPlot = id => {
    const data = transformer(this.props.dataToPlot);
    let myChart = echarts.getInstanceByDom(document.getElementById(id));
    if (myChart === undefined) {
      myChart = echarts.init(document.getElementById(id));
    }
    myChart.setOption({ ...config, series: [{ ...config.series[0], data }] });
  };

  componentDidMount() {
    this.initPlot(this.props.deviceID);
  }

  render() {
    return (
      <div>
        <div
          id={this.props.deviceID}
          style={{ width: '500px', height: '500px' }}
        />
      </div>
    );
  }
}
export default Chart;
