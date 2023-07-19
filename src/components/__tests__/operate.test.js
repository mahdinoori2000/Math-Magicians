import operate from '../../logic/operate';

describe('operate()', () => {
  test('should perfome addition of two numbers', () => {
    const result = operate('1', '2', '+');
    expect(result).toBe('3');
  });
});
