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
}

// variables
let a,b,c = 0;
var d,e,f = 1;

function randomFunction(a) {
    if (a > 0) {
        //var message = ''
        let message = 'more than zero'
    } else {
        let message = 'less than zero'
    }

    return message;
}

console.log(randomFunction(1))

// Functions

//Loops

// Arrays

// Speech about JS and Node