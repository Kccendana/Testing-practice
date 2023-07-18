const stringLength = require('./stringLength');
test('returns the length of a string', () => {
    expect(stringLength('katherine')).toBe(9);;
});

test('throws error if string is less than 1 character', () => {
    expect(stringLength('')).toThrow('String should be more than 1 character');
})

test('throws error if string is less than 11 character', () => {
    expect(stringLength('This is a long string')).toThrow('String is too long');
})
