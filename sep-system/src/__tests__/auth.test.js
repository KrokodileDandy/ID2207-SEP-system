import sum from './sum';

// Needed in order to let tests pass. Remove once oyu have the first actual test up and running.
test('sums numbers', () => {
    expect(sum(1,2)).toEqual(3);
});