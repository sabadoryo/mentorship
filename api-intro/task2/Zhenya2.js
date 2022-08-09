// Верните 5 фактов про котят, где длина строки в каждом элементе массива не превышает 100
// Answer: ['fact1...<100', 'fact2', 'fact3', 'fact4', 'fact5']
// Для этой задачи конечно же нужно импортнуть catsFactsApi
import getCatsFact from '../catsFactsApi.js'

async function solution() {
    let result = [];
    while (result.length !== 5) {
        let catInfo = await getCatsFact();
        if (catInfo.fact.length < 100) result.push(catInfo.fact);
    }
    return result;
}

export default solution