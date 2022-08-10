// Выведите 4 факта про котят
// Answer: ['fact1', 'fact2', 'fact3', 'fact4']
// Для этой задачи конечно же нужно импортнуть catsFactsApi

import getCatsFact from '../catsFactsApi.js';

async function solution() {
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr[i] = (await getCatsFact()).fact;
    }
    return arr;
}

export default solution