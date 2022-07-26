// Data Types.
const DATA_TYPES = {
    object: {},
    string: "" || '',
    int: 644644,
    array: [],
    null: null,
    undefined: undefined,
    bigInt: 96171925474095n,
    boolean: true || false
}

// Classes
class ValoraGame {
    playersAmount = 10;
    map = 'Breeze';

    constructor(server = 'Frankfurt') {
        this.server = server
    }

    getMapName() {
        return this.map;
    }
}

// variables
let a,b,c = 0;
var d,e,f = 1;


function randomFunction(a) {
    if (a > 0) {
        //var message = ''
        var message = 'more than zero'
    } else {
        let message = 'less than zero'
    }

    return message;
}
console.log(randomFunction(1))

// Functions

function sum(a,b) {
    return a+b;
}

//Loops
const data = [
    { 
        value: 1,
    },
    {
        value: 2,
    },
    {
        value:3,
    }
]

const obj = {name: 'Yernar', surname: 'Abilbay'}

for (property in obj) {
    console.log(obj)
}

// Arrays

let arr = [1,2,3, {}, "asdasdas"];

// Speech about JS and Node
