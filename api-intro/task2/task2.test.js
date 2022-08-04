import solution from './task2';

let answer = await solution()

describe('Task 2 display 5 facts, which has length of less than 100', () => {
    it('Array length should be equal to 5', () => {
        expect(answer.length).toBe(5)
    })

    it('Expect each array element should be string', () => {
        answer.forEach(a => {
            expect(typeof a).toBe('string')
        })
    })

    it('Expect each array element should be less or equal to 100', () => {
        answer.forEach(a => {
            expect(a.length).toBeLessThanOrEqual(100)
        })
    })
});