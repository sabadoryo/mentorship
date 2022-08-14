// У томми есть список интересов он дан в файле tommy.json;
// Видите ли томми реально не знает, чем он хочет заняться, но он хочет заниматься тем, что первое попадется под руку.
// Он запускает несколько вкладок в браузере и ждет который из них загрузится быстрее.
// Input: tommy.json;
// Output: string. В ответ верните, то чем займется Томми например 'Cat Movie' || ''
// Для этой задачи используйте fakeApi.js and tommy.json (json != js, use rs/readfile not import);
// use google!
import { readFile } from 'fs/promises';
import getData from '../fakeApi.js'

const tommyData = JSON.parse(
    await readFile(
      new URL('../tommy.json', import.meta.url)
    ));


function solution() {
    const promises = [];

    for (const key in tommyData) {
        for (const value of tommyData[key]) {
            let promise = getData(value.url)
            promises.push(promise);      
        }
    }

    return Promise.race(promises);
}

solution()

export default solution;









// Hint: Promise.all || Promise.race