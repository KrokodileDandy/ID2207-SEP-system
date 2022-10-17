// Needed in order to let tests pass. Remove once oyu have the first actual test up and running.
test('sums numbers', () => {
    expect(1+2).toEqual(3);
});

beforeEach(() => {
    render(<Login/>)
});

it("Navigate to new page when login is clicked with valid username and password", () => {
    
}) ;