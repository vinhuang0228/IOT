var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];




module.exports = {
  title: {
    text: 'Punch Card of Github',
    link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
  },
  legend: {
    data: ['Punch Card'],
    left: 'right'
  },
  tooltip: {
    position: 'top',
    formatter: function(params) {
      return (
        params.value[2] +
        ' commits in ' +
        hours[params.value[0]] +
        ' of ' +
        days[params.value[1]]
      );
    }
  },
  grid: {
    left: 2,
    bottom: 10,
    right: 10,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: hours,
    boundaryGap: false,
    splitLine: {
      show: true,
      lineStyle: {
        color: '#999',
        type: 'dashed'
      }
    },
    axisLine: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    data: days,
    axisLine: {
      show: false
    }
  },
  series: [
    {
      name: 'Punch Card',
      type: 'scatter',
      symbolSize: function(val) {
        return val[2] * 2;
      },
      animationDelay: function(idx) {
        return idx * 5;
      }
    }
  ]
};
