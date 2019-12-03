import dummydata from './data.json';

export function loadData(){
  return new Promise((resolve) => {
    const data = dummydata;
    resolve(data);
  })
}