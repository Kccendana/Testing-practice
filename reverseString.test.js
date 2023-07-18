const reverseString = require('./reverseString');
test('returns the reversed of the string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

