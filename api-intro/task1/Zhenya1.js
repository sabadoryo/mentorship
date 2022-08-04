// Выведите 4 факта про котят
// Answer: ['fact1', 'fact2', 'fact3', 'fact4']
// Для этой задачи конечно же нужно импортнуть catsFactsApi
import getCatsFact from '../catsFactsApi.js'

async function solution() {
    let catInfo1 = await getCatsFact();
    let catInfo2 = await getCatsFact();
    let catInfo3 = await getCatsFact();
    let catInfo4 = await getCatsFact();
    return [catInfo1.fact, catInfo2.fact, catInfo3.fact, catInfo4.fact];
}

export default solution
