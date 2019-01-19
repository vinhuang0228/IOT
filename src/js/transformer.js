import moment from "moment";

const dict = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
};

const transformer = inputArr => {
  console.log("your input is ", inputArr);
  const temp = inputArr
    .map(data => ({
      week: dict[moment(data.created_at, "YYYY-MM-DD HH-mm-ss").format("dddd")],
      time: moment(data.created_at, "YYYY-MM-DD HH-mm-ss").hours()
    }))
    .map(item => [item.week, item.time, 1]);
  let returnArr = [];
  let frequencyTable = {};

  for (let i = 0; i < temp.length; i++) {
    const keyName = `${temp[i][0]}-${temp[i][1]}`;
    if (!frequencyTable[keyName]) {
      frequencyTable[keyName] = 1;
    } else {
      frequencyTable[keyName]++;
    }
  }

  for (let key in frequencyTable) {
    const myRegexp = /(\d)-(\d)/g;
    const matched = myRegexp.exec(key);
    console.log('matched', matched)
    returnArr.push([Number(matched[1]), Number(matched[2]), frequencyTable[key]])
  }

  console.log('returnArr', returnArr)

  return returnArr;
};

export default transformer;
