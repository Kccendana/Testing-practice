const capitalize = require('./capitalize');

test('capitalized string', () => {
    expect(capitalize('katherine')).toBe('Katherine');;
});
