// Cheat Sheet File


import getData from "./api.js";
import fakeGetData from './fakeApi.js'
import { readFile } from 'fs/promises';

const tommyData = JSON.parse(
    await readFile(
      new URL('./tommy.json', import.meta.url)
    )
  );

const promises = [];
for (const key in tommyData) {
    for (const value of tommyData[key]) {
        promises.push(fakeGetData(value.url))
    }
}

Promise.all(promises).then(data => {
    console.log(data, 'all')
}).catch(err => {
    console.log(err + "err")
})

Promise.race(promises).then(data => {
    console.log(data, 'race')
}).catch(err => {
    console.log(err + 'err')
})

Promise.any(promises).then(data => {
    console.log(data,' any')
}).catch(err => {
    console.log(err + 'err')
})