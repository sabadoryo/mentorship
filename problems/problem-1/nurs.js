function solution(ages) {
    for (let i = 0; i < ages.length; i++){
        if(ages[i] < 64/2){
            console.log(`Вам остается жить еще ${64-ages[i]} года`)
        }
        else if(ages[i] > 64/2){
            console.log(`Вам осталось всего-то ${64-ages[i]} года до смерти`)
        }
        else if(ages[i] == 64){
            console.log(`Вы скоро умрете`)
        }
        else{
            console.log(`Вы должни были умереть еще ${ages[i]-64} лет назад`)
        }
    }
}


module.exports = solution