// Arrow functions
//----------------------------
let sum = function (a, b) {
    return a + b;
}
//--------------------------
function sum() {
    return a + b;
}
//---------------------------
let sum = (a ,b) => a + b;

// console.log(sum(3,4))

// Callbacks ---------------------------------------------------------------------------------------
function work(callback, workTime) {
    const task = setInterval(() => {
        console.log('Работаю и немного кодю...')
    }, 1000)

    setTimeout(() => {
        clearInterval(task)
        callback()
    }, workTime)
}

function goHome() {
    console.log('Работа окончена, заказываю такси')
}

// work(goHome, 5000)

// Promises ---------------------------------------------------------------------------------------
// let promiseOnChocolade = new Promise((resolve, reject) => {
//     let isCarAccidentHappened = carAccidentHappened();

//     if (isCarAccidentHappened) {
//         work(goHome, 5000)

//         reject('Обещание не было выполнено... Произошла авария')
//     } else {
//         work(goHome, 5000)
        
//         resolve('Обещание было выполнено... Жена довольна шоколадкой')
//     }
// })

// function carAccidentHappened() {
//     let randomNum = Math.floor(Math.random() * 100);

//     return randomNum >= 50;
// }
//


