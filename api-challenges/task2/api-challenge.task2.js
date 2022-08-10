// Теперь вместо того чтобы возвращать возвращать страничку которая загрузилась первой, дождитесь открытия всех и верните массив из резултатов;
// Use api.js and tommy.json
//Output: [Object, Object, Object]
import getData from "../api.js";
import { readFile } from 'fs/promises';

const tommyData = JSON.parse(
    await readFile(
      new URL('../tommy.json', import.meta.url)
    )
  );

async function solution() {

    const promises = [];
for (const key in tommyData) {
    for (const value of tommyData[key]) {
        promises.push(getData(value.url));
    }
}

console.log(await Promise.all(promises));
}

solution();
export default solution;













// Hint: Promise.all || Promise.race