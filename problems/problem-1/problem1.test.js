const solution = require('./problem1')

const tests = [
    [1, 5, 10, 20, 40, 64, 80],
    [1, 2, 3, 4, 5],
]

const testAnswers = [
    [
        'Вам остается жить еще 63 года', 
        'Вам остается жить еще 59 года', 
        'Вам остается жить еще 54 года',
        'Вам остается жить еще 44 года',
        'Вам осталось всего-то 24 года до смерти',
        'Вы скоро умрете',
        'Вы должни были умереть еще 16 лет назад',
    ],
    [
        'Вам остается жить еще 63 года', 
        'Вам остается жить еще 62 года', 
        'Вам остается жить еще 61 года',
        'Вам остается жить еще 60 года',
        'Вам остается жить еще 59 года',
    ]
]
const log = console.log

test('Problem 1', () => {
    for (let i = 0; i < tests.length; i++) {
        console.log = jest.fn();
        solution(tests[i])
        for (let j = 0; j < testAnswers.length; j++) {
            expect(console.log.mock.calls[j][0]).toBe(testAnswers[i][j]);
        }
    }
});
