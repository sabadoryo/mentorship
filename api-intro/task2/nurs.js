import getCatsFact from "../catsFactsApi.js"

async function solution() {
    let count = 0;
    let a = [];
    for(let i = 0; i < 100; i++){
        if(count != 5){
            let catFact = await getCatsFact();
            if(catFact.length <= 100){
                a[count++] = catFact.fact;
            }
        }
        else{
            break;
        }
    }
    console.log(a);
}

export default solution