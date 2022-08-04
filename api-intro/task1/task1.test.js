import solution from './task1';

const answer = await solution()

describe('Task 1 display 4 facts', () => {
    it('Array length should be equal to 4',async () => {
        expect(answer.length).toBe(4)
    })

    it('Expect each array element should be string', async () => {
        answer.forEach(a => {
            expect(typeof a).toBe('string')
        })
    })
});