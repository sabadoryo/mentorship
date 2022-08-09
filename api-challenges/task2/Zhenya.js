// Теперь вместо того чтобы возвращать возвращать страничку которая загрузилась первой, дождитесь открытия всех и верните массив из резултатов;
// Use api.js and tommy.json
//Output: [Object, Object, Object]

import fs from 'fs';
import getData from '../api.js';

async function solution() {
    try {
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
        let data = await Promise.all(promises);
        console.log(data);
        return data;
    } catch (e) {
        console.log(e)
        return;
    }
}

solution();

export default solution;
