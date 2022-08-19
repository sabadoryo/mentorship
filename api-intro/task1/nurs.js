import getCatsFact from '../catsFactsApi.js'

async function solution() {

    let catFact = await getCatsFact();
    let catFact1 = await getCatsFact();
    let catFact2 = await getCatsFact();
    let catFact3 = await getCatsFact();

    let ans = [];
    ans = [catFact.fact, catFact1.fact, catFact2.fact, catFact3.fact];

    return ans;
}

export default solution