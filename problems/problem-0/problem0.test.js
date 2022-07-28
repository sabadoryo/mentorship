const solution = require('./problem0')

const tests = [
    {
        name : 'Yernar', 
        math: 1.99, 
        physics: 2.99, 
        history: 4.00 
    },
    {
        name : 'Eldana', 
        math: 3.99, 
        physics: 3.97, 
        history: 3.98 
    },
]

const testAnswers = [
    'Hello, Yernar! Your average GPA is: 2.99',
    'Hello, Eldana! Your average GPA is: 3.98'
]
const log = console.log

test('Problem 0', () => {
    for (let i = 0; i < tests.length; i++) {
        console.log = jest.fn();
        solution(tests[i])
        expect(console.log.mock.calls[0][0]).toBe(testAnswers[i]);
    }
});
