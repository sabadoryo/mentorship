import solution from './api-challenge.task1';

const answer = await solution()

describe('Task 1 return fastest fake api request', () => {
    it('Should return Fake Movie API',async () => {
        expect(answer).toBe('Fake Movie API')
    })
});