import getCatsFact from './catsFactsApi.js'

let catFact = await getCatsFact();

console.log(catFact)