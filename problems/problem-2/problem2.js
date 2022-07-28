// Закончена игра в валоранте или нет?
// Вам дан массив из итогов раундов ранговый игры в данном виде [A,B,A,A,...], ваша задача выяснить закончена игра или нет?
// A - победа команды А
// B - победа команды B

// Example Input: [A,B,A,A,A,A,A,A,A,A,A,A,A,A]
// Output: true , потому что команда A уже выиграла 13 раундов в итоге счет 13-1 в пользу команды А, игра окончена!

// Example Input: [A,B]
// Output: false, игра еще идет прошло всего 2 раунда

function solution(rounds) {
    let suma = 0;
    let sumb = 0;
    for(let i = 0; i < rounds.length; i++){
        if(rounds[i] == 'A'){
            suma++;
        }
        else if(rounds[i] == 'B'){
            sumb++;
        }
    }

    if((suma == 13 && sumb < 12) || (suma < 12 && sumb == 13)){
        console.log(true)
    }
    else if((suma - sumb == 2) || (sumb - suma == 2)){
        console.log(true)
    }
    else if(suma < 13 && sumb < 13){
        console.log(false)
    }
    else{
        console.log(false)
    }
}

module.exports = solution
































// Hint: А вы не забыли про овертайм? :)