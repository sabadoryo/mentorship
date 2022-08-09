// У томми есть список интересов он дан в файле tommy.json;
// Видите ли томми реально не знает, чем он хочет заняться, но он хочет заниматься тем, что первое попадется под руку.
// Он запускает несколько вкладок в браузере и ждет который из них загрузится быстрее.
// Input: tommy.json;
// Output: string. В ответ верните, то чем займется Томми например 'Cat Movie' || ''
// Для этой задачи используйте fakeApi.js and tommy.json (json != js, use rs/readfile not import);
// use google!

//import tommyJson from '../tommy.json' assert {type: "json"};
import fs from 'fs';
import getData from '../fakeApi.js';

async function solution() {
  let json = fs.readFileSync('D:\\ExpGrind\\api-challenges\\tommy.json');
  let obj = JSON.parse(json);
  let promises = [];
  let i = 0;
  for (let key in obj) {
    for (let val of obj[key]) {
      promises[i] = getData(val['url']);
      i++;
    }
  }
  try {
    let res = await Promise.any(promises);
    return res;
  } catch (e) {
    console.log(e);
    return;
  }
}
solution();

export default solution;









// Hint: Promise.all || Promise.race