import moment from 'moment';

const dict = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

const transformer = inputArr => {
  console.log('your input is ', inputArr);
  const temp = inputArr
    .map(data => ({
      week: dict[moment(data.created_at, 'YYYY-MM-DD HH-mm-ss').format('dddd')],
      time: moment(data.created_at, 'YYYY-MM-DD HH-mm-ss').hours(),
    }))
    .map(item => [item.week, item.time, 1]);

  return temp;
};

export default transformer;
