// Верните 5 фактов про котят, где длина строки в каждом элементе массива не превышает 100
// Answer: ['fact1...<100', 'fact2', 'fact3', 'fact4', 'fact5']
// Для этой задачи конечно же нужно импортнуть catsFactsApi
import getCatsFact from '../catsFactsApi.js';

async function solution() {
    let arr = [], counter = 0, getCF = await getCatsFact;
    for (let i = 0; counter < 6; i++) {
        if (getCF().length < 101) {
            arr[counter] = getCF().fact;
            counter++;
        }
    }
    return arr;
}

export default solution