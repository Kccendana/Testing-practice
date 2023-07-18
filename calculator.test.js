const Calculator = require('./calculator');
describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  test('addition', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test('addition', () => {
    expect(calculator.add(3, 3)).toBe(6);
  });
  test('addition', () => {
    expect(calculator.add(7, 3)).toBe(10);
  });
  test('subtraction', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });
  test('subtraction', () => {
    expect(calculator.subtract(7, 2)).toBe(5);
  });
  test('subtraction', () => {
    expect(calculator.subtract(-5, 2)).toBe(-7);
  });
  test('multiplication', () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });
  test('multiplication', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
  });
  test('multiplication', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  test('division', () => {
    expect(calculator.divide(10, 2)).toBe('5.00');
  });
  test('division', () => {
    expect(calculator.divide(100, 2)).toBe('50.00');
  });
  test('division by zero', () => {
    expect(calculator.divide(10, 0)).toBeUndefined();
  });
});









