import fakeData from './fakeData';

const fetchData = ID => {
  return fakeData[ID];
};

export default fetchData;
