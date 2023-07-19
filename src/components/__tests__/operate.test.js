import operate from '../../logic/operate';

describe('operate()', () => {
  test('should perform addition of two numbers', () => {
    const result = operate('1', '2', '+');
    expect(result).toBe('3');
  });

  test('should perform subtraction of two numbers', () => {
    const result = operate('1', '2', '-');
    expect(result).toBe('-1');
  });

  test('should perform multiplication of two numbers', () => {
    const result = operate('1', '2', 'x');
    expect(result).toBe('2');
  });
});
