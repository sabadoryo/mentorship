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
